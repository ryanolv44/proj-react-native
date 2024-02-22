import { StyleSheet, Text, View} from 'react-native'
import { Image } from 'expo-image';

const Body = () => {
    return (<View style={styles.body}>
        <Text style={styles.boasvindas}>Bem vindo!</Text>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
body: {
    flex: 3,
    backgroundColor: '#765765',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
},
boasvindas: {
    color: '#FFF',
    fontSize: 25,
  },
})
export default Body