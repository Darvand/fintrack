export enum PaymentMethods {
  CREDIT = "Credit",
  DEBIT = "Debit",
  CASH = "Cash",
}
export const PaymentMethodsArray = Object.values(PaymentMethods).slice(Object.values(PaymentMethods).length / 2 - 1);
