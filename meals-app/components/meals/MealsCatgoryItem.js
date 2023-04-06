import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import Card from "../ui/Card";
import { COLOLRS } from "../../constants/colors";
import { useState, useEffect } from "react";

const MealsCategoryItem = ({ item, navigation }) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = item;
  const [showMore, setShowMore] = useState(false);

  const [animationValue] = useState(new Animated.Value(0));

  useEffect( () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [animationValue])

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const navigateToCatagoryListPage = (categoryName) => {
    navigation.navigate("CategoryList", { categoryName })
  };

  const translateX = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-500, 0],
  });

  return (
    <SafeAreaView>
      <Card>
        <TouchableOpacity
          style={styles.conatiner}
          onPress={navigateToCatagoryListPage.bind(this, strCategory)}
        >
          <Animated.View style={[{ transform: [{ translateX }] }, styles.itemContainer]}>
            <Image source={{ uri: strCategoryThumb }} style={styles.image} />
            <Text style={styles.text}>{strCategory}</Text>
            <Text
              style={styles.descriptionText}
              numberOfLines={showMore ? undefined : 2}
            >
              {strCategoryDescription}
            </Text>
            {!showMore && (
              <TouchableOpacity onPress={toggleShowMore}>
                <Text style={styles.showMoreText}>Show More</Text>
              </TouchableOpacity>
            )}
            {showMore && (
              <TouchableOpacity onPress={toggleShowMore}>
                <Text style={styles.showMoreText}>Show Less</Text>
              </TouchableOpacity>
            )}
          </Animated.View>
        </TouchableOpacity>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: COLOLRS.white,
    fontFamily: "customFont",
    fontSize: 20,
    padding: 10,
  },

  showMoreText: {
    color: COLOLRS.lightWhite,
    fontSize: 12,
    padding: 6,
  },

  descriptionText: {
    color: COLOLRS.lightWhite,
    fontSize: 12,
    padding: 10,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },
});

export default MealsCategoryItem;
