import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={{ alignItems: 'center'}}>
                        <Image style={{width: 245, height: 210}} source={require('../assets/login-image.jpg')} />
                    </View>
                    <TextInput placeholder='Username' style={styles.input} />
                    <TextInput placeholder='Password' style={styles.input} />
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: 'white', fontSize: 24}}>login</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    input: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 25,
        padding: 15,
        borderWidth: 2,
        borderColor: '#95A5C4',
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#95A5C4',
        height:50,
        borderWidth: 2,
        borderColor: '#95A5C4',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    }
});