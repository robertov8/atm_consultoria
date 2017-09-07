// @flow
import React, { Component } from 'react';
import { StatusBar, View, Image, StyleSheet } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const logo = require('../img/logo.png');
const menuCliente = require('../img/menu_cliente.png');
const menuContato = require('../img/menu_contato.png');
const menuEmpresa = require('../img/menu_empresa.png');
const menuServico = require('../img/menu_servico.png');

export default class CenaPrincipal extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor='#CCC'
                />

                <BarraNavegacao />

                <View style={styles.logo}>
                    <Image source={logo} />
                </View>

                <View style={styles.menu}>
                    <View style={styles.menuGrupo}>
                        <Image style={styles.imgMenu} source={menuCliente} />
                        <Image style={styles.imgMenu} source={menuContato} />
                    </View>

                    <View style={styles.menuGrupo}>
                        <Image style={styles.imgMenu} source={menuEmpresa} />
                        <Image style={styles.imgMenu} source={menuServico} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        alignItems: 'center'
    },
    menu: {
        alignItems: 'center'
    },
    menuGrupo: {
        flexDirection: 'row'
    },
    imgMenu: {
        margin: 15
    }
});
