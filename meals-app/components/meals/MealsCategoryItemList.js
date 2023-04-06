import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    Text,
    Animated,
  } from "react-native";
  import { useEffect, useState } from "react";
  import { COLOLRS } from "../../constants/colors";
  import MealsCategorySubItem from "./MealsCategorySubItem";

  const AnimatedText = Animated.createAnimatedComponent(Text);

const MealsCategoryItemList = ({categoryName}) => {
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
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
        ).catch((error) => console.log(error));
        const data = await responseData
          .json()
          .catch((error) => console.log(error));
        setIsDataLoaded(true);
        setCategories(data);
    };
  
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
            data={categories.meals}
            renderItem={({ item }) => <MealsCategorySubItem item={item} />}
            keyExtractor={(item) => item.idMeal}
          />
        )}
      </SafeAreaView>
    );
}

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
  

export default MealsCategoryItemList;