import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    NavigatorIOS
} from 'react-native'

import Loggedout from './src/screens/loggedout'
import LoggedOut from './src/screens/loggedout';

export default class Airbnb extends Component {

    render() {
        return (
          <NavigatorIOS
            initialRoute = {{
              component: Loggedout,
              title: 'hello dear',
              passProps: {index: 1}
            }}
            style = {{flex: 1}}
            />
        )
    }
}