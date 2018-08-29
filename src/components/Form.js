import React, {Component} from 'react'
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import {createStackNavigator} from 'react-navigation'

export default class Form extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style = {styles.container}>
                <TextInput 
                    style = {styles.inputBox}
                    placeholder = {'Email'} 
                    placeholderTextColor = 'white'
                />

                <TextInput 
                    style = {styles.inputBox}
                    placeholder = {'Password'} 
                    placeholderTextColor = 'white'
                    secureTextEntry = {true}
                />
                <TouchableOpacity style = {styles.button} >
                    <Text style = {styles.buttonText}>{this.props.type}</Text>

                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'white',
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#1c313a',
        borderRadius: 25,
        width: 300,
        marginVertical: 10,
        paddingVertical: 15
    }
})