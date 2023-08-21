import { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';

import Calculadora from './components/calculadora';
import Medida from './components/Medida';
import Temperatura from './components/Temperatura';

function App() {
  const [tela, setTela] = useState('Calculadora');

  function telaAberta(e) {
    if (tela == 'Calculadora') {
      return <Calculadora />;
    } else if (tela == 'Medida') {
      return <Medida />;
    } else if (tela == 'Temperatura') {
      return <Temperatura />;
    }
  }

  return (
    <SafeAreaView>
      <StatusBar hidden={true}/>

      <View style={styles.header}>
        <Text style={styles.headerBtn} onPress={() => setTela('Calculadora')}>Calculadora</Text>
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
    // paddingVertical: 50,
  },
  tela: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  headerBtn:{
    backgroundColor: 'gray',
    flexGrow: 1,
    height: 80,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  
});
