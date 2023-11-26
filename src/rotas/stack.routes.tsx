import { createNativeStackNavigator } from '@react-navigation/native-stack'
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
const Stack = createNativeStackNavigator<RootStackParamList>()
export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
            name='Inicio'
            component={Inicio}
            />
            <Stack.Screen
            name='Login'
            component={Login}
            />
            <Stack.Screen
            name='Homescreen'
            component={Homescreen}
            />
            <Stack.Screen
            name='Cadastro'
               component={Cadastro}
            />
            <Stack.Screen
            name='Noticias'
            component={DrawerRoutes}
            />
            <Stack.Screen
            name='Perfil'
            component={Perfil}
            />
            <Stack.Screen
            name='ImageModal'
            component={ImageModal}
            />
            <Stack.Screen
            name='Historico'
            component={Historico}
            />
        </Stack.Navigator>
    )
}