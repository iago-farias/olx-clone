import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './pages/Home';
import InserirAnuncio from './pages/InserirAnuncio';
import Notificacoes from './pages/Notificacoes';
import Chat from './pages/Chat';
import Favoritos from './pages/Favoritos';
import MinhaConta from './pages/MinhaConta';

import CustomDrawer from './components/CustomDrawer';

const Drawer = createDrawerNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawer props={props} />} 
                initialRouteName="Home"
            >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="InserirAnuncio" component={InserirAnuncio} />
                <Drawer.Screen name="Notificacoes" component={Notificacoes} />
                <Drawer.Screen name="Chat" component={Chat} />
                <Drawer.Screen name="Favoritos" component={Favoritos} />
                <Drawer.Screen name="MinhaConta" component={MinhaConta} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Routes;