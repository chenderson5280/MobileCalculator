import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";

class Calc extends Component {
    constructor() {
    super();
    this.state = {
        inputText: "",
    };
    this.validKeys = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "+",
        "-",
        "/",
        "*",
        "=",  
    ];
}

    handleInput(text) {
        console.log(text);
        this.setState({
        inputText: text,
        });
    }

    render() {
        return (
        <SafeAreaView style={styles.container}>
            <TextInput
            onChangeText={this.handleInput.bind(this)}
            value={this.state.inputText}
            style={styles.input}
            />
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(161,48,52)",
    },
    input: {
        height: 150,
        width: "100%",
        backgroundColor: "rgb(241,235,228)",
        color: "black",
        fontSize: 52,
        textAlign: "right",
    },
    });

export default Calc;
