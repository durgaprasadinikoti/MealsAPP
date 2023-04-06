import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { COLOLRS } from "../constants/colors";
import Layout from "../components/ui/Layout";
import { AntDesign } from "@expo/vector-icons";
import MealsCategoryItemList from "../components/meals/MealsCategoryItemList";

const CategoryList = ({ route, navigation }) => {
  const animationvalue = new Animated.Value(0);
  const { categoryName } = route.params;

  const navigateToBack = () => {
    Animated.timing(animationvalue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => navigation.goBack());
  };

  const translateY = animationvalue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 0],
  });

  return (
    <Layout>
      <SafeAreaView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity onPress={navigateToBack}>
            <Animated.View style={[{ transform: [{ translateY }] }]}>
              <AntDesign name="leftcircle" size={30} color="black" />
            </Animated.View>
          </TouchableOpacity>
          <SafeAreaView style={styles.categoryTitle}>
            <Text style={styles.text}> {categoryName} </Text>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={{ flex: 1 }}>
          <MealsCategoryItemList categoryName={categoryName} />
        </SafeAreaView>
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 30,
  },
  categoryTitle: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 42,
    fontFamily: "customFont",
    color: COLOLRS.lightBlack,
  },
});

export default CategoryList;
