import React from "react";
import BlockCard from "./BlockCard";
const FeaturedResipe = ({ item }) => {
  return (
    <BlockCard
      item={item}
      style={{ marginVertical: 15, marginHorizontal: 20 }}
    />
  );
};

export default FeaturedResipe;
