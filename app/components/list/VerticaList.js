import React from "react";
import { StyleSheet, View } from "react-native";
import Title from "../common/Title";
import FlatCard from "../card/FlatCard";
import { useNavigation } from "@react-navigation/native";

const VerticalList = ({ title, data }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Title>{title}</Title>

      <View style={styles.container}>
        {data.map((item) => (
          <FlatCard
            item={item}
            key={item.id}
            onPress={() => navigation.navigate("ResipeDetail", { item })}
          />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});
export default VerticalList;
