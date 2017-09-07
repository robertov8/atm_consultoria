// @flow
import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../img/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor='#EC7148'
                />

                <BarraNavegacao voltar navigator={this.props.navigator} />

                <View style={styles.cabecalho}>
                    <Image source={detalheEmpresa} />
                    <Text style={styles.txtTitulo}>A Empresa</Text>
                </View>

                <View style={styles.detalhesEmpresa}>
                    <Text style={styles.txtEmpresa}>
                        Lorem ipsum dolorem sit amet, dolorem sit amet ipsum dolorem sit
                    </Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo: {
        fontSize: 30,
        color: '#EC7148',
        marginLeft: 10,
        marginTop: 25
    },
    detalhesEmpresa: {
        marginTop: 20,
        padding: 20
    },
    txtEmpresa: {
        fontSize: 18,
        marginHorizontal: 15
    }
});
