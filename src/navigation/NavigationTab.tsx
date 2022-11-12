import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "../screens/home/Home";
import Debts from "../screens/debts/Debts";
import colorsStyle from "../../styles/colors.style";
import Create from "../screens/create/Create";
import { Text, View } from "react-native";
import { text } from "../../styles/text.style";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { paddingTop: 10, paddingBottom: 10, height: 80, borderTopWidth: 0 },
        headerShown: false,
      }}
      initialRouteName="Create"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Entypo name="home" size={32} color={colorsStyle.primary} style={{ justifyContent: "center", flex: 1 }} />
              <Text style={text.subTitle}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ backgroundColor: colorsStyle.primary, padding: 2, borderRadius: 10 }}>
              <Ionicons name="add" size={40} color={colorsStyle.info} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Debts"
        component={Debts}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="cash-lock" size={32} color={colorsStyle.primary} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
