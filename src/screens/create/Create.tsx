import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useFormik } from "formik";
import DateTimePicker from "@react-native-community/datetimepicker";

import colorsStyle from "../../../styles/colors.style";
import { Categories } from "../../enums/category.enum";
import { PaymentMethods } from "../../enums/payment-method.enum";
import { toColCurrency } from "../../utils/currency.util";
import Dropdown from "../../components/Dropdown";

const INITIAL_VALUES = {
  category: Categories.FOOD,
  source: undefined,
  paymentMethod: PaymentMethods.CREDIT,
  value: undefined,
  date: new Date(Date.now()),
  transactions: [],
};

export default function Create() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (form) => {
      console.log("form", form);
    },
  });
  return (
    <View style={styles.form}>
      <Text>New transaction</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.titles}>Payment method</Text>
        <View style={styles.buttons}>
          <Pressable
            style={{
              ...styles.button,
              backgroundColor:
                formik.values.paymentMethod === PaymentMethods.CREDIT ? colorsStyle.primary : colorsStyle.gray,
            }}
            onPress={() => formik.setFieldValue("paymentMethod", PaymentMethods.CREDIT)}
          >
            <Text style={{ color: colorsStyle.white }}>{PaymentMethods.CREDIT}</Text>
          </Pressable>
          <View style={{ width: 10 }} />
          <Pressable
            style={{
              ...styles.button,
              backgroundColor:
                formik.values.paymentMethod === PaymentMethods.CASH ? colorsStyle.primary : colorsStyle.gray,
            }}
            onPress={() => formik.setFieldValue("paymentMethod", PaymentMethods.CASH)}
          >
            <Text style={{ color: colorsStyle.white }}>{PaymentMethods.CASH}</Text>
          </Pressable>
          <View style={{ width: 10 }} />
          <Pressable
            style={{
              ...styles.button,
              backgroundColor:
                formik.values.paymentMethod === PaymentMethods.DEBIT ? colorsStyle.primary : colorsStyle.gray,
            }}
            onPress={() => formik.setFieldValue("paymentMethod", PaymentMethods.DEBIT)}
          >
            <Text style={{ color: colorsStyle.white }}>{PaymentMethods.DEBIT}</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.titles}>Source</Text>
          <TextInput
            placeholder="D1 - Cabanias"
            style={{ ...styles.input, color: formik.values.source ? colorsStyle.white : colorsStyle.gray }}
            onChangeText={(text) => formik.setFieldValue("source", text)}
            value={formik.values.source}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.titles}>Value</Text>
          <TextInput
            placeholder="0 $"
            style={{ ...styles.input, color: formik.values.value ? colorsStyle.white : colorsStyle.gray }}
            onChangeText={(text) => formik.setFieldValue("value", text)}
            value={toColCurrency(formik.values.value || 0)}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.titles}>Date</Text>
        <Pressable onPress={() => setShowDatePicker(true)}>
          <Text>{formik.values.date.toISOString()}</Text>
        </Pressable>
        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={formik.values.date}
            mode={"date"}
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              formik.setFieldValue("date", selectedDate);
            }}
          />
        )}
      </View>
      <View style={styles.inputContainer}>
        <Dropdown />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
  },
  input: {
    backgroundColor: colorsStyle.white,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
  },
  inputContainer: {
    marginBottom: 10,
    textAlign: "center",
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    flex: 1,
    textAlign: "center",
  },
  titles: {
    fontWeight: "bold",
    color: colorsStyle.primary,
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
