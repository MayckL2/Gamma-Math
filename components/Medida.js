import { useState } from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';
import Linha from './linha'

export default function Medida(){
  let [valor, setValor] = useState(4950)
  return(
    <View style={style.fundo}>
      <Linha medida={ 'KM' } valor={valor / 1000} icon={ require('../assets/img/regua.png') } />
      <Linha medida={ 'HM' } valor={valor / 100} icon={ require('../assets/img/regua.png') } />
      <Linha medida={ 'DAM' } valor={valor / 10} icon={ require('../assets/img/regua.png') } />
      <Linha medida={ 'M' } valor={valor } icon={ require('../assets/img/lapis.png')  } />
      <Linha medida={ 'DM' } valor={valor * 10} icon={ require('../assets/img/regua.png') } />
      <Linha medida={ 'CM' } valor={valor * 100} icon={ require('../assets/img/regua.png') } />
      <Linha medida={ 'MM' } valor={valor * 1000} icon={ require('../assets/img/regua.png') } />
    </View>
  )
}

const style = StyleSheet.create({
  fundo: {
    backgroundColor: '#1C2E48',
    width: '95vw', 
    height: '352px',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    borderRadius: '10px'
  }

})