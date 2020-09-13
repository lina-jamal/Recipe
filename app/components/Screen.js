import React from "react";
import { Platform, StatusBar, StyleSheet, SafeAreaView } from "react-native";
// import background from "../../assets/background.jpg";
const Screen = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};
const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
    backgroundColor: "#f7f3f3",
    flex: 1,
    alignItems: "center",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default Screen;
