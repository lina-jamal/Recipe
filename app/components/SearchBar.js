import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Search here .." />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 20,
    margin: "auto",
    width: "90%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    // alignItems: "center",
    // justifyContent: "center",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingLeft: 8,
    fontSize: 16,
  },
});
export default SearchBar;
