const axios = require("axios");
import React, { useEffect, useState } from "react";

const useResipe = () => {
  const [loading, setLoading] = useState(true);

  const [allData, setAllData] = useState({
    chicken: [],
    meat: [],
  });
  console.log(allData, 66);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const chikenRequest = axios.get(
      "https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&from=0&to=10&&q='chiken'"
    );
    const meatRequest = axios.get(
      "https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&from=0&to=10&&q='meat'"
    );
    Promise.all([chikenRequest, meatRequest])
      .then((result) => {
        return result.map(({ data }) => {
          const { hits, q } = data;
          return {
            type: q,
            resipe: hits.map(({ recipe }) => ({
              id: recipe.uri,
              image: recipe.image,
              title: recipe.label,
              deitLabel: recipe.dietLabels,
              mealType: recipe.mealType,
              ingredientLines: recipe.ingredientLines,
              digest: recipe.digest,
            })),
          };
        });
      })
      .then((resipee) => {
        // setLoading(false);
        setAllData({ chicken: resipee[0], meat: resipee[1] });
      })

      .catch((error) => console.log("failed get data", { error }));
  };
  return [loading, allData];
};
export default useResipe;
