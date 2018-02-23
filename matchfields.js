import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Button, FlatList } from "react-native";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from "react-native-simple-radio-button"

const width = Dimensions.get('window').width;

export default class MatchFields extends React.Component {
    /* 
    Props:
    # Question:

    #Answers Pair
    1. Text and RadioButton
    a1              b1
    a2              b2
    a3              b3

    2. Right answer pair (a1<-->b3)

    3. currently selected (a2<-->b6)

    4. Data Type of :

         {label: 'param1', value: 0 },
         {label: 'param2', value: 1 }




    5. Reference of each elements to see if to disable them
        {
            'pegion':true,

        }     
    */


    constructor(props) {
        super(props);
        this.onPressa = this.onPressa.bind(this);
        this.onPressb = this.onPressb.bind(this);
    }

    onPressa(i) {
        this.setState({
            value3Index: i
        });
    }

    onPressb(i) {

        this.setState({
            value3Index1: i
        });
    }

    state = {
        cola1Selected: false,
        colb1Selected: false,



    }


    componentWillMount() {
       this.setState({
           isSelectedA:'',
           isSelectedB:'',
       });

    }


    render() {

        return (
            <View style={{ flex: 1 }}>

                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20 }}> {this.props.question}</Text>
                </View>
                <View style={styles.choices}>
                    <View style={{ flex: 1, flexDirection: 'column', width: width / 2, height: 300, backgroundColor: '#A0642A' }}>
                        {this.props.cola.map((data) => <TouchableOpacity activeOpacity={this.state.isAone}
                            pointerEvents={() => {
                                var disable = false;
                                this.props.answer.foreach((a) => {

                                    if (a == [this.state.isSelectedA, this.state.isSelectedB]) {
                                        disable = true;
                                        

                                    }

                                });
                                return disable;
                            }}

                            onPress={() => {
                                this.setState({
                                    isSelectedA: data
                                });
                                this.props.answer.foreach((a) => {

                                    if (a == [this.state.isSelectedA, this.state.isSelectedB]) {
                                        disable = true;
                                        

                                    }})
                            }}
                            style={this.state.isSelectedA == data ? styles.green : styles.normal}>
                            <Text style={styles.normal}>{data.text}</Text></TouchableOpacity>)}
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', color: '#000000', width: width / 2, height: 300, backgroundColor: '#2A64A0' }}>
                        {this.props.colb.map((data) => <TouchableOpacity
                            pointerEvents={() => {
                                var disable = false;
                                this.props.answer.foreach((a) => {

                                    if (a == [this.state.isSelectedA, this.state.isSelectedB]) {
                                        disable = true;
                                        alert('true');
                                    }

                                });
                                return disable;
                            }}
                            onPress={() => {
                                var dis={};
                                dis[data]=true;

                                this.setState({
                                    isSelectedB: data,
                                    dis,
                                });
                                this.props.answer.foreach((a) => {

                                    if (a == [this.state.isSelectedA, this.state.isSelectedB]) {
                                        disable = true;
                                        alert('true');

                                    }})
                            }
                            }


                            style={this.state.isSelectedB == data ? styles.green : styles.normal}><Text
                                style={styles.normal}>{data.text}
                            </Text></TouchableOpacity>)}
                    </View>
                </View>


            </View>


        );


    }


}

const styles = StyleSheet.create(
    {
        choices: {
            flexDirection: 'row',
            flex: 1,
            width: Dimensions.get('window').width,
            fontSize: 20,

        },
        green: {
            backgroundColor: '#00AA00',
            color: '#FFFFFF'
        },
        normal: {
            color: '#000000',
            fontSize: 20,
            margin: 7

        }

    }
);