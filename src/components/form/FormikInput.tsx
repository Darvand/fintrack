import { StyleSheet, ViewStyle, TextInput, View, Text } from "react-native";
import React from "react";
import colorsStyle from "../../../styles/colors.style";

interface FormikInputProps {
  name: string;
  placeholder?: string;
  numeric?: boolean;
  values: Record<string, any>;
  errors: Record<string, any>;
  style?: ViewStyle;
  label?: string;
  setFieldValue: (name: string, value: string) => void;
}

export default function FormikInput({
  name,
  placeholder,
  numeric,
  values,
  errors,
  style,
  label,
  setFieldValue,
}: FormikInputProps) {
  return (
    <View style={[label ? styles.inputContainer : {}, style]}>
      {label && <Text style={styles.titles}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        style={[
          styles.container,
          { color: values[name] ? colorsStyle.primary : colorsStyle.gray, borderWidth: errors[name] ? 1 : 0 },
        ]}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        keyboardType={numeric ? "numeric" : "default"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorsStyle.white,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    borderColor: colorsStyle.error,
  },
  inputContainer: {
    marginBottom: 10,
    textAlign: "center",
  },
  titles: {
    fontWeight: "bold",
    color: colorsStyle.primary,
    marginBottom: 5,
    textAlign: "left",
  },
});
