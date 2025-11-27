import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HabitsScreen from "../screens/HabitsScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import PatientsScreen from "../screens/PatientsScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "#0B1020" },
        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "#CCCCCC",
        tabBarIcon: ({ color, size }) => {
          let iconName = "home";

          if (route.name === "Início") iconName = "home";
          if (route.name === "Hábitos") iconName = "list";
          if (route.name === "Pacientes") iconName = "people";
          if (route.name === "Configurações") iconName = "settings";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Hábitos" component={HabitsScreen} />
      <Tab.Screen name="Pacientes" component={PatientsScreen} />
      <Tab.Screen name="Configurações" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

