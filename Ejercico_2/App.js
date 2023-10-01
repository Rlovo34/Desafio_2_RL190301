import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native'; 
//import de pantallas
import LoginScreen from './Screen/login';
import RegistroScreen from './Screen/registro';
import ContactosScreen from './Screen/contactos';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Inicio de Sesión' }}
        />
        <Stack.Screen
          name="Registro"
          component={RegistroScreen}
          options={{ title: 'Registro' }}
        />
        <Stack.Screen
          name="Contactos"
          component={ContactosScreen}
          options={{ title: 'Mis Contactos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


//Stilos
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
