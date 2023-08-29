import { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';

import Teclado from './components/teclado';
import Medida from './components/Medida';
import Temperatura from './components/Temperatura';

function App() {
  const [tela, setTela] = useState('Teclado');

  function telaAberta(e) {
    if (tela == 'Teclado') {
      return <Teclado />;
    } else if (tela == 'Medida') {
      return <Medida />;
    } else if (tela == 'Temperatura') {
      return <Temperatura />;
    }
  }

  return (
    <SafeAreaView style={styles.fundo}>
      <StatusBar hidden={true}/>

      <View style={styles.header}>
        <Text style={styles.headerBtn} onPress={() => setTela('Teclado')}>Teclado</Text>
        <Text style={styles.headerBtn} onPress={() => setTela('Medida')}>Medida</Text>
        <Text style={styles.headerBtn} onPress={() => setTela('Temperatura')}>Temperatura</Text>
      </View>

      <View style={styles.tela}>{telaAberta(tela)}</View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '10vh'
  },

  tela: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#0D1422',
    height: '91%'
  },

  headerBtn:{
    backgroundColor: 'gray',
    flexGrow: 1,
    height: 80,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  
});
