import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ReactElement } from "react";
import { PaymentMethods } from "../enums/payment-method.enum";

export const icons: Record<PaymentMethods, (color: string, size: number) => ReactElement> = {
  [PaymentMethods.CASH]: (color: string, size: number) => (
    <MaterialCommunityIcons name="hand-coin" size={size} color={color} />
  ),
  [PaymentMethods.CREDIT]: (color: string, size: number) => <Ionicons name="card" size={size} color={color} />,
  [PaymentMethods.DEBIT]: (color: string, size: number) => (
    <MaterialCommunityIcons name="bank" size={size} color={color} />
  ),
};
