import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
// import background from "../../assets/background.jpg";
const Screen = ({ children }) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};
const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
    backgroundColor: "#f7f3f3",
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
  },
});
export default Screen;
