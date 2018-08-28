import React, {Component} from 'react'

import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native'
import Colors from '../../styles/colors'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

export default class RoundedButton extends Component {
    render() {
        return(
            <TouchableHighlight 
                style = {[styles.wrapper, {backgroundColor: this.props.background}]}
                onPress = {this.props.handleOnPress}
            > 
                 <View>
                    <Text style = {[styles.buttonText, {color: this.props.textColor}]}>
                        {this.props.text}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 15,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: Colors.white,
    },
    buttonText: {
        fontSize: 17,
        width: '100%',
        textAlign: 'center',
        color: Colors.white
    }
})