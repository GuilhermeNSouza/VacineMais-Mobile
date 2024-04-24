// Importa os hooks necessários do React Navigation, componentes do React Native,
// o tipo de navegação para pilha e o tipo de parâmetros da rota
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { RootStackParamList } from "../../rotas/stack.routes";
import * as Animatable from 'react-native-animatable';
import React, { useState } from "react";
import ImageModal from '../comprovante/index';
import { Ionicons } from '@expo/vector-icons';


// Define a função `Historico` como o componente exportado por padrão.
export default function Historico() {
  // Obtém a largura da janela
  const windowWidth = Dimensions.get('window').width;
  // Calcula a largura do logo
  const logoWidth = windowWidth * 0.5;
  // Hook para navegação
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  // Estado para controlar a visibilidade do modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Função para alternar a visibilidade do modal
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    // Componente de contêiner principal
    <View style={styles.container}>
      {/* Animatable View para o cabeçalho */}
      <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Histórico de Vacinas</Text>
      </Animatable.View>

      {/* Animatable View para o formulário */}
      <Animatable.View animation='fadeInUp' style={styles.containerForm}>
        {/* Botão para exportar PDF */}

        {/* Botões para cada vacina */}
        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.buttonText}>Covid-19/Butantan | 02/02/2022</Text>
          </View>
          <Image
            resizeMode='contain'
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.buttonText}>Hepatite | 01/09/1987</Text>
            <Ionicons name="alert-circle-outline" size={24} color="#fff" style={{ marginLeft: 176 }} />
          </View>
          <Image
            resizeMode='contain'
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.buttonText}>Influenza | 19/03/1998</Text>
            <Ionicons name="alert-circle-outline" size={24} color="#fff" style={{ marginLeft: 170 }} />
          </View>
          <Image
            resizeMode='contain'
          />
        </TouchableOpacity>
      </Animatable.View>

      {/* Modal de imagem */}
      <ImageModal
        imageUrl={require('../../images/Carteira_Nacional_de_Vacinacao_Digital_page-0001.jpg')}
        visible={isModalVisible}
        onClose={toggleModal}
        onAction1={() => {
          // Lógica para ação 1
        }}
        onAction2={() => {
          // Lógica para ação 2
        }}
      />
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
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingStart: '3%',
    paddingEnd: '3%',
  },
  button: {
    backgroundColor: '#04364A',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 15
  },
  buttontest: {
    backgroundColor: '#fff',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left'
  },
});
