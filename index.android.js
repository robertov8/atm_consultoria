/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

export default class atm_consultoria extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{id: 'principal'}}
            renderScene={(route, navigator) => {
                switch (route.id) {
                    case 'principal':
                        return (<CenaPrincipal navigator={navigator} />);
                        break;
                    case 'cliente':
                        return (<CenaClientes navigator={navigator} />);
                        break;
                    case 'contato':
                        return (<CenaContatos navigator={navigator} />);
                        break;
                    case 'empresa':
                        return (<CenaEmpresa navigator={navigator} />);
                        break;
                    case 'servicos':
                        return (<CenaServicos navigator={navigator} />);
                        break;

                    default:
                        return false;
                }
            }}
        />
    );
  }
}

AppRegistry.registerComponent('atm_consultoria', () => atm_consultoria);
