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
  

const MealsCategorySubItem = ({item, navigation}) => {

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

      const navigateToMealDetails = () => {
        navigation.navigate('MealDetails', {idMeal})
      }
    

     return (
        <SafeAreaView>
        <Card>
          <TouchableOpacity
            style={styles.conatiner}
            onPress={navigateToMealDetails}
          >
            <Animated.View style={[{ transform: [{ translateX }] }, styles.itemContainer]}>
              <Image source={{ uri: strMealThumb }} style={styles.image}  />
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
      fontSize: 18,
      margin: 10
    },

    image: {
      margin: 20,
      width: '100%',
      height: 150,
      borderRadius: 15
    },
  });

export default MealsCategorySubItem;