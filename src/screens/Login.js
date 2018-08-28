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
                <View style = {styles.signupText}>
                    <Text style = {styles.singupText}>Don't have an account yes?  </Text>
                    <Text style = {styles.singup‌Button}>Singup</Text>
                </View>
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
    }, 
    signupText: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginVertical: 16,
        flexDirection: 'row', 
    },
    singupText: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 16
    }, 
    singup‌Button: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
})