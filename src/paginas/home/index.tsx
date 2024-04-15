// Importa os componentes necessários do React Native
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable'; // Importa a biblioteca para animações
import { useNavigation } from "@react-navigation/native"; // Importa o hook para navegação
import { StackNavigationProp } from '@react-navigation/stack'; // Importa o tipo de navegação para pilha
import { RootStackParamList } from '../../rotas/stack.routes'; // Importa o tipo de parâmetros da rota

// Obtém a largura da janela e calcula a largura do logo
const windowWidth = Dimensions.get('window').width;
const logoWidth = windowWidth * 0.5;

// Define a função `Homescreen` como o componente exportado por padrão.
export default function Homescreen() {
  // Hook para navegação
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    // Componente de contêiner principal
    <View style={styles.container}>
      {/* Contêiner para o logo */}
      <View style={styles.containerLogo}>
        {/* Imagem com animação de fade-in */}
        <Animatable.Image
          animation='fadeInUp'
          source={require('../../images/DALLE_CARTAO-removebg-preview.png')}
          style={{ width: '95%', height: logoWidth * 1.5 }}
          resizeMode='contain'
        />
      </View>

      {/* Contêiner para o texto de boas-vindas */}
      <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
        <Text style={styles.title}>Bem vindo senhor (a)!</Text>
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
  containerLogo: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#04364A',
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
