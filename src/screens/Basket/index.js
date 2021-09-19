import React from 'react';
import { StyleSheet, View } from 'react-native';
import Detalhes from './componentes/Detalhes';
import Itens from './componentes/Itens';
import Topo from './componentes/Topo';

export default function Basket({topo, detalhes}) {
    return <>
        <Topo {...topo}/>  
        <View style={styles.cesta}>
            <Detalhes {...detalhes} />
            <Itens />            
        </View>

    </>
}

const styles = StyleSheet.create({    
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});
