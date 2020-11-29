import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {TouchableOpacity, TextInput, } from 'react-native'
import { Component } from 'react'
import Marketplace from './Marketplace';

class MarketplaceSell extends Component{
    render() {
        return(
            <View style = {styles.container}>
                <Text>Marketplace Home</Text>
                <Text>Sell</Text>
                <Text>Categories</Text>
                <Text>Search</Text>
                <Text>Your Items</Text>
                <Text>Sell Something on MarketPlace</Text>
                <TextInput style = {styles.input}
                           placeholder = 'What are you selling?'>
                </TextInput>
                <TextInput style = {styles.input}
                           placeholder = 'Add Prrice'>
                </TextInput>
                <TextInput style = {styles.input}
                           placeholder = 'Location'>
                </TextInput>
                <TextInput style = {styles.input}
                           placeholder = 'Select a category'>
                </TextInput>
                <TextInput style = {styles.input}
                           placeholder = 'Describe your item'>
                </TextInput>
                <Text>Some image here</Text>
                <TouchableOpacity
                    style = {styles.submitButton}
                >
                    <Text style = {styles.submitButtonText}>Post</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default MarketplaceSell


const styles = StyleSheet.create({


    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1

    },
    submitButtonText:{
        color: 'white'
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    }
})
