import { useState } from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';
import Linha from './linha'

export default function Medida(){
  let [valor, setValor] = useState(4950)
  return(

    <View style={style.body}>
      <View style={style.fundo}>
        <Linha medida={ 'KM' } valor={valor / 1000} icon={ require('../assets/img/regua.png') } />
        <Linha medida={ 'HM' } valor={valor / 100} icon={ require('../assets/img/regua.png') } />
        <Linha medida={ 'DAM' } valor={valor / 10} icon={ require('../assets/img/regua.png') } />
        <Linha medida={ 'M' } valor={valor } icon={ require('../assets/img/lapis.png')  } />
        <Linha medida={ 'DM' } valor={valor * 10} icon={ require('../assets/img/regua.png') } />
        <Linha medida={ 'CM' } valor={valor * 100} icon={ require('../assets/img/regua.png') } />
        <Linha medida={ 'MM' } valor={valor * 1000} icon={ require('../assets/img/regua.png') } />
      </View>
    </View>

  )
}

const style = StyleSheet.create({

  body : {
    height: '100%',
    width: '100%',
    alignItems: 'center'
  }, 

  fundo: {
    backgroundColor: '#1C2E48',
    width: '90%', 
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 10,
    gap: 8, 
    borderRadius: 10
  }
  
})