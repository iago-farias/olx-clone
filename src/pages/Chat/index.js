import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {useNavigation, DrawerActions} from '@react-navigation/native';

import styles from './styles';

function Chat() {
    const navigation = useNavigation();

    function handleDrawerMenu(){
        navigation.dispatch(DrawerActions.openDrawer());
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <TouchableOpacity onPress={() => handleDrawerMenu()}>
                        <MaterialIcons name='dehaze' size={27} color='#fff'/>
                    </TouchableOpacity>

                    <Text style={styles.textHeader}>Chats</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Chat;