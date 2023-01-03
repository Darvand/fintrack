import { StyleSheet, TextInput, ViewStyle } from "react-native";
import React from "react";
import colorsStyle from "../../../styles/colors.style";

interface InputProps {
  name: string;
  placeholder?: string;
  numeric?: boolean;
  values: Record<string, any>;
  errors: Record<string, any>;
  style?: ViewStyle[];
  setFieldValue: (name: string, value: string) => void;
}

export default function Input({ name, placeholder, numeric, values, errors, style, setFieldValue }: InputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      style={[
        styles.container,
        { color: values[name] ? colorsStyle.primary : colorsStyle.gray, borderWidth: errors[name] ? 1 : 0 },
        ...(style || []),
      ]}
      onChangeText={(text) => setFieldValue(name, text)}
      value={values[name]}
      keyboardType={numeric ? "numeric" : "default"}
    />
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
});
