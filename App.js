import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen.js";
import ProductDetail from "./screens/ProductDetail.js";
import BlogDetail from "./screens/BlogDetail.js";
import CampusDetail from "./screens/CampusDetail.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ title: "Product" }}
        />

        <Stack.Screen
          name="BlogDetail"
          component={BlogDetail}
          options={{ title: "Nieuws" }}
        />

        <Stack.Screen
          name="CampusDetail"
          component={CampusDetail}
          options={{ title: "Campus" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}