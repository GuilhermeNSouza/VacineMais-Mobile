// Importa os componentes necessários do React Native e da navegação
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'; // Importa a biblioteca para animações
import { useNavigation } from "@react-navigation/native"; // Importa o hook para navegação
import { StackNavigationProp } from '@react-navigation/stack'; // Importa o tipo de navegação para pilha
import { RootStackParamList } from '../../rotas/stack.routes'; // Importa o tipo de parâmetros da rota

// Define a função `Login` como o componente exportado por padrão.
export default function Login() {
  // Hook para navegação
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    // Componente de contêiner principal
    <View style={styles.container}>
      {/* Animatable View para o cabeçalho */}
      <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-Vindo(a)</Text>
      </Animatable.View>

      {/* Animatable View para o formulário */}
      <Animatable.View animation='fadeInUp' style={styles.containerForm}>
        {/* Campo de Email */}
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite seu Email..."
          style={styles.input}
        />

        {/* Campo de Senha */}
        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Digite sua Senha..."
          style={styles.input}
        />

        {/* Botão de Acesso */}
        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Noticias')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        {/* Link para Cadastro */}
        <TouchableOpacity onPress={ () => navigation.navigate('Cadastro')}>
          <Text style={styles.registerText}>Não possui uma conta? Cadastre-se.</Text>
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
  containerHeader:{
    marginTop: '14%',
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
    borderTopLeftRadius:25,
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
