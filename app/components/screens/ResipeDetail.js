import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import useResipe from "../../hooks/useResipe";
import HorizotalList from "../list/HorizotalList";
import Close from "../common/Close";

import { useNavigation } from "@react-navigation/native";

import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const ResipeDetail = ({ route }) => {
  const { data } = useResipe();
  const [resipe, setResipe] = useState();
  const [related, setRelated] = useState();

  const [loading, setLoading] = useState(true);
  const { id: resipeId, category: resipeCaegory } = route.params.item;
  const navigation = useNavigation();

  const getSingle = async (id) => {
    await data;
    if (data.length !== 0) {
      setLoading(false);
      setResipe(data.filter((resipe) => resipe.id === id));
      return data;
    }
  };

  const fetchRelatedResipe = async (category) => {
    await data;
    if (data.length !== 0) {
      setLoading(false);
      const result = data.filter((resipe) => resipe.category === category);
      setRelated(result.filter((item) => item.id !== resipeId));
      return data;
    }
  };

  useEffect(() => {
    getSingle(resipeId);
    fetchRelatedResipe(resipeCaegory);
  }, [data.length === 0]);

  return (
    <>
      <ScrollView style={styles.container}>
        {resipe ? (
          <View>
            <Image
              style={styles.image}
              source={{ uri: resipe[0].image }}
            ></Image>
            <View style={styles.contentContainer}>
              <Text style={styles.title}> {resipe[0].title} ..</Text>
              <View style={styles.ListContent}>
                <Text style={styles.content}>
                  <MaterialCommunityIcons name="food" size={30} color="black" />{" "}
                  ingredientLines...
                </Text>

                <FlatList
                  data={resipe[0].ingredientLines}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item }) => (
                    <Text style={styles.list}>
                      <Entypo
                        name="check"
                        size={24}
                        color="black"
                        style={styles.icon}
                      />
                      {item}
                    </Text>
                  )}
                />
                <Text style={styles.content}>
                  <FontAwesome
                    name="heartbeat"
                    size={26}
                    color="black"
                    style={styles.icon}
                  />{" "}
                  totalNutrients...
                </Text>
                <View style={styles.JustifyCenter}>
                  <View style={styles.AlignCenter}>
                    <Text style={styles.text}>{resipe[0].nuOfServes}</Text>

                    <Text style={styles.text}>SERVINGS:</Text>
                  </View>
                  <View style={styles.AlignCenter}>
                    <Text style={styles.text}>
                      {" "}
                      {Math.ceil(
                        resipe[0].totalNutrients.ENERC_KCAL.quantity /
                          resipe[0].nuOfServes
                      ) +
                        " " +
                        resipe[0].totalNutrients.ENERC_KCAL.unit}
                    </Text>
                    <Text style={styles.text}>CALORIES / SERVING:{"  "}</Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  {resipe[0].deitLabel.map((item, index) => (
                    <Text style={{ padding: 8, fontSize: 19 }} key={index}>
                      {item}
                    </Text>
                  ))}
                </View>
                <View
                  style={{
                    flex: 1,
                    alignContent: "center",
                    marginLeft: "10%",
                    width: "80%",
                  }}
                >
                  <View style={styles.NutrientContent}>
                    <Text>{resipe[0].totalNutrients.FAT.label}</Text>
                    <Text style={styles.text}>
                      {Math.ceil(
                        resipe[0].totalNutrients.FAT.quantity /
                          resipe[0].nuOfServes
                      ) +
                        " " +
                        resipe[0].totalNutrients.FAT.unit}
                    </Text>
                  </View>
                  <View style={styles.NutrientContent}>
                    <Text>{resipe[0].totalNutrients.CHOCDF.label}</Text>
                    <Text style={styles.text}>
                      {Math.ceil(
                        resipe[0].totalNutrients.CHOCDF.quantity /
                          resipe[0].nuOfServes
                      ) +
                        " " +
                        resipe[0].totalNutrients.CHOCDF.unit}
                    </Text>
                  </View>
                  <View style={styles.NutrientContent}>
                    <Text>{resipe[0].totalNutrients.CHOLE.label}</Text>
                    <Text style={styles.text}>
                      {Math.ceil(
                        resipe[0].totalNutrients.CHOLE.quantity /
                          resipe[0].nuOfServes
                      ) +
                        " " +
                        resipe[0].totalNutrients.CHOLE.unit}
                    </Text>
                  </View>
                  <View style={styles.NutrientContent}>
                    <Text>{resipe[0].totalNutrients.NA.label}</Text>
                    <Text style={styles.text}>
                      {Math.ceil(
                        resipe[0].totalNutrients.NA.quantity /
                          resipe[0].nuOfServes
                      ) +
                        " " +
                        resipe[0].totalNutrients.NA.unit}
                    </Text>
                  </View>
                  <View style={styles.NutrientContent}>
                    <Text>{resipe[0].totalNutrients.MG.label}</Text>
                    <Text style={styles.text}>
                      {Math.ceil(
                        resipe[0].totalNutrients.MG.quantity /
                          resipe[0].nuOfServes
                      ) +
                        " " +
                        resipe[0].totalNutrients.MG.unit}
                    </Text>
                  </View>
                  <View style={styles.NutrientContent}>
                    <Text>{resipe[0].totalNutrients.CA.label}</Text>
                    <Text style={styles.text}>
                      {Math.ceil(
                        resipe[0].totalNutrients.CA.quantity /
                          resipe[0].nuOfServes
                      ) +
                        " " +
                        resipe[0].totalNutrients.CA.unit}
                    </Text>
                  </View>
                  <View style={styles.NutrientContent}>
                    <Text>{resipe[0].totalNutrients.K.label}</Text>
                    <Text style={styles.text}>
                      {Math.ceil(
                        resipe[0].totalNutrients.K.quantity /
                          resipe[0].nuOfServes
                      ) +
                        " " +
                        resipe[0].totalNutrients.K.unit}
                    </Text>
                  </View>
                  <View style={styles.NutrientContent}>
                    <Text>{resipe[0].totalNutrients.FE.label}</Text>
                    <Text style={styles.text}>
                      {Math.ceil(
                        resipe[0].totalNutrients.FE.quantity /
                          resipe[0].nuOfServes
                      ) +
                        " " +
                        resipe[0].totalNutrients.FE.unit}
                    </Text>
                  </View>
                  <View style={styles.NutrientContent}>
                    <Text>{resipe[0].totalNutrients.ZN.label}</Text>
                    <Text style={styles.text}>
                      {Math.ceil(
                        resipe[0].totalNutrients.ZN.quantity /
                          resipe[0].nuOfServes
                      ) +
                        " " +
                        resipe[0].totalNutrients.ZN.unit}
                    </Text>
                  </View>
                  <View style={styles.NutrientContent}>
                    <Text>{resipe[0].totalNutrients.VITA_RAE.label}</Text>
                    <Text style={styles.text}>
                      {Math.ceil(
                        resipe[0].totalNutrients.VITA_RAE.quantity /
                          resipe[0].nuOfServes
                      ) +
                        " " +
                        resipe[0].totalNutrients.VITA_RAE.unit}
                    </Text>
                  </View>
                  <View style={styles.NutrientContent}>
                    <Text>{resipe[0].totalNutrients.VITC.label}</Text>
                    <Text style={styles.text}>
                      {Math.ceil(
                        resipe[0].totalNutrients.VITC.quantity /
                          resipe[0].nuOfServes
                      ) +
                        " " +
                        resipe[0].totalNutrients.VITC.unit}
                    </Text>
                  </View>
                  <View style={styles.NutrientContent}>
                    <Text>{resipe[0].totalNutrients.WATER.label}</Text>
                    <Text style={styles.text}>
                      {Math.ceil(
                        resipe[0].totalNutrients.WATER.quantity /
                          resipe[0].nuOfServes
                      ) +
                        " " +
                        resipe[0].totalNutrients.WATER.unit}
                    </Text>
                  </View>
                  <View style={styles.NutrientContent}>
                    <Text>{resipe[0].totalNutrients.SUGAR.label}</Text>
                    <Text style={styles.text}>
                      {Math.ceil(
                        resipe[0].totalNutrients.SUGAR.quantity /
                          resipe[0].nuOfServes
                      ) +
                        " " +
                        resipe[0].totalNutrients.SUGAR.unit}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            {related ? (
              <View style={styles.RelatedContaner}>
                <HorizotalList title="Related Resepi.." data={related} />
              </View>
            ) : (
              <Text>loading ...</Text>
            )}
          </View>
        ) : (
          <Text>loading ...</Text>
        )}
      </ScrollView>

      <Close onPress={() => navigation.popToTop()} />
    </>
  );
};
const styles = StyleSheet.create({
  container: {},
  image: {
    width: width,
    height: height / 3,
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 23,
    color: "#4e4d4d",
    fontWeight: "bold",
    padding: 12,
    borderBottomWidth: 0.4,
    borderBottomColor: "gray",
  },
  list: {
    padding: 10,
    fontSize: 18,
  },
  text: {
    fontSize: 18,
  },
  ListContent: {
    flex: 1,
    paddingTop: 22,
  },
  RelatedContaner: {
    padding: 10,
  },
  icon: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  AlignCenter: {
    alignItems: "center",
  },
  JustifyCenter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: "gray",
    borderBottomWidth: 0.4,
    padding: 20,
  },
  NutrientContent: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 15,
    fontSize: 18,
  },
});

export default ResipeDetail;
