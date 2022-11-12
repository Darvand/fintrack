import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colorsStyle from "../../../../styles/colors.style";

import { toColCurrency } from "../../../utils/currency.util";
import { text } from "../../../../styles/text.style";
import { icons } from "../../../constants/icons.constant";
import { PaymentMethods } from "../../../enums/payment-method.enum";

interface CardProps {
  paymentMethod: PaymentMethods;
  value: number;
}

export default function Card({ paymentMethod, value }: CardProps) {
  return (
    <View style={styles.cardContainer}>
      <View>
        {icons[paymentMethod](colorsStyle.primary, 32)}
        <Text>{paymentMethod}</Text>
      </View>
      <Text style={text.title}> {toColCurrency(value)} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderTopRightRadius: 10,
    borderTopStartRadius: 10,
    height: 107,
    width: 120,
    backgroundColor: colorsStyle.info,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
