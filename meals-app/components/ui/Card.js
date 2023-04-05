import { SafeAreaView, StyleSheet } from 'react-native';
import { COLOLRS } from '../../constants/colors';
const Card = ({children}) => {
    return(
        <SafeAreaView style={styles.container}>
            { children }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        padding: 20,
        width: 200,
        borderWidth: 2,
        borderColor: COLOLRS.lightRed,
        backgroundColor: COLOLRS.lightRed,
        shadowColor: COLOLRS.lightBlack,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 10, 
        elevation: 4,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Card;