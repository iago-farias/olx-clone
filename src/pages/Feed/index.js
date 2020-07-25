import React from 'react';
import {View, Text, ScrollView, SafeAreaView, Image ,TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler'

import styles from './styles';

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
            <View style={styles.header}>
                <TouchableOpacity onPress={handleDrawerMenu}>
                    <MaterialIcons name='dehaze' size={27} color='#fff'/>
                </TouchableOpacity>

                <View style={{flexDirection:'row'}}>
                    <MaterialIcons name='search' size={27} color='#fff' style={{marginRight:10}} />
                    <MaterialIcons name='favorite-border' size={27} color='#fff' />
                </View>
            </View>


            <ScrollView style={{marginTop:15, paddingHorizontal:10}}>
            <TouchableOpacity onPress={handleAnuncioPress}>
                    <View style={styles.anuncio}>
                        <Image 
                        style={{height:115, width:120}}
                        resizeMode='stretch'
                        source={{uri:'https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/uno-mile-modelo-1980-da-fiat-do-colecionador-secc81rgio-minervini.-e1566934866507.jpg?quality=70&strip=info'}} 
                        />
                        <View style={{marginLeft:10, alignItems:'center', justifyContent:'space-between'}}>
                            <Text style={styles.tituloAnuncio}>Título do anúncio</Text>
                            <Text style={styles.precoAnuncio}>Preço</Text>
                            <Text style={styles.dataLocalAnuncio}>20 junho 17:00, Brasília</Text>
                        </View>                 
                    </View>
                </TouchableOpacity>
            <TouchableOpacity onPress={handleAnuncioPress}>
                    <View style={styles.anuncio}>
                        <Image 
                        style={{height:115, width:120}}
                        resizeMode='stretch'
                        source={{uri:'https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/uno-mile-modelo-1980-da-fiat-do-colecionador-secc81rgio-minervini.-e1566934866507.jpg?quality=70&strip=info'}} 
                        />
                        <View style={{marginLeft:10, alignItems:'center', justifyContent:'space-between'}}>
                            <Text style={styles.tituloAnuncio}>Título do anúncio</Text>
                            <Text style={styles.precoAnuncio}>Preço</Text>
                            <Text style={styles.dataLocalAnuncio}>20 junho 17:00, Brasília</Text>
                        </View>                 
                    </View>
                </TouchableOpacity>
            <TouchableOpacity onPress={handleAnuncioPress}>
                    <View style={styles.anuncio}>
                        <Image 
                        style={{height:115, width:120}}
                        resizeMode='stretch'
                        source={{uri:'https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/uno-mile-modelo-1980-da-fiat-do-colecionador-secc81rgio-minervini.-e1566934866507.jpg?quality=70&strip=info'}} 
                        />
                        <View style={{marginLeft:10, alignItems:'center', justifyContent:'space-between'}}>
                            <Text style={styles.tituloAnuncio}>Título do anúncio</Text>
                            <Text style={styles.precoAnuncio}>Preço</Text>
                            <Text style={styles.dataLocalAnuncio}>20 junho 17:00, Brasília</Text>
                        </View>                 
                    </View>
                </TouchableOpacity>
            <TouchableOpacity onPress={handleAnuncioPress}>
                    <View style={styles.anuncio}>
                        <Image 
                        style={{height:115, width:120}}
                        resizeMode='stretch'
                        source={{uri:'https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/uno-mile-modelo-1980-da-fiat-do-colecionador-secc81rgio-minervini.-e1566934866507.jpg?quality=70&strip=info'}} 
                        />
                        <View style={{marginLeft:10, alignItems:'center', justifyContent:'space-between'}}>
                            <Text style={styles.tituloAnuncio}>Título do anúncio</Text>
                            <Text style={styles.precoAnuncio}>Preço</Text>
                            <Text style={styles.dataLocalAnuncio}>20 junho 17:00, Brasília</Text>
                        </View>                 
                    </View>
                </TouchableOpacity>
            <TouchableOpacity onPress={handleAnuncioPress}>
                    <View style={styles.anuncio}>
                        <Image 
                        style={{height:115, width:120}}
                        resizeMode='stretch'
                        source={{uri:'https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/uno-mile-modelo-1980-da-fiat-do-colecionador-secc81rgio-minervini.-e1566934866507.jpg?quality=70&strip=info'}} 
                        />
                        <View style={{marginLeft:10, alignItems:'center', justifyContent:'space-between'}}>
                            <Text style={styles.tituloAnuncio}>Título do anúncio</Text>
                            <Text style={styles.precoAnuncio}>Preço</Text>
                            <Text style={styles.dataLocalAnuncio}>20 junho 17:00, Brasília</Text>
                        </View>                 
                    </View>
                </TouchableOpacity>
            <TouchableOpacity onPress={handleAnuncioPress}>
                    <View style={styles.anuncio}>
                        <Image 
                        style={{height:115, width:120}}
                        resizeMode='stretch'
                        source={{uri:'https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/uno-mile-modelo-1980-da-fiat-do-colecionador-secc81rgio-minervini.-e1566934866507.jpg?quality=70&strip=info'}} 
                        />
                        <View style={{marginLeft:10, alignItems:'center', justifyContent:'space-between'}}>
                            <Text style={styles.tituloAnuncio}>Título do anúncio</Text>
                            <Text style={styles.precoAnuncio}>Preço</Text>
                            <Text style={styles.dataLocalAnuncio}>20 junho 17:00, Brasília</Text>
                        </View>                 
                    </View>
                </TouchableOpacity>
            <TouchableOpacity onPress={handleAnuncioPress}>
                    <View style={styles.anuncio}>
                        <Image 
                        style={{height:115, width:120}}
                        resizeMode='stretch'
                        source={{uri:'https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/uno-mile-modelo-1980-da-fiat-do-colecionador-secc81rgio-minervini.-e1566934866507.jpg?quality=70&strip=info'}} 
                        />
                        <View style={{marginLeft:10, alignItems:'center', justifyContent:'space-between'}}>
                            <Text style={styles.tituloAnuncio}>Título do anúncio</Text>
                            <Text style={styles.precoAnuncio}>Preço</Text>
                            <Text style={styles.dataLocalAnuncio}>20 junho 17:00, Brasília</Text>
                        </View>                 
                    </View>
                </TouchableOpacity>
            <TouchableOpacity onPress={handleAnuncioPress}>
                    <View style={styles.anuncio}>
                        <Image 
                        style={{height:115, width:120}}
                        resizeMode='stretch'
                        source={{uri:'https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/uno-mile-modelo-1980-da-fiat-do-colecionador-secc81rgio-minervini.-e1566934866507.jpg?quality=70&strip=info'}} 
                        />
                        <View style={{marginLeft:10, alignItems:'center', justifyContent:'space-between'}}>
                            <Text style={styles.tituloAnuncio}>Título do anúncio</Text>
                            <Text style={styles.precoAnuncio}>Preço</Text>
                            <Text style={styles.dataLocalAnuncio}>20 junho 17:00, Brasília</Text>
                        </View>                 
                    </View>
                </TouchableOpacity>
            
            </ScrollView>

            <RectButton style={styles.anunciarButton}>
                <MaterialIcons name='camera-alt' size={25} color='#fff' />

                <Text style={styles.textButton}>Anunciar agora</Text>
            </RectButton>
            
        </SafeAreaView>
       
        
    );
}

export default Feed;