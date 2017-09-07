// @flow
import React, { Component } from 'react';
import { StatusBar, View, Image } from 'react-native';

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

                <Image source={logo} />
                <Image source={menuCliente} />
                <Image source={menuContato} />
                <Image source={menuEmpresa} />
                <Image source={menuServico} />
            </View>
        );
    }
}
