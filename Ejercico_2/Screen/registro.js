import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Funcione para registrarse
function RegistroScreen({ navigation }) {
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleRegister = async () => {
    // Verificar si las contraseñas coinciden y se aceptan los términos
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }
    
    //En caso de no aceptar el checkbox
    if (!acceptTerms) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones');
      return;
    }

    // Almacenar datos de registro en AsyncStorage
    try {
      await AsyncStorage.setItem('username', newUsername);
      await AsyncStorage.setItem('password', newPassword);
      await AsyncStorage.setItem('email', newEmail);
      Alert.alert('Registro exitoso', 'Ahora puedes iniciar sesión.');
       // ir a la pantalla de Contacto
      navigation.navigate('Contactos');
    } catch (error) {
      console.error('Error al almacenar datos en AsyncStorage: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        placeholderTextColor="#fff"
        value={newUsername}
        onChangeText={setNewUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#fff"
        value={newEmail}
        onChangeText={setNewEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#fff"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        placeholderTextColor="#fff"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center' }}
        onPress={() => setAcceptTerms(!acceptTerms)}
      >
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: '#fff',
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {acceptTerms && (
            <View
              style={{
                width: 14,
                height: 14,
                backgroundColor: '#fff',
                borderRadius: 2,
              }}
            />
          )}
        </View>
        <Text style={{ color: '#fff' }}>Aceptas los términos</Text>
      </TouchableOpacity>
      
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
}


//stilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
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

export default RegistroScreen;
