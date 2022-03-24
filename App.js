import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import DivOut from './src/DivOut';
import Earn from './src/Earn';
import Results from './src/Results';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{          
        }}  
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dividend OutLook" component={DivOut} />
        <Stack.Screen name="Earnings Forecast" component={Earn} />
        <Stack.Screen name="Results" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;