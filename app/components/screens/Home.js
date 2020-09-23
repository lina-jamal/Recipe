import React from "react";
import { Text } from "react-native";
import Screen from "../common/Screen";
import SearchBar from "../SearchBar";
import FeaturedResipe from "../FeaturedResipe";
import ChickenRecipe from "../ChickenRecipe";
import MeatRecipe from "../meatRecipe";
import useResipe from "../../hooks/useResipe";

const Home = () => {
  const [loading, allData] = useResipe();
  console.log(allData, 999);
  return (
    <Screen>
      <SearchBar />
      <FeaturedResipe
        item={{
          id: "hhhjkkll;;",
          // title: "Creamy Lemon Parmesan Chicken",
          // dietLabels: "low",
          image:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190313-creamy-lemon-parmesan-chicken-horizontal-1553026901.png?crop=0.668xw:1.00xh;0.184xw,0&resize=768:*",
        }}
      />
      {/* <SmallCard /> */}
      {loading ? (
        <Text>Loding</Text>
      ) : (
        <ChickenRecipe data={allData.chicken.resipe} />
      )}
      {loading ? (
        <Text>Loding</Text>
      ) : (
        <MeatRecipe data={allData.meat.resipe} />
      )}
    </Screen>
  );
};

export default Home;
