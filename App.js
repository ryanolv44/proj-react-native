import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View} from 'react-native'
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})