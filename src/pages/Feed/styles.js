import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: Constants.statusBarHeight,
        justifyContent:'space-between'
    },

    header:{
        backgroundColor:'#6632a8',
        height:55,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10
    },

    headerButtons:{

    },

    anuncio:{
        height:115,
        flexDirection:'row',
        borderRadius:5,
        shadowColor:'#000',
        shadowOpacity:0,
        marginBottom:8,
        zIndex:0,
        elevation:1,
        borderColor:'#e8e9eb',
        borderWidth:1
    },

    tituloAnuncio:{
        fontSize:17,
    },

    precoAnuncio:{
        fontWeight:'bold',
        fontSize:20
    },

    dataLocalAnuncio:{
        fontSize:15,
        color:'#dddddd'
    },

    anunciarButton:{
        backgroundColor:'#e0790b', 
        position:'absolute',
        width:180,
        height:60,
        bottom:10,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        borderRadius:50
    },

    textButton:{
        fontSize:18,
        color:'#fff',
        marginLeft:5
    }

});

export default styles;