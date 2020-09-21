const axios = require("axios");
import React, { useEffect, useState } from "react";

const useResipe = () => {
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
  return [loading, chikenData, meatData];
};
export default useResipe;
