import { SafeAreaView, StyleSheet, Dimensions, Text } from 'react-native';
import { COLOLRS } from '../../constants/colors';

const deviceWidth = Dimensions.get('window').width;

const Title = ({children}) => {
    return (
        <SafeAreaView style={styles.container}>
               <Text style={styles.text}> {children} </Text> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   container: {
        marginVertical: 40,
        justifyContent: 'center',
        alignItems: 'center'
        
   },
   text: {
        fontSize: deviceWidth < 400 ? 20 : 42,
        fontFamily: 'customFont',
        color: COLOLRS.lightBlack
   }
});

export default Title;