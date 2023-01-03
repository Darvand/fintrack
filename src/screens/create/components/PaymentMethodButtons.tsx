import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PaymentMethods } from "../../../enums/payment-method.enum";
import PaymentMethodButton from "./PaymentMethodButton";
import colorsStyle from "../../../../styles/colors.style";

interface PaymentMethodButtonsProps {
  setFieldValue: (name: string, value: string) => void;
  values: Record<string, any>;
}

export default function PaymentMethodButtons({ setFieldValue, values }: PaymentMethodButtonsProps) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.titles}>Payment method</Text>
      <View style={styles.buttons}>
        <PaymentMethodButton
          onPress={setFieldValue}
          paymentMethod={PaymentMethods.CREDIT}
          value={values.paymentMethod!}
        />
        <View style={{ width: 10 }} />
        <PaymentMethodButton
          onPress={setFieldValue}
          paymentMethod={PaymentMethods.DEBIT}
          value={values.paymentMethod!}
        />
        <View style={{ width: 10 }} />
        <PaymentMethodButton
          onPress={setFieldValue}
          paymentMethod={PaymentMethods.CASH}
          value={values.paymentMethod!}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titles: {
    fontWeight: "bold",
    color: colorsStyle.primary,
    marginBottom: 5,
    textAlign: "left",
  },
});
