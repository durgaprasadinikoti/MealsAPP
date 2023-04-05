import { SafeAreaView, StyleSheet, Text, Platform } from 'react-native';
import Card from '../ui/Card';
import { COLOLRS } from '../../constants/colors';

const MealsCategoryItem = ({title}) => {
    return (
        <SafeAreaView style={styles.conatiner}>
            <Card>
                <Text style={styles.text}>{title}</Text>
            </Card>
        </SafeAreaView>
    )
}   

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: COLOLRS.white,
        fontFamily: 'customFont',
        fontSize: 20,
        padding: Platform.OS === 'ios' ? 20 : 0
    }
})

export default MealsCategoryItem;