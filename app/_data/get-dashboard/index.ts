import { db } from "@/app/_lib/prisma";
import { TransactionType } from "@prisma/client";
import { TotalExpensePerCategory, TransactionPercentagePerType } from "./types";
import { auth } from "@clerk/nextjs/server";

export const getDashboard = async (month: string, year: string) => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const startDate = new Date(`${year}-${month}-01T00:00:00.000Z`);
  const endDate = new Date(`${year}-${month}-31T23:59:59.999Z`);

  const where = {
    userId,
    date: {
      gte: startDate,
      lt: endDate,
    },
  };

  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )?._sum?.amount || 0,
  );

  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )?._sum?.amount || 0,
  );

  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: { amount: true },
      })
    )?._sum?.amount || 0,
  );

  const balance = depositsTotal - investmentsTotal - expensesTotal;
  const transactionsTotal = depositsTotal + investmentsTotal + expensesTotal;

  const typesPercentage: TransactionPercentagePerType = {
    [TransactionType.DEPOSIT]: transactionsTotal
      ? Math.round((depositsTotal / transactionsTotal) * 100)
      : 0,
    [TransactionType.EXPENSE]: transactionsTotal
      ? Math.round((expensesTotal / transactionsTotal) * 100)
      : 0,
    [TransactionType.INVESTMENT]: transactionsTotal
      ? Math.round((investmentsTotal / transactionsTotal) * 100)
      : 0,
  };

  const totalExpensePerCategory: TotalExpensePerCategory[] = (
    await db.transaction.groupBy({
      by: ["category"],
      where: {
        ...where,
        type: TransactionType.EXPENSE,
      },
      _sum: {
        amount: true,
      },
    })
  ).map((category) => ({
    category: category.category,
    totalAmount: Number(category._sum.amount || 0),
    percentageOfTotal: expensesTotal
      ? Math.round((Number(category._sum.amount || 0) / expensesTotal) * 100)
      : 0,
  }));

  const lastTransactions = await db.transaction.findMany({
    where,
    orderBy: { date: "desc" },
    take: 15,
  });

  return {
    balance,
    depositsTotal,
    investmentsTotal,
    expensesTotal,
    typesPercentage,
    totalExpensePerCategory,
    lastTransactions: JSON.parse(JSON.stringify(lastTransactions)),
  };
};
