import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../Feed';
import Anuncio from '../Anuncio';

const Stack = createStackNavigator();

function Home(){
    return(      
        <Stack.Navigator initialRouteName="Home" headerMode='none'>
            <Stack.Screen name="Feed" component={Feed} />
            <Stack.Screen name="Anuncio" component={Anuncio} />
        </Stack.Navigator>
    );
}

export default Home;