import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import HomePage from "./screens/HomePage";
import {  NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryList from "./screens/CategoryList";
import MealDetails from './screens/MealDetails';

const Stack = createStackNavigator();
export default function App() {
  const [ isFontLoaded ] = useFonts({
    'customFont': require('./assets/fonts/Pinky-Stone.otf'),
    'customFont2': require('./assets/fonts/big-mock.otf')
  });

  if(!isFontLoaded) {
    return <AppLoading />
  } else {
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Home" component={HomePage} />
              <Stack.Screen name="CategoryList" component={CategoryList} />
              <Stack.Screen name="MealDetails" component={MealDetails} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}

