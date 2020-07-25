import React from 'react';
import {View, Text, TouchableOpacity,StyleSheet, Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import {MaterialIcons, Feather} from '@expo/vector-icons';

import logoOlx from '../assets/olx-logo.png';

function CustomDrawer({ props }) {
    const { navigation } = props;

    return(
        <DrawerContentScrollView {... props}>
            <View style={styles.header}>
                <Feather name="user" color="#fff" size={30} />
                <View style={{marginLeft:10}}>
                    <Text style={styles.headerText}>Nome do usuário</Text>
                    <Text style={styles.headerText}>usuario@email.com</Text>
                </View>            
            </View>
            <View style={styles.itemsContainer}>
                <TouchableOpacity style={[styles.drawerItem,{marginTop:0}]} onPress={() => navigation.navigate("Home")}>
                    <Image
                        source={logoOlx}
                        style={{height:30, width:30}}
                        resizeMode="contain" 
                    />
                    <Text style={styles.drawerItemText}>Anuncios</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate("InserirAnuncio")}>
                    <Feather name="edit-2" color="#000" size={30} />         
                    <Text style={styles.drawerItemText}>Inserir Anúncio</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate("Notificacoes")}>
                    <Feather name="bell" color="#000" size={30} />           
                    <Text style={styles.drawerItemText}>Notificações</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate("Chat")}>
                    <Feather name="message-circle" color="#000" size={30} />         
                    <Text style={styles.drawerItemText}>Chat</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate("Favoritos")}>
                <MaterialIcons name="favorite-border" color="#000" size={30} />         
                    <Text style={styles.drawerItemText}>Favoritos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate("MinhaConta")}>
                    <Feather name="user" color="#000" size={30} />         
                    <Text style={styles.drawerItemText}>Minha conta</Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity style={styles.drawerItemFooter} onPress={() => {}}>      
                <Text style={styles.drawerItemTextFooter}>Ajuda e Contato</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.drawerItemFooter} onPress={() => {}}>      
                <Text style={styles.drawerItemTextFooter}>Dúvidas Frequentes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.drawerItemFooter} onPress={() => {}}>      
                <Text style={styles.drawerItemTextFooter}>Dicas de Segurança</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.drawerItemFooter} onPress={() => {}}>      
                <Text style={styles.drawerItemTextFooter}>Termos de Uso</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.drawerItemFooter} onPress={() => {}}>      
                <Text style={styles.drawerItemTextFooter}>Avalie na Google Play</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.drawerItemFooter} onPress={() => {}}>      
                <Text style={styles.drawerItemTextFooter}>Curta no Facebook</Text>
            </TouchableOpacity>
            
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    header:{ 
        height:80, 
        backgroundColor:'#6632a8',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:25
    },

    headerText: {
        color:'#fff',
        fontSize:14,
    },

    itemsContainer: {
        borderColor:'#ccc',
        borderBottomWidth:1,
        paddingVertical:12
    },

    drawerItem:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        marginLeft:10,
    },

    drawerItemFooter: {
        flexDirection:'row',
        paddingVertical:14,
        paddingHorizontal:10
    },

    drawerItemTextFooter:{
        fontSize:18,
    },

    drawerItemText:{
        fontSize:18,
        marginLeft:35
    }
})

export default CustomDrawer;