// Importa o componente `StatusBar` do pacote 'expo-status-bar'
// e os componentes `StyleSheet`, `Text` e `View` do React Native.
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Define a função `NavBar` como o componente exportado por padrão.
export default function NavBar() {
  return (
    // Retorna um componente `View` que representa a barra de navegação.
    <View style={styles.container}>
      // Inclui um componente `Text` com o texto "NavBar".
      <Text> NavBar </Text>
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
