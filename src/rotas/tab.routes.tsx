import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import Home from '../paginas/home'
import Historico from '../paginas/historico'
import Noticias from '../paginas/noticias'

const Tab = createBottomTabNavigator()

export default function TabRoutes(){
    return(
     <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
        name= 'Noticias'
        component={Noticias}
        options={{
            tabBarIcon: ({ color, size }) => <Feather name='info' size={size} color={color}/>,
            tabBarLabel: 'Noticias'
        }}
        />
         
        <Tab.Screen
        name= 'Home'
        component={Home}
        options={{
            tabBarIcon: ({ color, size }) => <Feather name='home' size={size} color={color}/>,
            tabBarLabel: 'Inicio'
        }}
        />

        <Tab.Screen
        name= 'Historico'
        component={Historico}
        options={{
            tabBarIcon: ({ color, size }) => <Feather name='clipboard' size={size} color={color}/>,
            tabBarLabel: 'Historico'
        }}
        />
     </Tab.Navigator>   
    )
}