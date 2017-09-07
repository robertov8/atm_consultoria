// @flow
import React, { Component } from 'react';
import {
    StatusBar,
    View,
    Image,
    StyleSheet,
    Text
 } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalhesClientes = require('../img/detalhe_cliente.png');
const cliente1 = require('../img/cliente1.png');
const cliente2 = require('../img/cliente2.png');

export default class CenaClientes extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor='#B9C941'
                />

                <BarraNavegacao voltar navigator={this.props.navigator} />

                <View style={styles.cabecalho}>
                    <Image source={detalhesClientes} />
                    <Text style={styles.txtTitulo}>Nossos Clientes</Text>
                </View>

                <View style={styles.detalhesClientes}>
                    <Image source={cliente1} />
                    <Text style={styles.txtdetalhesClientes}>Lorem ipsum dolorem</Text>
                </View>
                <View style={styles.detalhesClientes}>
                    <Image source={cliente2} />
                    <Text style={styles.txtdetalhesClientes}>Lorem ipsum dolorem</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        marginTop: 20,
        flexDirection: 'row'
    },
    txtTitulo: {
        fontSize: 30,
        color: '#B9C941',
        marginLeft: 10,
        marginTop: 25
    },
    detalhesClientes: {
        padding: 20,
        marginTop: 10
    },
    txtdetalhesClientes: {
        fontSize: 18,
        marginLeft: 20
    }
});
