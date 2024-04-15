// Importa os componentes necessários para criar o drawer navigator e os ícones
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'; 

// Importa as rotas das abas, tela de perfil e tela de configurações
import TabRoutes from './tab.routes'
import Perfil from '../paginas/perfil'
import Configurações from '../paginas/configs'

// Cria um Drawer Navigator
const Drawer = createDrawerNavigator()

// Define a função `DrawerRoutes` como o componente exportado por padrão.
export default function DrawerRoutes(){
    return(
        // Componente de Drawer Navigator
        <Drawer.Navigator screenOptions={{title:'Vacine+'}}>
            {/* Definição da primeira tela do Drawer Navigator */}
            <Drawer.Screen
            name='Inicio'
            component={TabRoutes}
            options={{
                drawerIcon: ({ color, size }) => <Feather name='home' size={size} color={color}/>, // Ícone para a tela de início
                drawerLabel: 'Inicio' // Rótulo para a tela de início  
            }}
            />
            {/* Definição da segunda tela do Drawer Navigator */}
            <Drawer.Screen
            name='Perfil'
            component={Perfil}
            options={{
                drawerIcon: ({ color, size }) => <Feather name='user' size={size} color={color}/>, // Ícone para a tela de perfil
                drawerLabel: 'Minha Conta' // Rótulo para a tela de perfil  
            }}
            />
            {/* Definição da terceira tela do Drawer Navigator */}
            <Drawer.Screen
            name='Configurações'
            component={Configurações}
            options={{
                drawerIcon: ({ color, size }) => <Feather name='edit' size={size} color={color}/>, // Ícone para a tela de configurações
                drawerLabel: 'Configurações' // Rótulo para a tela de configurações  
            }}
            />
        </Drawer.Navigator>
    )
}
