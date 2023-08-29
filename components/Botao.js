import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  Image,
} from 'react-native';

export default function Botao({ valor, dados, cor, img }) {

// diferencia qual a cor do botão
  function escolhaBotao(e) {
    if (e == 'verde') {
      return (
        <TouchableOpacity style={styles.botaoVerde} onPress={dados}>
          <Text>{valor}</Text> 
          <Image source={img} />
        </TouchableOpacity>
      );
    }else if(e == 'azul'){
      return (
        <TouchableOpacity style={styles.botaoAzul} onPress={dados}>
          <Text>{valor}</Text> 
          <Image source={img} />
        </TouchableOpacity>
      );
    }else if(e == 'cinza'){
      return (
        <TouchableOpacity style={styles.botaoCinza} onPress={dados}>
          <Text>{valor}</Text> 
          <Image source={img} />
        </TouchableOpacity>
      );
    }else{
      return (
        <TouchableOpacity style={styles.botao} onPress={dados}>
          <Text>{valor}</Text> 
          <Image source={img} />
        </TouchableOpacity>
      );
    }
  }

  return (
    // pega cor pelo props e escolhe pela funçao a cor do botão
      escolhaBotao(cor)
      
    // <View>
      // {!cor ? (
      //   <TouchableOpacity style={styles.botao} onPress={dados}>
      //     {valor}
      //     <Image source={img} />
      //   </TouchableOpacity>
      // ) : cor == 'verde' ? (
      //   <TouchableOpacity style={styles.botaoVerde} onPress={dados}>
      //     {valor}
      //     <Image source={img} />
      //   </TouchableOpacity>
      // ) : (
      //   <TouchableOpacity style={styles.botao} onPress={dados}>
      //     {valor}
      //     <Image source={img} />
      //   </TouchableOpacity>
      // )}

    // </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    width: 70,
    height: 70,
    backgroundColor: '#1C2E48',
    color: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoVerde: {
    backgroundColor: '#219495',
    width: 70,
    height: 70,
    color: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoCinza: {
    backgroundColor: '#7A9FE5',
    width: 70,
    height: 70,
    color: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoAzul: {
    backgroundColor: '#7A9FE5',
    width: 70,
    height: 70,
    color: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
