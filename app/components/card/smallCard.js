import React from "react";
import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import BlockCard from "./BlockCard";
const SmallCard = ({ item, onPress }) => {
  return (
    <BlockCard
      onPress={onPress}
      item={item}
      style={styles.container}
      imageStyle={styles.image}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    width: width / 2,
    height: 200,
    marginRight: 15,
  },
  image: {
    height: 100,
  },
});
export default SmallCard;
