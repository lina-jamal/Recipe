import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
const axios = require("axios");

import Screen from "./app/components/Screen";
import SearchBar from "./app/components/SearchBar";
import FeaturedResipe from "./app/components/FeaturedResipe";
import SmallCard from "./app/components/smallCard";
import ChickenRecipe from "./app/components/ChickenRecipe";
import MeatRecipe from "./app/components/meatRecipe";
export default function App() {
  const [chikenData, setChikenData] = useState([]);
  const [meatData, setMeatData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData("chiken", setChikenData);
    fetchData("meat", setMeatData);
  }, []);
  const fetchData = (type, set) => {
    axios
      .get(
        `https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&from=0&to=10&&q=${type}`
      )
      .then(({ data: { hits } }) => {
        return hits.map(({ recipe }) => ({
          id: recipe.uri,
          image: recipe.image,
          title: recipe.label,
          deitLabel: recipe.dietLabels,
          mealType: recipe.mealType,
          ingredientLines: recipe.ingredientLines,
          // digest: recipe.digest,
        }));
      })
      .then((recipe) => {
        setLoading(false);
        set(recipe);
      })
      .catch((error) => console.log("failed get data", { error }));
  };
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
