import { StyleSheet, Text, View} from 'react-native'
import { Image } from 'expo-image'


const Footer = () => {
    return (
        <View style={styles.footer}>
        <Text style={styles.boasvindas}>Copyright 2024</Text>
        <Image 
          style={styles.bluerose}
          source={require('../assets/images/rosa.jpg')}
        />
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
footer: {
    flex: 1,
    backgroundColor: '#985678',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    boasvindas: {
        color: '#FFF',
        fontSize: 25,
      },
      boasvindas: {
        color: '#FFF',
        fontSize: 25,
      },
      bluerose: {
        width: '100%',
        height: '100%',
      }
}
})

export default Footer