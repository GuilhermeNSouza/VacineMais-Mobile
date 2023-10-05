import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native"

import Routes from './src/rotas';
import StackRoutes from './src/rotas/stack.routes';

export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes/>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#04364A'
  },
});

