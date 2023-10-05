import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabRoutes from './tab.routes'
import Perfil from '../paginas/perfil'
import Routes from '.'
import Home from '../paginas/home'
import Começo from '../paginas/começo'
import Login from '../paginas/login'
import DrawerRoutes from './drawer.routes'

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
            name='Começo'
            component={Começo}
            />
            <Stack.Screen
            name='Login'
            component={Login}
            />
            <Stack.Screen
            name='Gambiarra'
            component={DrawerRoutes}
            />
        </Stack.Navigator>
    )
}