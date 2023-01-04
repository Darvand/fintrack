import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from "@expo/vector-icons";

import { DateTime } from "luxon";

import colorsStyle from "../../../styles/colors.style";
import { Categories, CategoriesArray } from "../../enums/category.enum";
import { PaymentMethods, PaymentMethodsArray } from "../../enums/payment-method.enum";
import Dropdown from "../../components/Dropdown";
import { SafeAreaView } from "react-native-safe-area-context";
import { text } from "../../../styles/text.style";
import { Transaction } from "../../types/transaction.type";
import { layout } from "../../../styles/layout.style";
import PaymentMethodButton from "./components/PaymentMethodButton";
import useTransactions from "../../hooks/useTransactions";
import Input from "../../components/form/Input";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import PaymentMethodButtons from "./components/PaymentMethodButtons";
import FormikInput from "../../components/form/FormikInput";

const INITIAL_VALUES: Transaction = {
  category: Categories.FOOD,
  paymentMethod: PaymentMethods.CREDIT,
  date: DateTime.now(),
  source: "",
  value: 0,
  details: [],
};

export default function Create({ navigation, route }: NativeStackScreenProps<{ Home: undefined }>) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { addTransaction } = useTransactions();
  const formik = useFormik<Transaction>({
    initialValues: INITIAL_VALUES,
    validationSchema: Yup.object({
      category: Yup.mixed().oneOf(CategoriesArray),
      paymentMethod: Yup.mixed().oneOf(PaymentMethodsArray),
      date: Yup.date()
        .max(DateTime.now().plus({ day: 1 }).startOf("day").toJSDate())
        .required(),
      source: Yup.string().required("Source is required"),
      value: Yup.number().moreThan(0, "Value should be more than zero").required("Value is required"),
      details: Yup.array()
        .min(1, "Details should contain at least one item")
        .of(
          Yup.object({
            quantity: Yup.number().min(1, "Quantity should be more than zero").required("Quantity is required"),
            name: Yup.string().required("Name is required"),
            value: Yup.number().moreThan(0, "Value should be more than zero").required("Value is required"),
          })
        ),
    }),
    onSubmit: (form) => {
      addTransaction({ ...form, value: +form.value * -1 });
      navigation.navigate("Home");
    },
  });

  const addItem = () => {
    formik.setFieldValue("details", [
      ...(formik.values.details || []),
      { name: "", quantity: "", id: DateTime.now().millisecond },
    ]);
  };
  const deleteItem = (id: number) => {
    formik.setFieldValue(
      "details",
      formik.values.details?.filter((detail) => detail.id !== id)
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.form}>
          <Text style={{ ...text.title, textAlign: "center", marginBottom: 30 }}>New transaction</Text>
          <PaymentMethodButtons {...formik} />
          <View style={styles.row}>
            <FormikInput label="Source" name="source" placeholder="D1 - Cabanias" style={{ flex: 1 }} {...formik} />
            <View style={{ width: 10 }} />
            <FormikInput label="Value" name="value" numeric style={{ flex: 1 }} {...formik} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.titles}>Date</Text>
            <Pressable
              onPress={() => setShowDatePicker(true)}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 15,
                borderRadius: 10,
                backgroundColor: colorsStyle.white,
              }}
            >
              <Text style={{ color: colorsStyle.primary, textAlign: "center" }}>
                {formik.values.date!.toFormat("dd LLLL yyyy")}
              </Text>
            </Pressable>
            {showDatePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={formik.values.date!.toJSDate()}
                mode={"date"}
                onChange={(event, selectedDate) => {
                  setShowDatePicker(false);
                  formik.setFieldValue("date", DateTime.fromJSDate(selectedDate!));
                }}
              />
            )}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.titles}>Category</Text>
            <Dropdown
              label={formik.values.category!}
              data={Object.values(Categories).map((category) => ({ label: category, value: category }))}
              onSelect={(item) => formik.setFieldValue("category", item.value)}
            />
          </View>
          <View>
            <Text style={styles.titles}>Details</Text>
            <View style={styles.detailsContainer}>
              <View style={{ ...layout.flexRow }}>
                <Text style={{ ...styles.detailsHeader, flex: 4 }}>Name</Text>
                <View style={{ width: 10 }} />
                <Text style={{ ...styles.detailsHeader, flex: 2 }}>Quantity</Text>
                <View style={{ width: 10 }} />
                <Text style={{ ...styles.detailsHeader, flex: 2 }}>Price</Text>
                <View style={{ width: 10 }} />
                <View style={{ flex: 1 }} />
              </View>
              {formik.values.details?.map((item, index) => (
                <View style={{ ...layout.flexRow, paddingHorizontal: 10, paddingVertical: 5 }} key={item.id}>
                  <FormikInput name={`details.${index}.name`} style={{ ...styles.detailsInput, flex: 4 }} {...formik} />
                  <View style={{ width: 10 }} />
                  <Input
                    name={`details.${index}.quantity`}
                    style={[styles.detailsInput, { flex: 2 }]}
                    numeric
                    {...formik}
                  />
                  <View style={{ width: 10 }} />
                  <Input
                    name={`details.${index}.value`}
                    style={[styles.detailsInput, { flex: 2 }]}
                    numeric
                    {...formik}
                  />
                  <View style={{ width: 10 }} />
                  <Pressable style={[{ flex: 1, justifyContent: "center" }]} onPress={() => deleteItem(item.id)}>
                    <AntDesign name="delete" size={24} color={colorsStyle.primary} />
                  </Pressable>
                </View>
              ))}
            </View>

            <Pressable onPress={addItem} style={styles.addItemButton}>
              <Text style={{ color: colorsStyle.primary, textAlign: "center" }}>Add item</Text>
            </Pressable>
          </View>
          <View style={{ height: 10 }} />
          <Pressable onPress={formik.submitForm} style={styles.submit}>
            <Text style={{ color: colorsStyle.white, textAlign: "center" }}>Submit</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    alignContent: "flex-start",
    justifyContent: "flex-start",
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titles: {
    fontWeight: "bold",
    color: colorsStyle.primary,
    marginBottom: 5,
    textAlign: "left",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsContainer: {
    backgroundColor: colorsStyle.white,

    borderTopLeftRadius: 10,
    borderTopEndRadius: 10,
  },
  addItemButton: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colorsStyle.white,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  detailsInput: {
    backgroundColor: colorsStyle.info,
    paddingVertical: 5,
  },
  detailsHeader: {
    textAlign: "center",
    fontWeight: "bold",
    color: colorsStyle.primary,
    paddingVertical: 5,
  },
  submit: {
    borderRadius: 10,
    backgroundColor: colorsStyle.primary,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});
