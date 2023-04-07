import { SafeAreaView, StyleSheet } from 'react-native';
import MealItemDetails from '../components/meals/MealItemDetails';
import Layout from '../components/ui/Layout';

const MealDetails = ({route, navigation}) => {
    const {idMeal} = route.params;
    return(
        <Layout>
            <MealItemDetails idMeal={idMeal} navigation={navigation} />
        </Layout>
    )
}

const styles = StyleSheet.create({
});

export default MealDetails;