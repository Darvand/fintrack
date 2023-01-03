import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import { PaymentMethods } from "../../../enums/payment-method.enum";
import colorsStyle from "../../../../styles/colors.style";

interface PaymentMethodButtonProps {
  onPress: (field: string, value: string) => void;
  value: string;
  paymentMethod: PaymentMethods;
}

export default function PaymentMethodButton({ onPress, value, paymentMethod }: PaymentMethodButtonProps) {
  return (
    <Pressable
      style={value === paymentMethod ? styles.selected : styles.unselected}
      onPress={() => onPress("paymentMethod", paymentMethod)}
    >
      <Text style={{ color: value === paymentMethod ? styles.selected.color : styles.unselected.color }}>
        {paymentMethod}
      </Text>
    </Pressable>
  );
}

const commonStyle = {
  paddingHorizontal: 10,
  paddingVertical: 15,
  borderRadius: 10,
  flex: 1,
  textAlign: "center",
};

const styles = StyleSheet.create({
  selected: {
    ...commonStyle,
    backgroundColor: colorsStyle.primary,
    color: colorsStyle.white,
  },
  unselected: {
    ...commonStyle,
    borderColor: colorsStyle.primary,
    backgroundColor: colorsStyle.white,
    color: colorsStyle.primary,
    borderWidth: 1,
  },
});
