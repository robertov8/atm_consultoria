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

const detalheServicos = require('../img/detalhe_servico.png');

export default class CenaServicos extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor='#19D1C8'
                />

                <BarraNavegacao voltar navigator={this.props.navigator} />

                <View style={styles.cabecalho}>
                    <Image source={detalheServicos} />
                    <Text style={styles.txtTitulo}>Nossos Serviços</Text>
                </View>

                <View style={styles.detalhesServicos}>
                    <Text style={styles.txtServico}>- Consultoria</Text>
                    <Text style={styles.txtServico}>- Processos</Text>
                    <Text style={styles.txtServico}>- Acompanhamento de Projetos</Text>
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
        color: '#19D1C8',
        marginLeft: 10,
        marginTop: 25
    },
    detalhesServicos: {
        marginTop: 20,
        padding: 20
    },
    txtServico: {
        fontSize: 18,
        marginHorizontal: 15
    }
});
