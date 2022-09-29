import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Paciente = ({item}) => {
  const {paciente, sintomas} = item;

  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Paciente:</Text>
      <Text style={styles.texto}>{paciente}</Text>
      <Text style={styles.texto}>{sintomas}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFF',
    padding: 20
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10
  },
  texto: {
    color: '#6D28D9',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10
  },
});

export default Paciente;
