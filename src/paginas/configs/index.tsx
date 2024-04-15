// Importa o componente `StatusBar` do pacote 'expo-status-bar'
// e os componentes `StyleSheet`, `Text` e `View` do React Native.
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Define a função `Configurações` como o componente exportado por padrão.
export default function Configurações() {
  return (
    // Retorna um componente `View` que representa a tela de configurações.
    <View style={styles.container}>
      // Inclui um componente `Text` com o texto "Tela de Configurações".
      <Text> Tela de Configurações </Text>
      // Adiciona o componente `StatusBar` para controlar a barra de status.
      <StatusBar style="auto" />
    </View>
  );
}

// Define estilos usando a função `StyleSheet.create`.
const styles = StyleSheet.create({
  container: {
    // Define a flexibilidade do contêiner como 1, permitindo que ele ocupe todo o espaço disponível.
    flex: 1,
    // Define a cor de fundo do contêiner como branco.
    backgroundColor: '#fff',
    // Alinha os itens filhos centralmente ao longo do eixo principal (verticalmente).
    alignItems: 'center',
    // Justifica os itens filhos centralmente ao longo do eixo transversal (horizontalmente).
    justifyContent: 'center',
  },
});
