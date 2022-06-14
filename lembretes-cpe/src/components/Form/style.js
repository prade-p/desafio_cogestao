import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formContainer: {
        width: '100%',
        height: '100%',
        bottom:0,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        marginTop:30,
    },
    form: {
        width: '100%',
        height: '100%',
        padding: 10,
    },
    formLabel: {     
        fontFamily: 'Roboto',
        color: '#ffe600',
        fontSize:18,
        paddingLeft:20,
        marginTop:10,
    },
    textInput: {
        fontFamily: 'Roboto',
        width:"90%",
        backgroundColor: '#fff',
        height:40,
        margin:12,
        paddingLeft:10,
        borderBottomWidth:1,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
    },
    buttonCancelar: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width:"40%",
        backgroundColor: '#FF0000',
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin:30
    },
    buttonConfirmar: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width:"40%",
        backgroundColor: '#FFE600',
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin:30
    },
    textCancelar: {
        fontSize:14,
        color: '#ffffff',
    },
    textConfirmar: {
        fontSize:14,
    }
});

export default styles