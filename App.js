import { StyleSheet, View, ImageBackground} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={home} />
          
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
   hello: {

   },
  bg: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  }
});
