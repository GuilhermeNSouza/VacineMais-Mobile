// Importa o componente createBottomTabNavigator para criar o tab navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Importa o ícone Feather do pacote @expo/vector-icons
import { Feather } from '@expo/vector-icons'

// Importa as páginas relacionadas às abas
import Homescreen from '../paginas/home'
import Historico from '../paginas/historico'
import Noticias from '../paginas/noticias'

// Cria um tab navigator
const Tab = createBottomTabNavigator()

// Define a função `TabRoutes` como o componente exportado por padrão.
export default function TabRoutes(){
    return(
        // Componente do Tab Navigator
        <Tab.Navigator screenOptions={{headerShown: false}}>
            {/* Definição da aba de Notícias */}
            <Tab.Screen
            name= 'Noticias'
            component={Noticias}
            options={{
                // Ícone e rótulo da aba
                tabBarIcon: ({ color, size }) => <Feather name='info' size={size} color={color}/>,
                tabBarLabel: 'Noticias'
            }}
            />
            {/* Definição da aba da Homescreen */}
            <Tab.Screen
            name= 'Homescreen'
            component={Homescreen}
            options={{
                // Ícone e rótulo da aba
                tabBarIcon: ({ color, size }) => <Feather name='home' size={size} color={color}/>,
                tabBarLabel: 'Home'
            }}
            />
            {/* Definição da aba do Histórico */}
            <Tab.Screen
            name= 'Historico'
            component={Historico}
            options={{
                // Ícone e rótulo da aba
                tabBarIcon: ({ color, size }) => <Feather name='clipboard' size={size} color={color}/>,
                tabBarLabel: 'Historico'
            }}
            />
        </Tab.Navigator>   
    )
}
