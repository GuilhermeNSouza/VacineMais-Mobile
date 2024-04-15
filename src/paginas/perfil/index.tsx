// Importa os componentes necessários do React Native
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Define a função `Perfil` como o componente exportado por padrão.
export default function Perfil() {
  return (
    // Componente de contêiner principal
    <View style={styles.container}>
      {/* Texto indicando a tela de perfil */}
      <Text> Tela de Perfil </Text>
      {/* Barra de status */}
      <StatusBar style="auto" />
    </View>
  );
}

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
