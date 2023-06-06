import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal} from 'react-native';
import Detalhes from '../Detalhes/Index';

export default function Filmes({data}){
    
    const[visible, setVisible] = useState(false);
    
    return(
        <View>
            <View style={styles.card}>
                <Text style={styles.titulo}>{data.nome}</Text>
                <Image
                style={styles.img}
                source={{uri:data.foto}}
                />

                <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.botao} onPress={()=> setVisible(true)}>
                        <Text style={styles.boatoTexto}>Leia Mais</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal transparent={true} animationType='slide' visible={visible}> 
                <Detalhes filme={data} voltar={()=> setVisible(false)} />
            </Modal>
        </View>
    );
}


const styles = StyleSheet.create({
    card:{

        backgroundColor:'#FFF',
        margin: 15,
        elevation:2,



    },

    img:{
        height:250,
        zIndex: 2
    },

    titulo:{
        padding: 15,
        fontSize:18,
        fontWeight:'bold'
    },

    areaBotao:{
        alignItems: 'flex-end',
        marginTop:-45,
        zIndex: 3,
    },

    botao:{
        width:100,
        backgroundColor:'#09a6ff',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5


    },

    boatoTexto:{
        color: '#fff',
        textAlign: 'center'
    }

})