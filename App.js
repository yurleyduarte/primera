
import React, { useState } from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  StyleSheet,
  Pressable, 
  Modal
} from 'react-native';

import Formulario from './src/components/Formulario';

const App = () => {

  //los hooks se colocan en la parte superior siempre
   const [modalVisible, setModalVisible] = useState(false)
   const [pacientes, setPacientes] = useState([])

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Administrador de citas {''}
          <Text style={styles.tituloBold}>Veterinaria</Text>
        </Text>

        <Pressable
          style={styles.btnNuevaCita}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
        </Pressable>
        <Formulario 
         modalVisible={modalVisible}
         setModalVisible={setModalVisible}
         pacientes={pacientes}
         setPacientes={setPacientes}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNuevaCita:{
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextoNuevaCita:{
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
});

export default App;
