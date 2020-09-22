import React from "react";
import { Text } from "react-native";
import useResipe from "./app/hooks/useResipe";

import Screen from "./app/components/common/Screen";
import SearchBar from "./app/components/SearchBar";
import FeaturedResipe from "./app/components/FeaturedResipe";
import ChickenRecipe from "./app/components/ChickenRecipe";
import MeatRecipe from "./app/components/meatRecipe";
// import ResipeList from "./app/components/list/ResipeList";
export default function App() {
  const [loading, chikenData, meatData] = useResipe();
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
      {loading ? <Text>Loding</Text> : <ChickenRecipe data={chikenData} />}
      {loading ? <Text>Loding</Text> : <MeatRecipe data={meatData} />}
    </Screen>
  );
}
