import { StyleSheet, Text, View} from 'react-native'
import { Image } from 'expo-image';
const Header = () => {
    return(
        <View style={styles.header}>
        <View style={styles.avatar}>
          <Image style={styles.avatarImg} source = {{ uri: 'https://m.media-amazon.com/images/I/61sc4HFh-fL._AC_UF1000,1000_QL80_.jpg)/'}}/>
        </View>
        <Text style={styles.boasvindas}>Ryan Oliveira</Text>
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
    boasvindas: {
        color: '#FFF',
        fontSize: 25,
      },
      header:{
        flex: 1,
        backgroundColor: '#052944',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'},
        avatar: {
            width: 50,
            height: 50,
            backgroundColor: '#FFF',
            borderRadius: 50,
            marginHorizontal: 10,
          },
          avatarImg: {
            width: '100%',
            height: '100%',
          },
})

export default Header