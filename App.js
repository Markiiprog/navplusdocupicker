import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import VideoUploadScreen from './screens/VideoUploadScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Try from './screens/Try';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="try" component={Try} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>HAays</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
