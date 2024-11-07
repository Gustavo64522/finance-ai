import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import AddTransaction from "../_components/add-transactions-button";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});

  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransaction />
      </div>
      <DataTable columns={transactionColumns} data={transactions}></DataTable>
    </div>
  );
};

export default TransactionsPage;
