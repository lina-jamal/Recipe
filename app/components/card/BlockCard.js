import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";

const BlockCard = ({ style, imageStyle, item, onPress }) => {
  const { image, title, deitLabel } = item;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Image style={[styles.image, imageStyle]} source={{ uri: image }} />
        <View style={styles.contentContainer}>
          <Title>{title}</Title>
          <SubTitle> {deitLabel}</SubTitle>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
