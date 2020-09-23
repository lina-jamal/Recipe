import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import Home from "../screens/Home";
import IngredientLines from "../screens/ingredientLines";
import ResipeList from "../list/ResipeList";

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="IngredientLines" component={IngredientLines} />
      <Stack.Screen name="ResipeList" component={ResipeList} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

export default AppNavigator;
