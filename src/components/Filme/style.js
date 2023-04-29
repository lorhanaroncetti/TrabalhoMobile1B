import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card_filme: {
        width: "90%",
        height: "300px",
        borderRadius: '10px',
        backgroundColor: '#3E3E3E',
        marginBotton: '1rem',
        marginTop: '1rem',
    },
    infos: {
        display: 'flex',
        flexDirection: 'row'
    },
    infos_imagem: {
        
    },
    imagem: {
        width: "150px",
        height: "250px",
        borderTopLeftRadius: '10px'
    },
    infos_texto: {
        width: '55%',
        alignItems: 'center',
        marginHorizontal: 'auto',
        marginTop: '2rem'
    },
    texto_titulo: {
        fontSize: '16px',
        color: '#F2F2F2',
        fontFamily: 'arial'
    },
    texto_subtitulo: {
        fontSize: '14px',
        color: '#F2F2F2',
        fontFamily: 'arial',
        marginTop: '0.5rem'
    },
    texto_sinopse: {
        fontSize: '14px',
        color: '#F2F2F2',
        fontFamily: 'arial',
        marginTop: '1rem'
    },
    botao: {
        justifyContent: 'center',
    },
    botao_botao: {
        backgroundColor: '#717171',
        color: '#717171',
        height: '30px',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 'auto',
        borderRadius: '10px',
        marginTop: '0.5rem'
    },
    botao_text: {
        color: 'pink',
    }


})

export default styles;
