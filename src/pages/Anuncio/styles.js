import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:Constants.statusBarHeight,
    },

    header:{
        backgroundColor:'#6632a8',
        height:55,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10,
        position:'absolute',
        zIndex:5,
        width:'100%'
    },

    textHeader:{
        fontWeight:'bold',
        color:'#fff',
        fontSize:20,
        marginLeft:30
    },

    dataContainer:{
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        paddingHorizontal:10,
        paddingVertical:15,
        marginBottom:15
    },

    tituloContainer:{
       
    },

    precoText:{
        fontWeight:'bold',
        fontSize:25,
        marginBottom:10,
    },

    tituloText:{
        fontSize:20,
        marginBottom:10,
    },

    dataText:{
        fontSize:14,
        color:'#ccc',
        marginBottom:10,
    },



    descricao:{
 
    },

    descricaoText:{
        fontSize:14,
        marginBottom:10    
    },  

    detalhesText:{
        fontSize:18,
        marginBottom:12
    }, 

    loacalizacao:{

    },

});

export default styles;