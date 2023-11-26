import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions,  } from 'react-native';
import { RootStackParamList } from "../../rotas/stack.routes";
import * as Animatable from 'react-native-animatable';


export default function Noticias() {
  const windowWidth = Dimensions.get('window').width;
  const logoWidth = windowWidth * 0.5;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
            
      <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Notícias</Text>
      </Animatable.View>

    <Animatable.View animation='fadeInUp' style={styles.containerForm}>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Conheça a utilização do seu cartão no aplicativo!</Text>
          <Image
              source={require('../../images/CARTAO_SUS_FOTO_KLEIDE_TEIXEIRA_11-scaled-removebg-preview.png')}
              style={{ width: '100%', height: logoWidth * 1, marginLeft: 1, marginTop: 1 }}
              resizeMode='contain'
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Novos estoques estão chegando a sua região!</Text>
          <Image
              source={require('../../images/vacina-removebg-preview.png')}
              style={{ width: '100%', height: logoWidth * 1, marginLeft: 1, marginTop: 1 }}
              resizeMode='contain'
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Obrigatoriedade de vacinas é alvo de debate no senado.</Text>
          <Image
              source={require('../../images/t_camara-removebg-preview.png')}
              style={{ width: '100%', height: logoWidth * 1, marginLeft: 1, marginTop: 1 }}
              resizeMode='contain'
            />
        </TouchableOpacity>

    </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04364A',
  },
  containerHeader:{
    marginTop: '5%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm:{
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius:15,
    borderTopRightRadius: 15,
    paddingStart: '3%',
    paddingEnd: '3%',
  },
  title: {
    fontSize: 20,
    marginTop: 28
  },
  input: {
    borderBottomWidth: 1,
    height:40,
    marginBottom: 12,
    fontSize: 16
  },
  button: {
    backgroundColor: '#04364A',
    width: '100%',
    borderRadius: 4,
    paddingVertical:8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttontest: {
    backgroundColor: '#fff',
    width: '100%',
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
  },
  headerImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  }
});