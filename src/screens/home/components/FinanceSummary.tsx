import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./Header";
import Card from "./Card";
import { PaymentMethods } from "../../../enums/payment-method.enum";
import { toColCurrency } from "../../../utils/currency.util";
import useTransactions from "../../../hooks/useTransactions";

export default function FinanceSummary() {
  const { transactions } = useTransactions();
  const transactionsSummary = transactions.reduce((summary, transaction) => {
    return { ...summary, [transaction.paymentMethod]: (summary[transaction.paymentMethod] || 0) + transaction.value };
  }, {} as Record<string, number>);
  return (
    <View style={styles.container}>
      <Header
        title="Disponible"
        label={toColCurrency(transactions.reduce((total, transaction) => total + transaction.value, 0))}
      />
      <FlatList
        horizontal
        data={Object.entries(transactionsSummary)}
        renderItem={({ item: [paymentMethod, value] }) => (
          <Card paymentMethod={paymentMethod as PaymentMethods} value={value} />
        )}
        style={{ marginTop: 20 }}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  container: {
    width: "80%",
    height: 250,
    paddingTop: 10,
  },
});
