// Importa os componentes necessários do React Native e do pacote 'expo-status-bar'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Importa o componente NavigationContainer do pacote '@react-navigation/native'
import { NavigationContainer } from "@react-navigation/native"

// Importa as rotas definidas na aplicação
import StackRoutes from './src/rotas/stack.routes';

// Componente principal da aplicação
export default function App() {
  return (
    // Componente NavigationContainer envolve a pilha de rotas
    <NavigationContainer>
      <StackRoutes/>
    </NavigationContainer>
  );
}

// Estilos da aplicação
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#04364A'
  },
});
