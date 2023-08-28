import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Botao from './Botao';

export default function Teclado() {
  const [valor, setValor] = useState('');

  return (
    <View>
      SCREEN Calculadora
      
      <Text>{valor}</Text>
      
      <Text style={styles.teclado}>
        <Botao valor="0" dados={() => setValor(valor + 0)} estilo={styles.botoes} />
        <Botao valor="1" dados={() => setValor(valor + 1)} estilo={styles.botoes} />
        <Botao valor="2" dados={() => setValor(valor + 2)} estilo={styles.botoes} />
        <Botao valor="3" dados={() => setValor(valor + 3)} estilo={styles.botoes} />
        <Botao valor="4" dados={() => setValor(valor + 4)} estilo={styles.botoes} />
        <Botao valor="5" dados={() => setValor(valor + 5)} estilo={styles.botoes} />
        <Botao valor="6" dados={() => setValor(valor + 6)} estilo={styles.botoes} />
        <Botao valor="7" dados={() => setValor(valor + 7)} estilo={styles.botoes} />
        <Botao valor="8" dados={() => setValor(valor + 8)} estilo={styles.botoes} />
        <Botao valor="9" dados={() => setValor(valor + 9)} estilo={styles.botoes} />
        <Botao valor="C" dados={() => setValor(valor + 'C')} estilo={styles.botoes} />
        <Botao valor="(" dados={() => setValor(valor + '(')} estilo={styles.botoes} />
        <Botao valor=")" dados={() => setValor(valor + ')')} estilo={styles.botoes} />
        <Botao valor="%" dados={() => setValor(valor + '%')} estilo={styles.botoes} />
        <Botao valor="÷" dados={() => setValor(valor + '÷')} estilo={styles.botoes} />
        <Botao valor="x" dados={() => setValor(valor + 'x')} estilo={styles.botoes} />
        <Botao valor="=" dados={() => setValor(valor + '=')} estilo={styles.botoes} />
        <Botao valor="-" dados={() => setValor(valor + '-')} estilo={styles.botoes} />
        <Botao valor="+" dados={() => setValor(valor + '+')} estilo={styles.botoes} />
        <Botao valor="." dados={() => setValor(valor + '.')} estilo={styles.botoes} />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  teclado: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 100,
    gap: 10
  },
  botoes:{
    backgroundColor: 'black'
  }
});
