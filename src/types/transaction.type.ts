import { DateTime } from "luxon";

import { Categories } from "../enums/category.enum";
import { PaymentMethods } from "../enums/payment-method.enum";

interface TransactionDetail {
  id: number;
  quantity: number;
  name: string;
  value: number;
}

export interface Transaction {
  source: string;
  value: number;
  date: DateTime;
  paymentMethod: PaymentMethods;
  category: Categories;
  details: TransactionDetail[];
}
