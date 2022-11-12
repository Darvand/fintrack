import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../../../styles/layout.style";
import { text } from "../../../../styles/text.style";
import Colors from "../../../../styles/colors.style";

interface HeaderProps {
  title: string;
  label: string;
}

export default function Header({ title, label }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={{ ...text.title, fontWeight: "200", color: Colors.info }}>{title}</Text>
      <Text style={{ ...text.header, color: Colors.info }}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...layout.flexColumn,
    width: "100%",
    flex: 1,
    flexBasis: "auto",
  },
});
