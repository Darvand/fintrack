import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpenseRow from "./ExpenseRow";
import { text } from "../../../../styles/text.style";
import { Transaction } from "../../../types/transaction.type";
import useTransactions from "../../../hooks/useTransactions";
import { DateTime } from "luxon";

export default function ExpensesList() {
  const { transactions } = useTransactions();
  console.log("transactions", transactions);
  const groupedTransactions = transactions.reduce((group, transaction) => {
    return { ...group, [transaction.date.toISODate()]: [...(group[transaction.date.toISODate()] || []), transaction] };
  }, {} as Record<string, Transaction[]>);
  return (
    <View style={styles.container}>
      <Text style={text.title}>Groceries</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={Object.entries(groupedTransactions).sort(
            (previous, next) => DateTime.fromISO(next[0]).toMillis() - DateTime.fromISO(previous[0]).toMillis()
          )}
          renderItem={({ item: [date, transaction] }) => (
            <View>
              <Text style={{ ...text.title, marginBottom: 10 }}>{date}</Text>
              <FlatList
                data={transaction}
                renderItem={({ item }) => <ExpenseRow {...item} />}
                ItemSeparatorComponent={() => <View style={{ height: 3 }} />}
              />
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F8FB",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    width: "100%",
    flexGrow: 1,
  },
  listContainer: {
    marginTop: 18,
    flex: 1,
    paddingBottom: 100,
  },
});
