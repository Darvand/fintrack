import { StyleSheet } from "react-native";

import Colors from "./colors.style";

const base = {
  color: Colors.primary,
  fontSize: 12,
};

export const text = StyleSheet.create({
  base,
  title: {
    ...base,
    fontSize: 17,
    fontWeight: "bold",
  },
  subTitle: {
    ...base,
    color: Colors.gray,
  },
  header: {
    ...base,
    fontSize: 30,
    fontWeight: "bold",
  },
});
