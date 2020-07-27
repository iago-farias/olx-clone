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
        width:'100%',
        borderBottomWidth:1
    },

    textHeader:{
        fontWeight:'bold',
        color:'#fff',
        fontSize:20,
        marginLeft:30
    },

    userDescriptionContainer:{
        backgroundColor:'#6632a8',
        alignItems:'center',
        justifyContent:'center',
        height:140
    },

    userDescriptionText: {
        fontSize: 20,
        color:'#fff'
    },

    optionsContainer:{
        padding:15
    },

    optionsButton:{
        marginTop:18
    },

    optionsButtonText:{
        fontSize:20,
        color:'#6632a8',
    }
});

export default styles;