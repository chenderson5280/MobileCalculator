import React, {Component} from 'react';
import {View, Text, TextInput } from 'react-native';

class Calc extends Component {
    render() {
        return(
            <View  style={{flex:1, backgroundColor:'red'}}>
                <TextInput style={{
                    height: 150, 
                    width: 100+"%", 
                    backgroundColor: 'white'
                    }} 
                    />
            </View>
        );
    }
}

export default Calc;

  