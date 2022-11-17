import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Cards */}
      <CategoryCard
        imgUrl="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg"
        title="Testing"
      />
    </ScrollView>
  );
};

export default Categories;
