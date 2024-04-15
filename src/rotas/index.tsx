// Importa o componente NavigationContainer necessário para envolver as rotas
import { NavigationContainer } from '@react-navigation/native'

// Importa as rotas do Drawer Navigator
import DrawerRoutes from './drawer.routes'

// Define a função `Routes` como o componente exportado por padrão.
export default function Routes(){
    return(
        // Componente de NavigationContainer para envolver as rotas
        <NavigationContainer>
            {/* Componente que contém as rotas do Drawer Navigator */}
            <DrawerRoutes/>
        </NavigationContainer>
    )
}
