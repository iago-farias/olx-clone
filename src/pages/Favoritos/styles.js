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
        zIndex:5,
        width:'100%'
    },

    textHeader:{
        fontWeight:'bold',
        color:'#fff',
        fontSize:20,
        marginLeft:30
    },

    mainContentContainer:{
        marginTop:10
    }
});


export default styles;