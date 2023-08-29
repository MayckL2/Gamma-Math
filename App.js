import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';

import Teclado from './components/teclado';
import Medida from './components/Medida';
import Temperatura from './components/Temperatura';

function App() {
  const [tela, setTela] = useState('Teclado');
  const [btnCor, setBtnCor] = useState(styles.selected)
  const [btnCor1, setBtnCor1] = useState(styles.headerBtn)
  const [btnCor2, setBtnCor2] = useState(styles.headerBtn)

  // MUDA COR DO BOTAO AO TROCAR DE TELA
  useEffect(()=>{
    if(tela == 'Teclado'){
      setBtnCor(styles.selected)
      setBtnCor1(styles.headerBtn)
      setBtnCor2(styles.headerBtn)
    }else if(tela == 'Medida'){
      setBtnCor(styles.headerBtn)
      setBtnCor1(styles.selected)
      setBtnCor2(styles.headerBtn)
    }else if(tela == 'Temperatura'){
      setBtnCor(styles.headerBtn)
      setBtnCor1(styles.headerBtn)
      setBtnCor2(styles.selected)
    }
  }, [tela])
  
  // MUDA TELA A SER RENDERIZADA
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
    <View style={styles.fundo}>
      <StatusBar hidden={true}/>

      <View style={styles.header}>
        <Text style={btnCor} onPress={() => setTela('Teclado')}>Teclado</Text>
        <Text style={btnCor1} onPress={() => setTela('Medida')}>Medida</Text>
        <Text style={btnCor2} onPress={() => setTela('Temperatura')}>Temperatura</Text>
      </View>

      <View style={styles.tela}>{telaAberta(tela)}</View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    backgroundColor: '#1C2E48',
    borderRadius: 20
  },

  tela: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#0D1422',
    width: '100%',
    height: '100%'
  },

  headerBtn:{
    backgroundColor: '#1C2E48',
    flexGrow: 1,
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    paddingBottom: 30
  },
  fundo:{
    height: '100px'
  },
  selected:{
    backgroundColor: '#219495',
    flexGrow: 1,
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    paddingBottom: 30,
    borderRadius: 10
  }
});
