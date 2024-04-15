// Importa os componentes necessários do React Native e da navegação
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { RootStackParamList } from "../../rotas/stack.routes";
import * as Animatable from 'react-native-animatable';
import { ScrollView } from "react-native-gesture-handler";

// Define a função `Noticias` como o componente exportado por padrão.
export default function Noticias() {
  // Obtém a largura da janela e calcula a largura do logo
  const windowWidth = Dimensions.get('window').width;
  const logoWidth = windowWidth * 0.5;
  // Hook para navegação
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    // Componente de contêiner principal
    <View style={styles.container}>
      {/* Animatable View para o cabeçalho */}
      <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Notícias</Text>
      </Animatable.View>
    
      {/* Animatable View para o conteúdo */}
    <ScrollView contentContainerStyle={styles.scrollViewContent}>  
      <Animatable.View animation='fadeInUp' style={styles.containerForm}>
        {/* Botões de notícia */}
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
    </ScrollView>
    </View>
  );
}

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04364A',
  },
  containerHeader:{
    marginTop: '5%',
    marginBottom: '8%',
    paddingStart: '5%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingBottom: 10,
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left', // Centralize o texto
  },
  containerForm:{
    backgroundColor: '#F5F5F5', // Altere a cor de fundo para um tom mais claro
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingStart: '3%',
    paddingEnd: '3%',
    paddingTop: 10, // Adicione um espaçamento superior
  },
  button: {
    backgroundColor: '#04364A', // Aplique uma cor mais vibrante aos botões
    width: '100%',
    borderRadius: 8, // Aumente o raio da borda para um visual mais arredondado
    paddingVertical: 12, // Aumente o preenchimento vertical para melhorar a usabilidade
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16, // Reduza um pouco o tamanho do texto
    fontWeight: 'bold'
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});
