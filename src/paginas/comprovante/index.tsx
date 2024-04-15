// Importa os componentes necessários do React Native
import React from 'react';
import { Modal, Image, StyleSheet, Dimensions, View, TouchableOpacity, Text, GestureResponderEvent } from 'react-native';

// Define os tipos das propriedades do componente
interface ImageModalProps {
  imageUrl: any; // URL da imagem a ser exibida
  visible: boolean; // Indica se o modal está visível ou não
  onClose: () => void; // Função para fechar o modal
  onAction1: () => void; // Função para ação do primeiro botão
  onAction2: () => void; // Função para ação do segundo botão
}

// Componente de Modal de Imagem
const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, visible, onClose }) => {
  // Largura da janela
  const windowWidth = 600;
  // Largura da imagem
  const imageWidth = windowWidth * 0.8;

  // Função para ação do primeiro botão
  function onAction1(event: GestureResponderEvent): void {
    throw new Error('Function not implemented.');
  }

  // Função para ação do segundo botão
  function onAction2(event: GestureResponderEvent): void {
    throw new Error('Function not implemented.');
  }

  return (
    // Modal transparente
    <Modal transparent visible={visible} onRequestClose={onClose}>
      {/* Overlay do modal */}
      <TouchableOpacity activeOpacity={1} onPress={onClose} style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Botão para fechar o modal */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Image source={require('../../images/211651_close_round_icon.png')} style={styles.closeButtonImage}/>
          </TouchableOpacity>
          {/* Imagem */}
          <Image source={imageUrl} style={{ width: imageWidth, height: imageWidth }} resizeMode="contain" />
          {/* Container para os botões */}
          <View style={styles.buttonContainer}>
            {/* Botão 1 */}
            <TouchableOpacity onPress={onAction1} style={styles.button}>
              <Image source={require('../../images/326639_download_file_icon.png')} style={styles.ButtonImage}/>
            </TouchableOpacity>
            {/* Botão 2 */}
            <TouchableOpacity onPress={onAction2} style={styles.button}>
              <Image source={require('../../images/9035090_share_social_icon.png')} style={styles.ButtonImage}/>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

// Estilos para os componentes
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Cor escura para cobrir o fundo
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 34,
  },
  closeButton: {
    position: 'absolute',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#fff'
  },
  closeButtonImage: {
    width: 30,
    height: 30,
    marginLeft: 410, 
    marginTop: 7
  },
  ButtonImage: {
    width: 30,
    height: 30,
    marginLeft: 134,
  },
});

export default ImageModal; // Exporta o componente
