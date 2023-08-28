import * as React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';

export default function Botao({ valor, dados, estilo }) {
  return (
    <View>
      <Text>
        <Button
          style={estilo}
          title={valor}
          accessibilityLabel={valor}
          onPress={(dados)}
        />
      </Text>
    </View>
  );
}
