// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native'; 
import PantallaPrincipal from './src/Screen/principal';
import PantallaDalbum from './src/Screen/album';
import PantallaR from './src/Screen/reproductor';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pantalla Principal"  screenOptions={{
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: '#fff',}
        }>

        <Stack.Screen name="Pantalla Principal" component={PantallaPrincipal} />
        <Stack.Screen name="Album" component={PantallaDalbum} />
        <Stack.Screen name="Reproductor" component={PantallaR} />
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#931FE8', 
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;