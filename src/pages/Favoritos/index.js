import React from 'react';
import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MaterialIcons} from '@expo/vector-icons';

import styles from './styles';

function Favoritos() {
    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name='arrow-back' size={27} color='#fff'/>
                </TouchableOpacity>

                <Text style={styles.textHeader}>Favoritos</Text>
            </View>
        </View>
        <View style={styles.mainContentContainer}>
            <Text style={{alignSelf:'center', fontSize:20}}>Nenhum anúncio foi encontrado</Text>
            <MaterialIcons style={{alignSelf:'center'}} name="sentiment-satisfied" size={200} color="#ccc"/>
        </View>

    </SafeAreaView>
    );
}

export default Favoritos;