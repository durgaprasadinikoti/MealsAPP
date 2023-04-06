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
  

const MealsCategorySubItem = ({item}) => {

    const [animationValue] = useState(new Animated.Value(0));
    const { strMeal, strMealThumb, idMeal} = item;

    useEffect( () => {
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, [animationValue]);

    const translateX = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-500, 0],
      });
    

     return (
        <SafeAreaView>
        <Card>
          <TouchableOpacity
            style={styles.conatiner}
          >
            <Animated.View style={[{ transform: [{ translateX }] }, styles.itemContainer]}>
              <Image source={{ uri: strMealThumb }} style={styles.image} resizeMode="contain" />
              <Text style={styles.text}>{strMeal}</Text>
            </Animated.View>
          </TouchableOpacity>
        </Card>
      </SafeAreaView>
     )

      
}

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
      margin: 20
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
      margin: 20,
      width: '90%',
      height: 100,
      resizeMode: "contain",
    },
  });

export default MealsCategorySubItem;