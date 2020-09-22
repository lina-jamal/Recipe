import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";

const FlatCard = ({ item }) => {
  const { image, title, deitLabel } = item;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.contentContainer}>
        <Title>{title}</Title>
        <SubTitle> {deitLabel}</SubTitle>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 10,
    height: 80,
  },
  image: {
    flex: 0.35,
    height: "100%",
  },
  contentContainer: {
    flex: 0.65,
    paddingHorizontal: 5,
  },
});
export default FlatCard;
