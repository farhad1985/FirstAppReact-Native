import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    StatusBar
} from 'react-native'

import Logo from '../components/Logo'
import Form from '../components/Form'

export default class Login extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Logo />
                <Form />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#455a64',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})