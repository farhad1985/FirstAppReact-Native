import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    StatusBar
} from 'react-native'
import Login from './src/screens/Login';

export default class Airbnb extends Component {
    render() {
        return(
            <Login>
                <StatusBar
                barStyle = 'light-content'
                />
             </Login>
        )
    }
}
