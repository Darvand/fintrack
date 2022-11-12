import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import FinanceSummary from "./components/FinanceSummary";
import ExpensesList from "./components/ExpensesList";

export default function Home() {
  return (
    <View style={styles.container}>
      <FinanceSummary />
      <ExpensesList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#234F9D",
    alignItems: "center",
    color: "#fff",
    height: Dimensions.get("window").height,
  },
});
