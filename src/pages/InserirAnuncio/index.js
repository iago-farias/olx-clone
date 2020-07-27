import React from 'react';
import {SafeAreaView, View, ScrollView, Text, TouchableOpacity, TextInput, CheckBox} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler'

import styles from './styles';

function InserirAnuncio() {
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

                    <Text style={styles.textHeader}>Inserir Anúncio</Text>

                </View>
                <TouchableOpacity onPress={() => {}}>
                    <Text style={{color:'#fff', fontSize:15}}>LIMPAR</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={{marginTop:55}}>
                <View style={styles.uploadFotoContainer}>
                    <TouchableOpacity style={styles.uploadZone}>
                        <MaterialIcons name='camera-alt' size={40} color='#6632a8'/>
                        <Text style={{fontSize:16, color:'#6632a8'}}>Incluir fotos</Text>
                        <Text style={{fontSize:16}}>0 de 6 adicionadas</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.form}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Título do anúncio*</Text>
                        <TextInput style={styles.input} 
                            placeholder="Ex: Samsung S9 novo na caixa"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Descrição*</Text>
                        <TextInput style={styles.input} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Categoria*</Text>
                        <TextInput style={styles.input} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>CEP*</Text>
                        <TextInput style={[styles.input, {width:150}]} />
                    </View>

                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <CheckBox value={true} />
                        <Text style={{fontSize:16}}>Ocultar meu telefone neste anúncio</Text>
                    </View>

                    <RectButton style={styles.anunciarButton}>
                        <Text style={styles.textButton}>Enviar anúncio</Text>
                    </RectButton>
                    
                    <Text style={{fontSize:16, marginTop:15}}>Ao publicar você concorda e aceita nossos Termos de Uso e 
                        Privacidade</Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default InserirAnuncio;