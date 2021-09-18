import React from 'react';
import { StyleSheet, Text } from 'react-native';

// import { Container } from './styles';

export default function Texto({ children, style }){
    let estilo = styles.texto;
    if(style?.fontWeight === 'bold'){
        estilo = styles.textoNegrito;
    }

    return <Text style={[style, estilo]}>{ children }</Text>
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal"
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    }
})