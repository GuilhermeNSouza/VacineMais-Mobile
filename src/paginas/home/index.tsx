import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native"
import StackRoutes, { RootStackParamList } from '../../rotas/stack.routes';
import { StackNavigationProp } from '@react-navigation/stack';

const windowWidth = Dimensions.get('window').width;
const logoWidth = windowWidth * 0.5;

export default function Homescreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
        <View  style={styles.containerLogo}>
            <Animatable.Image
              animation='fadeInUp'
              source={require('../../images/DALLE_CARTAO-removebg-preview.png')}
              style={{ width: '95%', height: logoWidth * 1.5 }}
              resizeMode='contain'
            />
        </View>

        <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
            <Text style={styles.title}>Bem vindo senhor (a)!</Text>
            <Text style={styles.text}>Acesse aqui seu cartão</Text>

        </Animatable.View>
    </View>
  );
}

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