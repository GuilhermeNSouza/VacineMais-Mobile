// Importa React e os componentes necessários do React Native
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'; // Importa uma biblioteca para animações
import { StatusBar } from 'expo-status-bar'; // Importa o componente StatusBar do Expo
import { useNavigation } from "@react-navigation/native"; // Importa hook para navegação
import { StackNavigationProp } from '@react-navigation/stack'; // Importa tipo de navegação para pilha
import { RootStackParamList } from '../../rotas/stack.routes'; // Importa tipo de parâmetros da rota

export default function Cadastro() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>(); // Inicializa navegação

  return (
    // Componente de contêiner principal
    <View style={styles.container}>
      {/* Animatable View para a mensagem */}
      <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Realize seu cadastro</Text>
      </Animatable.View>

      {/* Animatable View para o formulário */}
      <Animatable.View animation='fadeInUp' style={styles.containerForm}>
        {/* Inputs para nome, sobrenome, email e senha */}
        <Text style={styles.title}>Nome</Text>
        <TextInput
          placeholder="Digite seu Nome..."
          style={styles.input}
        />

        <Text style={styles.title}>Sobrenome</Text>
        <TextInput
          placeholder="Digite seu Sobrenome..."
          style={styles.input}
        />

        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite seu Email..."
          style={styles.input}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Digite sua Senha..."
          style={styles.input}
        />

        {/* Botão para acessar */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Homescreen')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04364A',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 20,
    marginTop: 28
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  button: {
    backgroundColor: '#04364A',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center'
  },
  registerText: {
    color: '#a1a1a1'
  }
});
