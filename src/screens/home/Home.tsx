import { Dimensions, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import FinanceSummary from "./components/FinanceSummary";
import ExpensesList from "./components/ExpensesList";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FinanceSummary />
        <ExpensesList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#234F9D",
    alignItems: "center",
    color: "#fff",
    height: Dimensions.get("window").height,
  },
});
