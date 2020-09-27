import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import Home from "../screens/Home";
import ResipeDetail from "../screens/ResipeDetail";
import ResipeList from "../list/ResipeList";

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerBackTitle: "",
        headerTintColor: "white",
        headerLeftContainerStyle: {
          width: 50,
          height: 50,
          borderRadius: 50,
          backgroundColor: "rgba(92,90,91,0.7)",
          alignItems: "center",
          marginLeft: 20,
          marginTop: 25,
        },
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="ResipeDetail" component={ResipeDetail} />
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
