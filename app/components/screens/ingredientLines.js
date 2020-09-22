import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");

const IngredientLines = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/splash.png")}
      ></Image>
      <View style={styles.contentContainer}>
        <Text style={styles.title}> This is the ingredient ..</Text>
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
          felis sit amet lectus sagittis venenatis non nec sem. Nunc ut sapien
          non nisi consequat vulputate. Mauris non ligula ex. Integer facilisis
          ligula nibh, eu vulputate orci interdum non. Donec consectetur
          sagittis nibh, nec fermentum mi tristique non. Pellentesque eu
          pharetra ipsum.
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {},
  image: {
    width: width,
    height: height / 3,
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: "#4e4d4d",
  },
});

export default IngredientLines;
