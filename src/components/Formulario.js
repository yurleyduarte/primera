import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Modal,
  View,
  TextInput,
} from 'react-native';

const Formulario = ({modalVisible}) => {
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>
          Nueva {''}
          <Text style={styles.tituloBold}>Cita</Text>
        </Text>

        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Paciente</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre Paciente"
            placeholderTextColor={'#66'}
          />
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Propietario</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre Propietario"
            placeholderTextColor={'#66'}
          />
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Email Propietario</Text>
          <TextInput
            style={styles.input}
            placeholder="Email Propietario"
            placeholderTextColor={'#66'}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 30,
    fontSize: 30,
    color: '#FFF',
  },
  tituloBold: {
    fontWeight: '900',
  },
  campo:{
    marginTop: 10,
    marginHorizontal: 30
  },
  label:{
    color: '#FFF',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600'
  },
  input:{
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10
  },
});

export default Formulario;
