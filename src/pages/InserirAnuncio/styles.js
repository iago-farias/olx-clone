import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: Constants.statusBarHeight,
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
        marginLeft:60,
    },

    uploadFotoContainer:{
        backgroundColor:'#ccc',
        padding:12,
        height:255
    },

    uploadZone:{
        borderStyle:'dashed',
        borderColor:'#6632a8',
        borderRadius:25,
        borderWidth:1,
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },

    form:{
        paddingHorizontal:10,
        paddingVertical:15
    },

    inputContainer:{
        marginBottom:20
    },

    label:{
        fontSize:16,
        marginBottom:10
    },

    input:{
        borderWidth:1,
        borderRadius:8,
        borderColor:'#ccc',
        height:40,
        padding:12
    },

    anunciarButton:{
        backgroundColor:'#e0790b', 
        height:45,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        borderRadius:50,
        marginTop:15
    },

    textButton:{
        fontSize:18,
        color:'#fff',
        marginLeft:5
    }
});


export default styles;