// Importa o componente createNativeStackNavigator para criar o stack navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Importa as rotas das abas, tela de perfil, tela de cadastro, tela de login, tela de início, tela de drawer e componentes relacionados ao stack navigator
import TabRoutes from './tab.routes'
import Perfil from '../paginas/perfil'
import Routes from '.'
import Homescreen from '../paginas/home'
import Inicio from '../paginas/inicio'
import Login from '../paginas/login'
import DrawerRoutes from './drawer.routes'
import Cadastro from '../paginas/cadastro'
import ImageModal from '../paginas/comprovante'
import Historico from '../paginas/historico'

// Define o tipo de parâmetro para as rotas do stack navigator
export type RootStackParamList = {
    Inicio: undefined;
    Login: undefined;
    Homescreen: undefined;
    Noticias: undefined;
    Cadastro: undefined;
    Perfil: undefined;
    ImageModal: undefined;
    Historico: undefined;
};

// Cria um stack navigator usando o tipo de parâmetro definido
const Stack = createNativeStackNavigator<RootStackParamList>()

// Define a função `StackRoutes` como o componente exportado por padrão.
export default function StackRoutes(){
    return(
        // Componente do Stack Navigator
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* Definição da tela de início */}
            <Stack.Screen
            name='Inicio'
            component={Inicio}
            />
            {/* Definição da tela de login */}
            <Stack.Screen
            name='Login'
            component={Login}
            />
            {/* Definição da tela da homescreen */}
            <Stack.Screen
            name='Homescreen'
            component={Homescreen}
            />
            {/* Definição da tela de cadastro */}
            <Stack.Screen
            name='Cadastro'
            component={Cadastro}
            />
            {/* Definição da tela de notícias */}
            <Stack.Screen
            name='Noticias'
            component={DrawerRoutes}
            />
            {/* Definição da tela de perfil */}
            <Stack.Screen
            name='Perfil'
            component={Perfil}
            />
            {/* Definição da tela do modal de imagem */}
            <Stack.Screen
            name='ImageModal'
            component={ImageModal}
            />
            {/* Definição da tela de histórico */}
            <Stack.Screen
            name='Historico'
            component={Historico}
            />
        </Stack.Navigator>
    )
}
