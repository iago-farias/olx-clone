import React from 'react';
import {View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler'

import styles from './styles';

const anuncios = [{
    id:1,
    titulo: 'Título do anúncio',
    preco: 20000,
    dataHora: '20 junho 17:00',
    local: 'Brasília'
},
{
    id:2,
    titulo: 'Título do anúncio',
    preco: 20000,
    dataHora: '20 junho 17:00',
    local: 'Brasília'
},
{
    id:3,
    titulo: 'Título do anúncio',
    preco: 20000,
    dataHora: '20 junho 17:00',
    local: 'Brasília'
},
{
    id:4,
    titulo: 'Título do anúncio',
    preco: 20000,
    dataHora: '20 junho 17:00',
    local: 'Brasília'
},
{
    id:5,
    titulo: 'Título do anúncio',
    preco: 20000,
    dataHora: '20 junho 17:00',
    local: 'Brasília'
},
{
    id:6,
    titulo: 'Título do anúncio',
    preco: 20000,
    dataHora: '20 junho 17:00',
    local: 'Brasília'
},
{
    id:7,
    titulo: 'Título do anúncio',
    preco: 20000,
    dataHora: '20 junho 17:00',
    local: 'Brasília'
},
{
    id:8,
    titulo: 'Título do anúncio',
    preco: 20000,
    dataHora: '20 junho 17:00',
    local: 'Brasília'
},
];

function Feed(){
    const navigation = useNavigation();

    function handleAnuncioPress(){
        navigation.navigate('Anuncio');
    }

    function handleDrawerMenu(){
        navigation.dispatch(DrawerActions.openDrawer());
    }

    return(
        
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleDrawerMenu}>
                        <MaterialIcons name='dehaze' size={27} color='#fff'/>
                    </TouchableOpacity>

                    <View style={{flexDirection:'row'}}>
                        <MaterialIcons name='search' size={27} color='#fff' style={{marginRight:10}} />
                        <MaterialIcons name='favorite-border' size={27} color='#fff' />
                    </View>
                </View>
                
                <View style={styles.filterContainer}>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={{fontSize:20,color:'#6632a8'}}>Localização</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={{fontSize:20,color:'#6632a8'}}>Categoria</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.filterButton, {borderRightWidth:0}]}>
                        <Text style={{fontSize:20,color:'#6632a8'}}>Filtros</Text>
                    </TouchableOpacity>
                </View>
            </View>
            

            <ScrollView style={{marginTop:105, paddingHorizontal:10}}>
                {
                    anuncios.map(anuncio => ( 
                    <TouchableOpacity 
                    key={String(anuncio.id)}
                    onPress={handleAnuncioPress}>
                        <View style={styles.anuncio}>
                            <Image 
                            style={{height:110, width:120}}
                            resizeMode='stretch'
                            source={{uri:'https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/uno-mile-modelo-1980-da-fiat-do-colecionador-secc81rgio-minervini.-e1566934866507.jpg?quality=70&strip=info'}} 
                            />
                            <View style={{marginLeft:10, justifyContent:'space-between', paddingVertical:7}}>
                                <Text style={styles.tituloAnuncio}>{anuncio.titulo}</Text>
                                <Text style={styles.precoAnuncio}>{"R$ "+anuncio.preco}</Text>
                                <Text style={styles.dataLocalAnuncio}>{anuncio.dataHora+', '+anuncio.local}</Text>
                            </View>                 
                        </View>
                    </TouchableOpacity>
                    ))
                }
            </ScrollView>

            <RectButton style={styles.anunciarButton}>
                <MaterialIcons name='camera-alt' size={25} color='#fff' />

                <Text style={styles.textButton}>Anunciar agora</Text>
            </RectButton>
            
        </SafeAreaView>    
    );
}

export default Feed;