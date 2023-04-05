import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Card from "../ui/Card";
import { COLOLRS } from "../../constants/colors";
import { useState } from "react";

const MealsCategoryItem = ({ item }) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = item;
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <SafeAreaView>
      <Card>
        <Pressable style={styles.conatiner}>
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
        </Pressable>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
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
