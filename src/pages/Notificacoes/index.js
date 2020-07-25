import React from 'react';
import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MaterialIcons, Feather} from '@expo/vector-icons';


import styles from './styles';

function Notificacoes() {
    const navigation = useNavigation();

    function handleBack(){
        navigation.goBack();
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <TouchableOpacity onPress={()=>handleBack()}>
                    <MaterialIcons name='arrow-back' size={27} color='#fff'/>
                </TouchableOpacity>

                <Text style={styles.textHeader}>Notificações</Text>
            </View>
            </View>
            
            <View style={{marginTop:75, alignItems:'center'}}>
                <Feather name="bell" color="#000" size={95} />           
                <Text style={{fontSize:25,paddingHorizontal:70}}>Você não tem nenhuma notificação</Text>
            </View>
            

        </SafeAreaView>
    );
}

export default Notificacoes;