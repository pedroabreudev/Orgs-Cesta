import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

import Texto from '../../../componentes/Texto';
import topo from '../../../../assets/topo.png';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const width = Dimensions.get('screen').width;

export default function Topo({titulo}) {
    return<>        
        <Image source={topo} style={styles.topo} />
        <Texto style={styles.titulo}>{titulo} </Texto>
    </>
}
const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,        

    },    
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 46,
        color: "white",
        fontWeight: "bold",
        paddingTop: getStatusBarHeight(),
        padding: 16
    },
})
