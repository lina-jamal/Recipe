import React from "react";
import BlockCard from "./card/BlockCard";
import { useNavigation } from "@react-navigation/native";
const FeaturedResipe = ({ item }) => {
  const navigation = useNavigation();
  return (
    <BlockCard
      onPress={() => navigation.navigate("IngredientLines", { item })}
      item={item}
      style={{ marginVertical: 15, marginHorizontal: 20 }}
    />
  );
};

export default FeaturedResipe;
