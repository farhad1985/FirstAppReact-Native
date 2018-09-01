import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

import Logo from '../components/Logo'
import Form from '../components/Form'

export default class Login extends Component {
    static navigationOptions = {
        title: 'Home',
      };
    
    render() {
        return (
            <View style = {styles.container}>
                <Logo />
                <Form type = "Login"/>
                <View style = {styles.signupText}>
                    <Text style = {styles.singupText}>Don't have an account yes?  </Text>
                    <TouchableOpacity 
                        title="Singup" 
                        onPress = {() => this.props.navigation.push('SignUp')}
                    >
                    <Text style = {styles.singup‌Button} >Singup</Text>

                    </TouchableOpacity>
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