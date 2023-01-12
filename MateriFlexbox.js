import React, { Component } from "react";
import { Text, View } from "react-native";


class MateriFlexbox extends Component{
    render(){
        return(
            <View>
            <Text>Materi Flex Box</Text>
            <View style={{ backgroundColor:'#ee5253', width:100, height:100}} ></View>
            <View style={{ backgroundColor: '#feca57', width:100, height:100}} ></View>
            <View style={{ backgroundColor: '#1dd1a1',width:100, height:100}} ></View>
            <View style={{ backgroundColor: '#5f27cd',width:100, height:100}} ></View>
            </View>
        ) 
    }
}

export default MateriFlexbox
