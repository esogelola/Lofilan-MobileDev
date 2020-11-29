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

class MarketPlaceViewItem extends Component{
    render() {
        return(
            <View style = {styles.container}>
                <Text>Marketplace Home</Text>
                <Text>Sell</Text>
                <Text>Categories</Text>
                <Text>Search</Text>
                <Text>Your Items</Text>
                <Text>Item image here</Text>
                <Text>Item Description</Text>
                <Text>Lorem ipsum dolor sit amet, an oporteat periculis signiferumque cum. Pro et theophrastus signiferumque, ne usu veritus volumus percipit, etiam vidisse debitis sea et. Eu sit decore euripidis, eu sit fugit mucius placerat. Qui ex nisl maiorum, imperdiet incorrupte ius eu. No eum vero quaestio, pro cu augue doctus. Vel aliquam fabulas et. Eu sed aeque tamquam, id insolens facilisis repudiandae sed, explicari delicatissimi id qui.</Text>
                <TouchableOpacity
                    style = {styles.submitButton}
                    >
                    <Text style = {styles.submitButtonText}>Make Offer</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.submitButton}
                >
                    <Text style = {styles.submitButtonText}>Message Seller</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default MarketPlaceViewItem


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
