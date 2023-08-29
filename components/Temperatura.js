import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Botao from './Botao';
import backSpace from '../backspace.png';

export default function Temperatura(){

  const [fahrenheit, setFahrenheit] = useState('')
  const [kelvin, setKelvin] = useState('');
  const [valor, setValor] = useState('');


  const celsius = valor;

  const celsiusFahrenheit =  ((9 * celsius) / 5) + 32;

  const celsiusKelvin = celsius * 1 + 273.15;


  function retornaTemperaturas(){

    setFahrenheit(celsiusFahrenheit);

    setKelvin(celsiusKelvin);

  }

  return(
    <ScrollView style={styles.tela}>

      {/* <Text style={ styles.temperatura }>
        Temperatura em Fahrenheit: { fahrenheit }
      </Text>

      <Text style={ styles.temperatura }>
        Temperatura em Kelvin: { kelvin }
      </Text> */}

      <View style={styles.visor}>
        <View style={styles.celsius}>
          <Text style={styles.icon}>Cº</Text>
          <Text style={styles.textoCelsius}>{ celsius }</Text>
        </View>
      </View>

      <View style={styles.instrucoes}>
        <Text style={styles.textInstrucao}>INFORME UM VALOR EM CELSIUS</Text>
      </View>

      <View style={styles.teclado}>

        <Botao valor="1" dados={() => setValor(valor + 1)} cor='grande' />
        <Botao valor="2" dados={() => setValor(valor + 2)} cor='grande' />
        <Botao valor="3" dados={() => setValor(valor + 3)} cor='grande' />
        <Botao valor="4" dados={() => setValor(valor + 4)} cor='grande' />
        <Botao valor="5" dados={() => setValor(valor + 5)} cor='grande' />
        <Botao valor="6" dados={() => setValor(valor + 6)} cor='grande' />
        <Botao valor="7" dados={() => setValor(valor + 7)} cor='grande' />
        <Botao valor="8" dados={() => setValor(valor + 8)} cor='grande' />
        <Botao valor="9" dados={() => setValor(valor + 9)} cor='grande' />
        <Botao img={backSpace} dados={() => setValor(valor + '')} cor='grandeverde' />
        <Botao valor="0" dados={() => setValor(valor + 0)} cor='grandeazul' />
        <Botao valor="=" dados={ retornaTemperaturas } cor='grandeverde' />

      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  temperatura: {
    color: '#fff'
  },
  teclado: {
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    bottom: 0,
    flex: 1
  },
  tela: {
    paddingLeft: 15,
    paddingRight: 15
  },
  instrucoes: {
    width: '100vw',
    backgroundColor: '#1C2E48',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 12,
    marginBottom: 12
  },
  textInstrucao: {
    color: '#7A9FE5',
    fontWeight: 'bold'
  },
  visor: {
    height: 350,
    width: '100vw',
    backgroundColor: '#1C2E48',
    borderRadius: 10,
    marginBottom: 12,
    padding: 12
  },
  celsius: {
    justifyContent: 'space-around',
    backgroundColor: '#0D1422',
    width: '100vw',
    paddingVertical: 12,
    borderRadius: 10,
    paddingHorizontal: 20
  },
  icon: {
    color: '#2BD7D9',
    fontWeight: 'bold'
  },
  textoCelsius: {
    color: "#FFF",
  }
})
