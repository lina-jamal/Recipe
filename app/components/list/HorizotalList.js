import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Title from "../common/Title";
import SmallCard from "../card/smallCard";
const HorizotalList = ({ title, data }) => {
  return (
    <>
      <Title style={styles.tittle} size={20}>
        {title}
      </Title>
      <View style={styles.listStyle}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <SmallCard item={item} />}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  tittle: {
    color: "red",
    marginBottom: 10,
  },
  listStyle: {
    marginVertical: 15,
  },
});
export default HorizotalList;
