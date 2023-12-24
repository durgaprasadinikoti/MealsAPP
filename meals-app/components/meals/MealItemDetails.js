import { SafeAreaView, StyleSheet, Text, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { COLOLRS } from "./../../constants/colors";
import Card from "../ui/Card";
import { AntDesign } from "@expo/vector-icons";
import { Video } from 'expo-av';

const MealItemDetails = ({ idMeal, navigation }) => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fecthMealDetails();
  }, []);

  // fecth App meals Items

  const fecthMealDetails = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    ).catch((error) => console.log(error));
    const responseData = await response
      .json()
      .catch((error) => console.log(error));
    setLoaded(true);
    setData(responseData.meals[0]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {!loaded && (
        <SafeAreaView style={styles.loadingContainer}>
          <Text style={styles.text}>Loading Please wait</Text>
        </SafeAreaView>
      )}
      {loaded && (
        <SafeAreaView style={styles.detailsContainer}>
          <SafeAreaView style={styles.headerContainer}>
            <AntDesign
              name="leftcircle"
              size={30}
              color="black"
              onPress={() => navigation.goBack()}
              style={styles.iconStyle}
            />
            <Text style={styles.text}>{data.strMeal}</Text>
          </SafeAreaView>
          <ScrollView>
            <Text style={styles.descriptionText}>{data.strInstructions}</Text>
          </ScrollView>
          <Card>
            <SafeAreaView>
                <Video
                    source={{ uri: 'https://www.youtube.com/watch?v=2N3GAphTgGg&list=RD2N3GAphTgGg&start_radio=1' }}
                    shouldPlay
                    useNativeControls 
                    style={{ width: "100%", height: "50%" }}
                />
            </SafeAreaView>
          </Card>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
  },
  detailsContainer: {
    flex: 1,
  },
  iconStyle: {
    margin: 20,
  },
  text: {
    fontFamily: "customFont",
    color: COLOLRS.white,
    fontSize: 20,
    textAlign: "center",
    margin: 20,
  },
  descriptionText: {
    margin: 20,
    color: COLOLRS.white,
    fontSize: 14,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealItemDetails;
