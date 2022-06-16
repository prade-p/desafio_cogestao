import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    lembreteContainer: {
        width: '100%',
        bottom:0,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        marginTop:20,
    },
    textLembrete: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FF88',
        borderWidth:2,
        borderRadius:4,
        width: '90%',
        padding:15,
    },
    tituloLembrete: {
        fontSize:25,
        lineHeight:30,
        marginBottom:10,
    },
    conteudoLembrete: {
        fontSize:12,
        lineHeight:14,
        paddingBottom:10,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonExcluir: {
        alignItems: 'center',
        justifyContent: 'center',
        width:"35%",
        backgroundColor: '#FF0000',
        paddingTop:14,
        paddingBottom:14,  
        borderWidth:1,
    },
    textExcluir: {
        fontSize:14,
        color: '#ffffff',
    },
    buttonEditar: {
        alignItems: 'center',
        justifyContent: 'center',
        width:"35%",
        backgroundColor: '#FFE600',
        paddingTop:14,
        paddingBottom:14,
        marginLeft:60,
        borderWidth:1,
    },
    textEditar: {
        fontSize:14,
    },
});

export default styles