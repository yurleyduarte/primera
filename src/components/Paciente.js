import React from 'react'
import { Text, View, StyleSheet} from 'react-native';


const Paciente = ({ item }) => {

    const { paciente, sintomas } = item

    return (
       <View>
           <Text>{paciente}</Text>
           <Text>{sintomas}</Text>
       </View>
    )
}

const styles = StyleSheet.create({


    
})

export default Paciente