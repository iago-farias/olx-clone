import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import Gallery from 'react-native-image-gallery';


import styles from './styles';

function Anuncio(){
    const navigation = useNavigation();

    function handleBack(){
        navigation.goBack();
    }

    return(
       <View style={styles.container}>
            <View style={styles.header}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <TouchableOpacity onPress={()=>handleBack()}>
                    <MaterialIcons name='arrow-back' size={27} color='#fff'/>
                </TouchableOpacity>

                <Text style={styles.textHeader}>Anúncio</Text>
            </View>

            <View style={{flexDirection:'row', alignItems:'center'}}>
                <TouchableOpacity onPress={()=>{}}>
                    <MaterialIcons name='favorite-border' size={27} color='#fff' style={{marginRight:12}} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{}}>
                    <MaterialIcons name='share' size={27} color='#fff'/>
                </TouchableOpacity>
            </View>
            </View>
            <ScrollView>


            <Gallery
                style={{height:300}} 
                images={[
                    {source: {uri:'https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/uno-mile-modelo-1980-da-fiat-do-colecionador-secc81rgio-minervini.-e1566934866507.jpg?quality=70&strip=info'}},
                    {source: {uri:'https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/uno-mile-modelo-1980-da-fiat-do-colecionador-secc81rgio-minervini.-e1566934866507.jpg?quality=70&strip=info'}},
                ]}
            />

            <View>
                <View style={styles.dataContainer}>
                    <Text style={styles.precoText}>R$ 50.000</Text>
                    <Text style={styles.tituloText}>Título</Text>
                    <Text style={styles.dataText}>Publicado em 04/05 às 17:00</Text>
                </View>

                <View style={styles.dataContainer}>
                    <Text style={styles.tituloText}>Descrição</Text>
                    <Text style={styles.descricaoText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Praesent iaculis mauris non quam porta tempus. 
                        Proin id nisl eu nisl iaculis consequat eu eget metus. Fusce vestibulum tincidunt augue sit amet malesuada.
                    </Text>
                </View>
                
                <View style={styles.dataContainer}>
                    <Text style={styles.tituloText}>Detalhes</Text>

                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Text style={styles.detalhesText}>Novo/Usado</Text>
                        </View>

                        <View style={{marginLeft:100}}>
                            <Text style={styles.detalhesText}>Usado</Text>
                        </View>
                    </View>
                    
                </View>

                <View style={styles.dataContainer}>
                    <Text style={styles.tituloText}>Localização</Text>

                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Text style={styles.detalhesText}>CEP</Text>
                            <Text style={styles.detalhesText}>Município</Text>
                            <Text style={styles.detalhesText}>Bairro</Text>
                        </View>

                        <View style={{marginLeft:100}}>
                            <Text style={styles.detalhesText}>00000000</Text>
                            <Text style={styles.detalhesText}>Teste</Text>
                            <Text style={styles.detalhesText}>Teste</Text>
                        </View>
                    </View>

                </View>

            </View>
            </ScrollView>
       </View>
    );
}

export default Anuncio;