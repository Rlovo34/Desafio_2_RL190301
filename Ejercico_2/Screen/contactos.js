import React, { useState, useEffect } from 'react';
import {View,Text,FlatList,TouchableOpacity,StyleSheet,Modal,TextInput,Button,AsyncStorage,Alert} from 'react-native';
//Async storage
import '@react-native-async-storage/async-storage';

//Declaracion de funciones
function ContactosScreen() {
  const [contactos, setContactos] = useState([]);
  const [nuevoContactoNombre, setNuevoContactoNombre] = useState('');
  const [nuevoContactoApellido, setNuevoContactoApellido] = useState('');
  const [nuevoContactoTelefono, setNuevoContactoTelefono] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // Cargar contactos al cargar la pantalla
  useEffect(() => {
    async function cargarContactos() {
      
        const contactosGuardados = await AsyncStorage.getItem('contactos');
        if (contactosGuardados !== null) {
          setContactos(JSON.parse(contactosGuardados));
        }
     
    }

    //Actualizar contactos
    cargarContactos();
  }, []);

  const guardarContactos = async (nuevosContactos) => {
    try {
      await AsyncStorage.setItem('contactos', JSON.stringify(nuevosContactos));
    } catch (error) {
      Alert.alert('Contactos Actualizados', 'Tu lista de contactos ha sido actualizada');
    }
  };

  //Agregar contactos
  const handleAgregarContacto = () => {
    if (nuevoContactoNombre && nuevoContactoApellido && nuevoContactoTelefono) {
      const nuevoContacto = {
        id: contactos.length + 1,
        nombre: nuevoContactoNombre,
        apellido: nuevoContactoApellido,
        telefono: nuevoContactoTelefono,
      };

      //Funciones para agregar nuevo contacto
      const nuevosContactos = [...contactos, nuevoContacto];
      setContactos(nuevosContactos);
      guardarContactos(nuevosContactos);

      setNuevoContactoNombre('');
      setNuevoContactoApellido('');
      setNuevoContactoTelefono('');

      setModalVisible(false);
    } 
    //Error al no llenar todos los campos
    else {
      Alert.alert('Error', 'Por favor, complete todos los campos.');
    }
  };

  //Borrar Contactos
  const handleDeleteContacto = (id) => {
    const nuevosContactos = contactos.filter((contacto) => contacto.id !== id);
    setContactos(nuevosContactos);
    guardarContactos(nuevosContactos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.noContactText}>
        {contactos.length === 0 ? 'No tienes contactos registrados.' : ''}
      </Text>
      <FlatList
        data={contactos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.contactoContainer}>
            <View>
              <Text style={styles.contactoNombre}>
                {item.nombre} {item.apellido}
              </Text>
              <Text style={styles.contactoNum}>{item.telefono}</Text>
            </View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteContacto(item.id)}
            >
              <Text style={styles.buttonText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      {/* Modal para agregar contacto */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Agregar nuevo contacto</Text>

            <TextInput
              placeholder="Nombre"
              value={nuevoContactoNombre}
              onChangeText={(text) => setNuevoContactoNombre(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Apellido"
              value={nuevoContactoApellido}
              onChangeText={(text) => setNuevoContactoApellido(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Teléfono"
              value={nuevoContactoTelefono}
              onChangeText={(text) => setNuevoContactoTelefono(text)}
              style={styles.input}
            />

            <Button title="Agregar" onPress={handleAgregarContacto} />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}


//stilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#931FE8',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contactoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  contactoNombre: {
    fontSize: 24,
    color: '#fff',
  },
  contactoNum: {
    fontSize: 18,
    color: 'gray',
  },
  noContactText: {
    fontSize: 20,
    color: 'white',
    marginTop: 20,
  },
});

export default ContactosScreen;
