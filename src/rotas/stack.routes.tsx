import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabRoutes from './tab.routes'
import Perfil from '../paginas/perfil'
import Routes from '.'
import Home from '../paginas/home'
import Inicio from '../paginas/inicio'
import Login from '../paginas/login'
import DrawerRoutes from './drawer.routes'
import Cadastro from '../paginas/cadastro'
import Comprovante from '../paginas/comprovante'

export type RootStackParamList = {
    Inicio: undefined;
    Login: undefined;
    Gambiarra: undefined;
    Cadastro: undefined;
    Perfil: undefined;
    Comprovante: undefined;
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
            name='Cadastro'
               component={Cadastro}
            />
            <Stack.Screen
            name='Gambiarra'
            component={DrawerRoutes}
            />
            <Stack.Screen
            name='Perfil'
            component={Perfil}
            />
            <Stack.Screen
            name='Comprovante'
            component={Comprovante}
            />
        </Stack.Navigator>
    )
}