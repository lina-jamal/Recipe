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
const { width, height } = Dimensions.get("window");

const IngredientLines = ({ route }) => {
  const { data } = useResipe();
  const [resipe, setResipe] = useState();
  // const [related, setRelated] = useState();

  const [loading, setLoading] = useState(true);

  // const { id: postId, category: resipeCaegory } = route.params.item;

  const getSingle = async (id) => {
    await data;
    if (data.length !== 0) {
      setLoading(false);
      setResipe(data.filter((resipe) => resipe.id === id));
      return data;
    }
  };

  useEffect(() => {
    getSingle(
      "http://www.edamam.com/ontologies/edamam.owl#recipe_42a70bb03028b99e51156b64c4f182b0"
    );
    fetchRelatedResipe("'chiken'");
  }, [data.length === 0]);

  // const title= resipe;
  return (
    <ScrollView style={styles.container}>
      {resipe ? (
        <View>
          {console.log(resipe)}

          <Image style={styles.image} source={{ uri: resipe[0].image }}></Image>
          <View style={styles.contentContainer}>
            <Text style={styles.title}> {resipe[0].title} ..</Text>
            {/* <Text style={styles.content}> */}
            {/* {resipe[0].ingredientLines.map((e) => (
                <SectionList>{e}</SectionList>
              ))} */}
            <Text style={styles.content}>ingredientLines...</Text>

            <View style={styles.ListContent}>
              <FlatList
                data={resipe[0].ingredientLines}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                  <Text style={styles.list}>_ {item}</Text>
                )}
              />
            </View>
          </View>
        </View>
      ) : (
        <Text>loading ...</Text>
      )}
    </ScrollView>
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: "#4e4d4d",
  },
  list: {
    // marginVertical: 16,
    padding: 10,
    fontSize: 18,
    height: 44,
    // flexDirection: "column",
  },
  ListContent: {
    flex: 1,
    paddingTop: 22,
  },
});

export default IngredientLines;
