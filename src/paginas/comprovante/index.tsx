import React from 'react';
import { Modal, Image, StyleSheet, Dimensions, View, TouchableOpacity, Text, GestureResponderEvent } from 'react-native';

interface ImageModalProps {
  imageUrl: any;
  visible: boolean;
  onClose: () => void;
  onAction1: () => void; // Ação do primeiro botão
  onAction2: () => void; // Ação do segundo botão
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, visible, onClose }) => {
  const windowWidth = 600;
  const imageWidth = windowWidth * 0.8;

  function onAction1(event: GestureResponderEvent): void {
    throw new Error('Function not implemented.');
  }

  function onAction2(event: GestureResponderEvent): void {
    throw new Error('Function not implemented.');
  }

  return (
    <Modal transparent visible={visible} onRequestClose={onClose}>
      <TouchableOpacity activeOpacity={1} onPress={onClose} style={styles.modalOverlay}>
        <View style={styles.modalContent}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Image source={require('../../images/211651_close_round_icon.png')} style={styles.closeButtonImage}/>
          </TouchableOpacity>
          <Image source={imageUrl} style={{ width: imageWidth, height: imageWidth }} resizeMode="contain" />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onAction1} style={styles.button}>
            <Image source={require('../../images/326639_download_file_icon.png')} style={styles.ButtonImage}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onAction2} style={styles.button}>
            <Image source={require('../../images/9035090_share_social_icon.png')} style={styles.ButtonImage}/>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

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
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
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

export default ImageModal;