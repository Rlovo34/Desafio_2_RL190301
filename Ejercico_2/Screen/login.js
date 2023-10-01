import React, { useState } from 'react';
import { View,TextInput,Button,Text,StyleSheet,ImageBackground,Alert,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//Ruta de imagen de fondo 
const backgroundImage = require('./img/fondo1.jpg');  

//funciones de login
function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
//Login
  const handleLogin = async () => {
    try {
      // Comprueba las credenciales en AsyncStorage
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');
  

      if (username === storedUsername && password === storedPassword) {  
            navigation.navigate('Contactos');
      } 
      
      //Error al logear
      else {
        Alert.alert('Error', 'Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al obtener datos de AsyncStorage: ', error);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          placeholderTextColor="#fff"
          value={username}
          onChangeText={setUsername}
         
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#fff"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Iniciar Sesión" onPress={handleLogin} />

        <Button
          title="Registrarse"
          onPress={() => navigation.navigate('Registro')}
        />
      </View>
    </ImageBackground>
  );
}


//stilos
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    marginVertical: 10,
    paddingLeft: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 5,
    color: '#fff',
  },
});

export default LoginScreen;
