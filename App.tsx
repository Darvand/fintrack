import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TransactionsProvider } from "./src/contexts/transactions.context";
import NavigationTab from "./src/navigation/NavigationTab";
import colorsStyle from "./styles/colors.style";

export default function App() {
  return (
    <NavigationContainer>
      <TransactionsProvider>
        <NavigationTab />
      </TransactionsProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#234F9D",
    alignItems: "center",
    color: colorsStyle.info,
    height: Dimensions.get("window").height,
  },
});
