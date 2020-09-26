import React from "react";
import { Text } from "react-native";
import Screen from "../common/Screen";
import SearchBar from "../SearchBar";
import FeaturedResipe from "../FeaturedResipe";
import ChickenRecipe from "../ChickenRecipe";
import MeatRecipe from "../meatRecipe";
import DesertRecipe from "../DesertRecipe";
import SaladRecipe from "../SaladRecipe";
import useResipe from "../../hooks/useResipe";

const Home = () => {
  const { loading, allData } = useResipe();
  return (
    <Screen>
      <SearchBar />
      <FeaturedResipe
        item={{
          id: "hhhjkkll;;",
          category: "chiken",
          // title: "Creamy Lemon Parmesan Chicken",
          // dietLabels: "low",
          image:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190313-creamy-lemon-parmesan-chicken-horizontal-1553026901.png?crop=0.668xw:1.00xh;0.184xw,0&resize=768:*",
        }}
      />
      {/* <SmallCard /> */}
      {loading ? (
        <Text>Loding...</Text>
      ) : (
        <>
          <ChickenRecipe data={allData.chicken} />
          <MeatRecipe data={allData.meat} />
          <DesertRecipe data={allData.desert} />
          <SaladRecipe data={allData.salad} />
        </>
      )}
    </Screen>
  );
};

export default Home;
