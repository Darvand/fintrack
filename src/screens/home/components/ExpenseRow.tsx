import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Transaction } from "../../../types/transaction.type";
import { toColCurrency } from "../../../utils/currency.util";
import { icons } from "../../../constants/icons.constant";
import colorsStyle from "../../../../styles/colors.style";
import { text } from "../../../../styles/text.style";

export default function ExpenseRow(transaction: Transaction) {
  return (
    <View style={styles.card}>
      <View style={styles.leftContainer}>
        <View style={styles.icon}>{icons[transaction.paymentMethod](colorsStyle.info, 20)}</View>
        <View style={styles.flexColumn}>
          <Text style={styles.mainText}>{toColCurrency(transaction.value)}</Text>
          <Text style={styles.subText}>{transaction.source}</Text>
        </View>
      </View>
      <View>
        <View style={styles.rightContainer}>
          <Text style={styles.text}>{transaction.date.toISODate()}</Text>
          <Text style={styles.category}>{transaction.category}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  leftContainer: {
    flex: 1,
    flexDirection: "row",
  },
  rightContainer: {
    flex: 1,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffff",
    borderRadius: 10,
    height: 53,
    padding: 10,
    alignContent: "space-around",
  },
  flexColumn: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    color: "#153C65",
  },
  mainText: {
    color: "#153C65",
    fontWeight: "bold",
    fontSize: 12,
  },
  subText: {
    color: "#678198",
  },
  icon: {
    backgroundColor: colorsStyle.primary,
    borderRadius: 10,
    padding: 6,
    marginRight: 6,
  },
  category: {
    ...text.base,
  },
});
