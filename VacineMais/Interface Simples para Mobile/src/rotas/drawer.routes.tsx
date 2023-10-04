import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'; 

import TabRoutes from './tab.routes'
import Perfil from '../paginas/perfil'
import Configurações from '../paginas/configurações'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator screenOptions={{title:'Vacine+'}}>
            <Drawer.Screen
            name='Inicio'
            component={TabRoutes}
            options={{
                drawerIcon: ({ color, size }) => <Feather name='home' size={size} color={color}/>,
                drawerLabel: 'Inicio'    
            }}
            />
            <Drawer.Screen
            name='perfil'
            component={Perfil}
            options={{
                drawerIcon: ({ color, size }) => <Feather name='user' size={size} color={color}/>,
                drawerLabel: 'Minha Conta'    
            }}
            />
            <Drawer.Screen
            name='configurações'
            component={Configurações}
            options={{
                drawerIcon: ({ color, size }) => <Feather name='edit' size={size} color={color}/>,
                drawerLabel: 'Configurações'    
            }}
            />
        </Drawer.Navigator>
    )
}