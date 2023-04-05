import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  Animated,
} from "react-native";
import MealsCategoryItem from "./MealsCatgoryItem";
import { useEffect, useState } from "react";
import { COLOLRS } from "../../constants/colors";

const AnimatedText = Animated.createAnimatedComponent(Text);

const MealsCategories = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    fetchMealCategoryList();
  }, []);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const fetchMealCategoryList = async () => {
    const responseData = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    ).catch((error) => console.log(error));
    const data = await responseData.json().catch((error) => console.log(error));
    console.log("Ranga Komarthi");
    console.log(data);
    setIsDataLoaded(true);
    setCategories(data);
  };

  const MealsCategoryList = [
    {
      id: 1,
      title: "Italian",
    },
    {
      id: 2,
      title: "Asian",
    },
    {
      id: 3,
      title: "Asian",
    },
    {
      id: 4,
      title: "Italian",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {!isDataLoaded && (
        <SafeAreaView style={styles.loadingContainer}>
          <AnimatedText style={[{ opacity: fadeAnim }, styles.text]}>
            Loading please wait
          </AnimatedText>
        </SafeAreaView>
      )}
      {isDataLoaded && (
        <FlatList
          data={categories.categories}
          renderItem={({ item }) => <MealsCategoryItem title={item.strCategory} />}
          keyExtractor={(item) => item.idCategory}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "customFont2",
    color: COLOLRS.white,
    fontSize: 22,
  },
});

export default MealsCategories;
