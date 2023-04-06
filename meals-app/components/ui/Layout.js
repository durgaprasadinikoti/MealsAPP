import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLOLRS } from "../../constants/colors";

const Layout = ({ children }) => {
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[COLOLRS.primary, COLOLRS.secondary]}
        style={styles.screen}
      >
        <ImageBackground
          source={require("../../assets/images/food.jpg")}
          style={styles.screen}
          resizeMode="cover"
          imageStyle={styles.backgroundImage}
        >
          {children}
        </ImageBackground>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
});

export default Layout;
