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
                      <Entypo name="check" size={24} color="black" />
                      {item}
                    </Text>
                  )}
                />
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
    padding: 16,
  },
  list: {
    padding: 10,
    fontSize: 18,
  },
  ListContent: {
    flex: 1,
    paddingTop: 22,
  },
  RelatedContaner: {
    padding: 10,
  },
});

export default ResipeDetail;
