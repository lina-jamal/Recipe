const axios = require("axios");
import React, { useEffect, useState } from "react";

const useResipe = () => {
  const [loading, setLoading] = useState(true);

  const [allData, setAllData] = useState({
    chicken: [],
    meat: [],
    desert: [],
  });
  const [data, setData] = useState([]);
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
    const desertRequest = axios.get(
      "https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&from=0&to=10&&q='desert'"
    );
    Promise.all([chikenRequest, meatRequest, desertRequest])
      .then((result) => {
        return result.map(({ data }) => {
          const { hits, q } = data;
          return hits.map(({ recipe }) => ({
            id: recipe.uri,
            image: recipe.image,
            title: recipe.label,
            deitLabel: recipe.dietLabels,
            mealType: recipe.mealType,
            ingredientLines: recipe.ingredientLines,
            digest: recipe.digest,
            url: recipe.url,
            category: q,
          }));
        });
      })
      .then((resipee) => {
        // setLoading(false);
        setAllData({
          chicken: resipee[0],
          meat: resipee[1],
          desert: resipee[2],
        });
        setLoading(false);
        return resipee;
      })
      .then((rr) => setData(rr[0].concat(rr[1].concat(rr[2]))))

      .catch((error) => console.log("failed get data", { error }));
  };
  // const getSingle = async () => {
  //   const data = await allData;
  //   !loading ? console.log(data) : console.log(888);
  //   return data;
  // };

  return { loading, allData, data };
};

export default useResipe;
