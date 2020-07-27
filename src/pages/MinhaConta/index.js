import React from 'react';
import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {MaterialIcons} from '@expo/vector-icons';

import styles from './styles';

function MinhaConta() {
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

                    <Text style={styles.textHeader}>Minha Conta</Text>
                </View>

                <TouchableOpacity onPress={() => {}}>
                    <Text style={{color:'#fff', fontSize:15}}>EDITAR</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.userDescriptionContainer}>
                <Text style={styles.userDescriptionText}>Usuário</Text>

                <View style={{flexDirection:'row'}}>
                    <MaterialIcons name='place' size={27} color='#fff'/>
                    <Text style={styles.userDescriptionText}>Localização</Text>    
                </View> 
            </View>
            <View style={styles.optionsContainer}>
                <TouchableOpacity style={[styles.optionsButton,{marginTop:0}]}>
                    <Text style={styles.optionsButtonText}>Meus anúncios</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionsButton}>
                    <Text style={styles.optionsButtonText}>Favoritos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionsButton}>
                    <Text style={styles.optionsButtonText}>Buscas salvas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionsButton}>
                    <Text style={styles.optionsButtonText}>Meu perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionsButton}>
                    <Text style={styles.optionsButtonText}>Plano Profissional</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionsButton}>
                    <Text style={styles.optionsButtonText}>Segurança da Conta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionsButton}>
                    <Text style={styles.optionsButtonText}>Configurações de comunicações</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

export default MinhaConta;