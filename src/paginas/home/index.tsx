// Importa os componentes necessários do React Native
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable'; // Importa a biblioteca para animações
import { useNavigation } from "@react-navigation/native"; // Importa o hook para navegação
import { StackNavigationProp } from '@react-navigation/stack'; // Importa o tipo de navegação para pilha
import { RootStackParamList } from '../../rotas/stack.routes'; // Importa o tipo de parâmetros da rota
import { FontAwesome } from '@expo/vector-icons'; // Importa o ícone de usuário

// Obtém a largura da janela e calcula a largura do logo
const windowWidth = Dimensions.get('window').width;

// Define a função `Homescreen` como o componente exportado por padrão.
export default function Homescreen() {
  // Hook para navegação
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // Informações do usuário (fictícias)
  const userInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    cpf: "123.456.789-00",
    avatar: require('../../images/user_avatar.png') // Adicione a imagem do avatar do usuário
  };

  return (
    // Componente de contêiner principal
    <View style={styles.container}>
      <Animatable.View animation='fadeInDown' style={styles.containerUserInfo}>
        <Animatable.Image source={userInfo.avatar} style={styles.avatar} animation='zoomIn' />
        <View style={styles.userInfoContainer}>
          <Animatable.Text animation='fadeInRight' style={styles.userInfoText}>Nome: {userInfo.name}</Animatable.Text>
          <Animatable.Text animation='fadeInRight' style={styles.userInfoText}>E-mail: {userInfo.email}</Animatable.Text>
          <Animatable.Text animation='fadeInRight' style={styles.userInfoText}>CPF: {userInfo.cpf}</Animatable.Text>
        </View>
      </Animatable.View>

      <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
        <Text style={styles.title}>Bem vindo, {userInfo.name}!</Text>
        <Text style={styles.text}>Acesse aqui seu cartão</Text>
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
  containerUserInfo: {
    flexDirection: 'row', // Organiza os elementos na horizontal
    alignItems: 'center', // Alinha os itens verticalmente
    backgroundColor: '#04364A',
    borderBottomColor: '#04364A', // Adiciona uma borda na parte inferior
    borderBottomWidth: 2, // Largura da borda
    paddingHorizontal: 20, // Adiciona espaço horizontal interno
    paddingBottom: 90, // Adiciona espaço inferior interno
    paddingTop: 90,
  },
  containerForm: {
    flex: 2.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: '#a1a1a1',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20, // Adiciona margem à direita para separar o avatar do texto
    borderColor: '#fff',
    borderWidth: 2,
  },
  userInfoContainer: {
    flex: 1, // Ocupa o espaço disponível
  },
  userInfoText: {
    fontSize: 16,
    marginTop: 8,
    color: '#fff', // Alteração na cor do texto
  },
  button: {
    position: 'absolute',
    backgroundColor: '#04364A',
    borderRadius: 50,
    paddingVertical: 8,
    width: '70%',
    height: '15%',
    alignSelf: 'center',
    bottom: '25%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
