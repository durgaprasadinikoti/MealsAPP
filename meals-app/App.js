import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLOLRS } from "./constants/colors";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Title from "./components/ui/Title";
import MealsCategories from "./components/meals/MealsCategories";

export default function App() {
  const [ isFontLoaded ] = useFonts({
    'customFont': require('./assets/fonts/Pinky-Stone.otf'),
    'customFont2': require('./assets/fonts/big-mock.otf')
  });

  if(!isFontLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <StatusBar style="light" />
        <LinearGradient
          colors={[COLOLRS.primary, COLOLRS.secondary]}
          style={styles.screen}
        >
          <ImageBackground
            source={require("./assets/images/food.jpg")}
            style={styles.screen}
            resizeMode="cover"
            imageStyle={styles.backgroundImage}
          >
            <Title> Meals </Title>
            <MealsCategories></MealsCategories>
          </ImageBackground>
        </LinearGradient>
      </>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
});
