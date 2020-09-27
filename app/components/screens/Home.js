import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import Screen from "../common/Screen";
import SearchBar from "../SearchBar";
import RandomResipe from "../RandomResipe";
import ChickenRecipe from "../ChickenRecipe";
import MeatRecipe from "../meatRecipe";
import DesertRecipe from "../DesertRecipe";
import SaladRecipe from "../SaladRecipe";
import useResipe from "../../hooks/useResipe";

const Home = () => {
  const { loading, allData, data } = useResipe();
  const [randomResipe, setRandomResipe] = useState();

  const getRandomResipe = async () => {
    await data;
    if (data.length !== 0) {
      const getRandom = Math.floor(Math.random() * data.length);
      const randomResipe = data[getRandom];
      setRandomResipe(randomResipe);
      return randomResipe;
    }
  };
  useEffect(() => {
    getRandomResipe();
  }, [data.length === 0]);

  return (
    <Screen>
      <SearchBar />
      {randomResipe ? (
        <RandomResipe item={randomResipe} />
      ) : (
        <Text>Loding...</Text>
      )}
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
