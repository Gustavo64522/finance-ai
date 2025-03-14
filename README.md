# 📌 Finance.ai - Sistema de Gestão Financeira
![Badge de Status](https://img.shields.io/badge/Status-Concluído-brightgreen)


## 📖 Descrição

Este projeto foi desenvolvido com o intuito de aprimorar minhas habilidades como programador full-stack. A plataforma permite o cadastro e o controle de transações financeiras categorizadas, como salário, despesas de mercado, lazer, entre outras. O foco principal foi no desenvolvimento de back-end, utilizando Next.js, Prisma, PostgreSQL, autenticação com Clerk, integração com Stripe e a implementação de ChatGPT para gerar insights financeiros.
Os usuários podem registrar o método de pagamento utilizado em cada transação, como Pix, cartão de crédito, etc., e visualizar gráficos interativos que mostram a divisão de despesas, receitas e investimentos. A integração com o ChatGPT já está implementada e fornece insights sobre a saúde financeira do usuário, incluindo dicas de economia e análise de despesas por categoria. No entanto, como o projeto é de aprendizado e não um produto comercial, a funcionalidade de insights está disponível apenas como um exemplo, já que o acesso à API do ChatGPT ainda não foi viabilizado para uso em produção.

## 🚀 Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Clerk](https://clerk.com/)
- [Stripe](https://stripe.com/br)
- [ChatGPT](https://chatgpt.com/)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- **Back-end**: Desenvolvido com **Next.js** e **Prisma**.
- **Banco de Dados**: Utilização de **PostgreSQL** para persistência de dados.
- **Autenticação**: **Clerk** para gerenciamento de login e autenticação.
- **Pagamentos**: Integração com **Stripe** para o gerenciamento de assinaturas.
- **Insights Financeiros**: Integração com **ChatGPT** para geração de relatórios de IA.

## 📸 Demonstração
https://github.com/user-attachments/assets/8c495acf-3359-4615-975f-67606a0ea7d6

## ⚙️ Funcionalidades

### 1. ✔️ **Autenticação de Usuário**
- **Login via Clerk**:
  - Suporte para login com **email e senha** ou **Google** (autenticação via OAuth).
  - Redirecionamento após login para o **Dashboard**.

### 2. ✔️ **Cadastro de Transações**
- Permite o registro de **transações financeiras** com os seguintes dados:
  - **Título da transação**: Nome ou descrição da transação.
  - **Valor da transação**: O valor monetário da transação.
  - **Tipo da transação**: Categorização da transação (Despesa, Depósito, Investimento).
  - **Categoria da transação**: Exemplo: Educação, Entretenimento, Alimentação, Saúde, Moradia, Salário, Transporte, Utilidades, etc.
  - **Método de pagamento**: Pode incluir **Transferência Bancária**, **Boleto Bancário**, **Cartão de Débito**, **Cartão de Crédito**, **Dinheiro**, **Outros**, **Pix**.
  - **Data da transação**: Data em que a transação foi realizada.
- Cadastro de transações por meio da **Página de Transações** ou **Dashboard**.

### 3. ✔️ **Edição e Exclusão de Transações**
- **Edição e Exclusão** de transações existentes, permitindo corrigir ou remover dados conforme necessário.
- Apenas disponível na **Página de Transações**.

### 4. ✔️ **Visão Geral das Finanças**
- Exibição de **gráficos interativos** para visualização de:
  - **Despesas**, **Receitas** e **Investimentos**.
  - **Distribuição percentual por categoria** de despesas (exemplo: 20% Educação, 80% Moradia).
- **Carteira do Mês**: Calcula o saldo mensal, considerando os totais de **despesas**, **receitas** e **investimentos**.
- **Gráfico de Pizza**: Exibe a divisão percentual entre **Investimentos**, **Receitas** e **Despesas**.
- **Listagem das últimas transações** registradas no mês filtrado.

### 5. ✔️ **Relatório de Insights com IA (ChatGPT)**
- **Integração com ChatGPT** para gerar **relatórios de insights financeiros**.
  - O sistema fornece análises detalhadas das finanças, como:
    - Dicas de economia.
    - Alertas sobre **despesas elevadas** por categoria.
    - Análise de **saúde financeira** com base nas transações registradas.
- Essa funcionalidade depende da assinatura do plano **premium** e está disponível via **Dashboard**.

### 6. ✔️ **Assinatura e Planos**
- **Plano Básico**:
  - Limitado a **10 transações por mês**.
  - Acesso **bloqueado ao relatório de IA**.
- **Plano Premium**:
  - Oferece **transações ilimitadas**.
  - Acesso ao **relatório de IA**.
  - **Redirecionamento para Stripe** para pagamento e ativação do plano premium.
- Após o cadastro, o usuário começa com o **Plano Básico** e pode optar por **atualizar** para o **Plano Premium**.

### 7. ✔️ **Integração com Stripe**
- Utilização do **Stripe** para processamento de pagamentos de planos.
- **Assinatura do plano premium** via Stripe, com pagamento seguro.


## 🎯 Como Usar

```bash
# Clone este repositório
$ git clone git@github.com:Gustavo64522/finance-ai.git

# Entre no diretório
$ cd finance-ai

# Instale as dependências
$ npm install

# Configure as variáveis de ambiente:
# Crie um arquivo .env e configure as variáveis necessárias para Clerk, PostgreSQL, e Stripe.

# Crie o banco de dados e execute as migrations:
$ npx prisma migrate dev

# Execute o projeto
$ npm run dev
```

## 🛠 Melhorias Futuras

- [ ] Ajustar o projeto para dispositivos móveis: Tornar o layout responsivo com Tailwind CSS, utilizando as classes de breakpoint para garantir que o design seja adaptável a diferentes tamanhos de tela. 
- [ ] Adicionar suporte a transações parceladas: Implementar a funcionalidade de dividir transações em várias parcelas, com uma interface que permita ao usuário registrar o número de parcelas e o valor correspondente.
- [ ] Incluir rendimentos nas transações de investimento: Implementar a opção para os usuários registrarem rendimentos provenientes de investimentos, com cálculos automáticos para agregar esses rendimentos ao total do investimento.
- [ ] Substituir o exemplo atual da API do ChatGPT pela versão paga: Integrar a API paga do ChatGPT para gerar insights financeiros personalizados com base nos dados das transações cadastradas, substituindo o exemplo básico atual.
- [ ] Permitir compra do plano premium via Stripe: Adicionar uma funcionalidade de checkout com Stripe, permitindo que os usuários adquiram o plano premium diretamente no sistema, incluindo a implementação de fluxos de pagamento e gerenciamento de assinaturas.
- [ ] Oferecer mais benefícios para usuários do plano premium: Implementar funcionalidades exclusivas para usuários premium, como cálculo de rendimentos de investimentos e a opção de parcelamento de transações.
- [ ] Desenvolver um plano de vendas real para o SaaS: Criar um modelo de negócios com uma estratégia de marketing voltada para a divulgação do serviço e a atração de novos usuários, incluindo táticas para promover o plano premium.
"Essas melhorias visam aprimorar tanto a parte técnica quanto as funcionalidades do sistema, garantindo um projeto mais completo e robusto. Elas focam em otimizar a funcionalidade e a experiência do usuário, oferecendo uma interface mais intuitiva e fluida, além de incluir opções avançadas de pagamento e benefícios, proporcionando uma plataforma mais eficiente e atraente, além de abrir oportunidades para monetizar o projeto!"

## 📌 Contribuição

Sinta-se à vontade para contribuir! Basta seguir os passos:
1. Faça um Fork do projeto
2. Crie uma branch (`git checkout -b minha-feature`)
3. Faça commit das mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça um push para a branch (`git push origin minha-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito  por [Gustavo Andrade](https://github.com/gustavo64522)
