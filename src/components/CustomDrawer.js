import React from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import {MaterialIcons, Feather} from '@expo/vector-icons';


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

            <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate("Home")}>
                <MaterialIcons name="favorite-border" color="#000" size={30} />
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
            
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    header:{ 
        height:60, 
        backgroundColor:'#6632a8',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:25
    },

    headerText: {
        color:'#fff',
        fontSize:14,
    },

    drawerItem:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        marginLeft:10,
    },

    drawerItemText:{
        fontSize:18,
        marginLeft:35
    }
})

export default CustomDrawer;