import { createContext, PropsWithChildren, useState } from "react";
import { Transaction } from "../types/transaction.type";
import { transactions as defaultTransactions, transactions } from "../constants/transactions.constant";

export const TransactionsContext = createContext<{
  transactions: Transaction[];
  addTransaction: (transactions: Transaction) => void;
}>({
  transactions: [],
  addTransaction: (transaction: Transaction) => {},
});

export const TransactionsProvider = ({ children }: PropsWithChildren) => {
  const [transactions, setTransactions] = useState<Transaction[]>(defaultTransactions);

  const addTransaction = (transaction: Transaction) => setTransactions([...transactions, transaction]);

  const valueContext = { transactions, addTransaction };
  return <TransactionsContext.Provider value={valueContext}>{children}</TransactionsContext.Provider>;
};
