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
                    backgroundColor='#CCC'
                />

                <BarraNavegacao />

                <Image source={detalhesClientes} />
                <Text>Nossos Clientes</Text>

                <Image source={cliente1} />
                <Text>Lorem ipsum dolorem</Text>


                <Image source={cliente2} />
                <Text>Lorem ipsum dolorem</Text>
            </View>
        );
    }
}
