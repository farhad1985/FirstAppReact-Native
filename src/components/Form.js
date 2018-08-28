import React, {Component} from 'react'
import {
    StyleSheet,
    TextInput,
    View
} from 'react-native'

export default class Form  extends Component {
    render() {
        let emailPlaceHolder = 'Email'
        return (
            <View style = {styles.container}>
                <TextInput 
                    style = {styles.inputBox}
                    placeholder = {emailPlaceHolder} 
                    placeholderTextColor = 'white'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'white'
    }
})