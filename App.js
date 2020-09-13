import React from "react";
import Screen from "./app/components/Screen";
import SearchBar from "./app/components/SearchBar";
import FeaturedNews from "./app/components/FeaturedNews";
export default function App() {
  return (
    <Screen>
      <SearchBar />
      <FeaturedNews />
    </Screen>
  );
}
