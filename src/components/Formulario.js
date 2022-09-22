import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Modal,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Alert
} from 'react-native';
// import DatePicker from 'react-native-date-picker';

const Formulario = ({modalVisible, setModalVisible, pacientes, setPacientes}) => {
  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  //   const [fecha, setFecha] = useState(new Date());
  const [sintomas, setSintomas] = useState('');

  const handleCita = () =>{
    //validar
    if([paciente, propietario, email, sintomas].includes('')){
        Alert.alert(
            'Error',
            'Todos los campos son obligatorios'
        )
        return
    }
    
    const nuevoPaciente = {
       id: Date.now(),
        paciente,
        propietario,
        email,
        telefono,
        sintomas
    }
    setPacientes([...pacientes, nuevoPaciente])
    setModalVisible(!modalVisible)

    setPaciente('')
    setPropietario('')
    setEmail('')
    setTelefono('')
    setSintomas('')
  }

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nueva {''}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>

          <Pressable
            style={styles.btnCancelar}
            onLongPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
          </Pressable>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Paciente"
              placeholderTextColor={'#66'}
              value={paciente}
              onChangeText={setPaciente}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Propietario"
              placeholderTextColor={'#66'}
              value={propietario}
              onChangeText={setPropietario}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Email Propietario"
              placeholderTextColor={'#66'}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Telefono Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Telefono Propietario"
              placeholderTextColor={'#66'}
              keyboardType="number-pad"
              value={telefono}
              onChangeText={setTelefono}
              maxLength={10}
            />
          </View>
          {/* <View style={styles.campo}>
            <Text style={styles.label}>Fecha Alta</Text>
            <view style={styles.fechaContenedor}>
              <DatePicker date={fecha} locale="es" />
            </view>
          </View> */}
          <View style={styles.campo}>
            <Text style={styles.label}>Sintomas</Text>
            <TextInput
              style={[styles.input, styles.sintomasInput]}
              placeholder="Sintomas Paciente"
              placeholderTextColor={'#66'}
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <Pressable style={styles.btnNuevaCita} onPress={handleCita}>
            <Text style={styles.btnNuevaCitaTexto}>Agregar Paciente</Text>
          </Pressable>
        </ScrollView>
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
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
  },
  sintomasInput: {
    height: 100,
  },
  btnCancelar: {
    marginTop: 20,
    marginBottom: 30,
    marginHorizontal: 30,
    backgroundColor: '#5827A4',
    borderRadius: 10,
    padding: 15,
  },
  btnCancelarTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  btnNuevaCita: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnNuevaCitaTexto: {
    textAlign: 'center',
    color: '#5827A4',
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default Formulario;
