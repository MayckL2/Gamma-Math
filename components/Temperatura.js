import { useState } from 'react';
import { View, Text, Button } from 'react-native';

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
    <View>
      <Text>
        SCREEN Temperatura
      </Text>
      <Button onPress={() => setValor(valor + 2)} title="2" />
      <Button onPress={() => setValor(valor + 4)} title="4" />
      <Button onPress={ retornaTemperaturas } title="Calcular" />

      <Text>
        Temperatura em celsius: { celsius }
      </Text>

      <Text>
        Temperatura em Fahrenheit: { fahrenheit }
      </Text>

      <Text>
        Temperatura em Kelvin: { kelvin }
      </Text>

    </View>
  )
}