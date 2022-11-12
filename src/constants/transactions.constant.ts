import { Categories } from "../enums/category.enum";
import { PaymentMethods } from "../enums/payment-method.enum";
import { Transaction } from "../types/transaction.type";

export const transactions: Transaction[] = [
  {
    source: "PriceSmart",
    value: -900000,
    date: "05/11/2022",
    paymentMethod: PaymentMethods.CREDIT,
    category: Categories.GROCERIES,
  },
  {
    source: "D1 - Cabanias",
    value: -40000,
    date: "05/11/2022",
    paymentMethod: PaymentMethods.CREDIT,
    category: Categories.FOOD,
  },
  {
    source: "Tienda Las Cabanias",
    value: -14000,
    date: "04/11/2022",
    paymentMethod: PaymentMethods.CASH,
    category: Categories.HOUSE,
  },
  {
    source: "Tienda Las Cabanias",
    value: -14000,
    date: "04/11/2022",
    paymentMethod: PaymentMethods.CASH,
    category: Categories.HOUSE,
  },
  {
    source: "Tienda Las Cabanias",
    value: -14000,
    date: "04/11/2022",
    paymentMethod: PaymentMethods.CASH,
    category: Categories.HOUSE,
  },
  {
    source: "Tienda Las Cabanias",
    value: -14000,
    date: "04/11/2022",
    paymentMethod: PaymentMethods.CASH,
    category: Categories.HOUSE,
  },
  {
    source: "Tienda Las Cabanias",
    value: -14000,
    date: "03/11/2022",
    paymentMethod: PaymentMethods.CASH,
    category: Categories.HOUSE,
  },
  {
    source: "Tienda Las Cabanias",
    value: -14000,
    date: "03/11/2022",
    paymentMethod: PaymentMethods.CASH,
    category: Categories.HOUSE,
  },
  {
    source: "Tienda Las Cabanias",
    value: -14000,
    date: "03/11/2022",
    paymentMethod: PaymentMethods.CASH,
    category: Categories.HOUSE,
  },
  {
    source: "Tienda Las Cabanias",
    value: -14000,
    date: "03/11/2022",
    paymentMethod: PaymentMethods.CASH,
    category: Categories.HOUSE,
  },
  {
    source: "Tienda Las Cabanias",
    value: -14000,
    date: "03/11/2022",
    paymentMethod: PaymentMethods.CASH,
    category: Categories.HOUSE,
  },
];
