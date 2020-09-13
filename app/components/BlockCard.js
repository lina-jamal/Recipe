import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Title from "./Title";
import SubTitle from "./SubTitle";

const BlockCard = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.image}
        source={require("../../assets/background.jpg")}
      />
      <View style={styles.contentContainer}>
        <Title>Recipe</Title>
        <SubTitle> My Recipe</SubTitle>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 300,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
    // justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  contentContainer: {
    padding: 5,
  },
});
export default BlockCard;
