import { Categories } from "../enums/category.enum";
import { PaymentMethods } from "../enums/payment-method.enum";

export interface Transaction {
  source: string;
  value: number;
  date: string;
  paymentMethod: PaymentMethods;
  category: Categories;
}
