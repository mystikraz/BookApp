import React, { Component } from "react";
import { View, Animated, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Button, FlatList, AsyncStorage } from "react-native";
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
https://png.pngtree.com/element_pic/17/09/16/6ba96ffc82c13a9c4271233ab23e9afe.jpg
        */
    constructor(props) {
        super(props);
        this.correctAnimation = this.correctAnimation.bind(this);
        this.incorrectAnimation = this.incorrectAnimation.bind(this);
    }

    state = {
        // cola1Selected: false,
        // colb1Selected: false,
        currentlySelectedAVal: '',
        currentlySelectedBVal: '',
        currentlySelectedA: '',
        currentlySelectedB: '',
        cola1: false,
        cola2: false,
        cola3: false,
        cola4: false,
        cola5: false,
        colb1: false,
        colb2: false,
        colb3: false,
        colb4: false,
        colb5: false,
        s: 'Correctly Matched',
        anim: new Animated.Value(-1),
        colanames: ['cola1', 'cola2', 'cola3', 'cola4'],
        colbnames: ['colb1', 'colb2', 'colb3', 'colb4']



    }


    componentWillMount() {
        this.setState({
            isSelectedA: '',
            isSelectedB: '',
        });

    }

    correctAnimation(e) {

        Animated.timing(
            this.state.anim,
            {
                toValue: 1,
                duration: 100
            }
        ).start(() => {
            Animated.timing(
                this.state.anim,
                {
                    toValue: -1,
                    duration: 100
                }
            ).start();

        });

    }

    incorrectAnimation(e) {
        Animated.timing(
            this.state.anim,
            {
                toValue: 1,
                duration: 100
            }
        ).start(
            () => {
                Animated.timing(
                    this.state.anim,
                    {
                        toValue: -1,
                        duration: 100
                    }
                ).start();
            }
            );

    }


    render() {

        if ((this.state.cola1 &&
            this.state.cola2 &&
            this.state.cola3 &&
            this.state.cola4 &&
            this.state.colb1 &&
            this.state.colb2 &&
            this.state.colb3 &&
            this.state.colb4)) {
            return (
                <View style={{ flex: 1, fontFamily: 'Berkshire Swash' }}>

                    <Image style={{position:'absolute',top:20}} source={{uri:'https://png.pngtree.com/element_pic/17/09/16/6ba96ffc82c13a9c4271233ab23e9afe.jpg'}}/>
                    <View style={styles.choices}>
                        <View style={{ flex: 1, flexDirection: 'column', width: width / 2, height: 300 }}>
                            {this.props.cola.map((elem, index) => {
                                return (
                                    <TouchableOpacity
                                        style={styles.green}
                                        pointerEvents={ 'none'}
                                        disabled={true}
                                    >
                                        <Text style={ styles.green}
                                        >
                                            {elem}
                                            {/* {this.state.s} */}
                                        </Text>

                                    </TouchableOpacity>
                                );
                            })}

                        </View>

                        <View style={{ flex: 1, flexDirection: 'column', color: '#000000', width: width / 2, height: 300, }}>

                            {this.props.colb.map((elem, index) => {
                                return (
                                    <TouchableOpacity
                                        style={styles.green}
                                        pointerEvents={ 'none'}
                                        disabled={false}
                                    >
                                        <Text style={ styles.green }
                                        >
                                            {elem}
                                            {/* {this.state.s} */}
                                        </Text>

                                    </TouchableOpacity>
                                );
                            })}

                        </View>
                    </View>
                    </View>
                    );

        } else {
            return (
                <View style={{ flex: 1, fontFamily: 'Berkshire Swash' }}>


                        <View style={styles.choices}>
                            <View style={{ flex: 1, flexDirection: 'column', width: width / 2, height: 300 }}>
                                {this.props.cola.map((elem, index) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.setState({ currentlySelectedA: this.state.colanames[index], currentlySelectedAVal: elem });
                                                this.props.answer.forEach(function (element) {
                                                    if (element[0] === (this.state.currentlySelectedAVal) && element[1] === (this.state.currentlySelectedBVal)) {
                                                        var a = {};
                                                        {/* a[this.state.currentlySelectedA] = true;
                                            a[this.state.currentlySelectedB] = true; */}
                                                        this.setState({ [this.state.currentlySelectedA]: true });
                                                        this.setState({ [this.state.currentlySelectedB]: true });
                                                    }
                                                }, this);

                                            }}
                                            style={this.state.colanames[index] === (this.state.currentlySelectedA) ? styles.green : styles.normal}
                                            pointerEvents={this.state[this.state.colanames[index]] ? 'none' : 'auto'}
                                            disabled={this.state[this.state.colanames[index]]}
                                        >
                                            <Text style={this.state[this.state.colanames[index]] ? styles.green : styles.normal}
                                            >
                                                {elem}
                                                {/* {this.state.s} */}
                                            </Text>

                                        </TouchableOpacity>
                                    );
                                })}

                            </View>

                            <View style={{ flex: 1, flexDirection: 'column', color: '#000000', width: width / 2, height: 300, }}>

                                {this.props.colb.map((elem, index) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.setState({ currentlySelectedB: this.state.colbnames[index], currentlySelectedBVal: elem });
                                                this.props.answer.forEach(function (element) {
                                                    if (element[0] === (this.state.currentlySelectedAVal) && element[1] === (this.state.currentlySelectedBVal)) {
                                                        var a = {};
                                                        {/* a[this.state.currentlySelectedA] = true;
                                            a[this.state.currentlySelectedB] = true; */}
                                                        this.setState({ [this.state.currentlySelectedA]: true });
                                                        this.setState({ [this.state.currentlySelectedB]: true });
                                                    }
                                                }, this);

                                            }}
                                            style={this.state.colbnames[index] === (this.state.currentlySelectedB) ? styles.green : styles.normal}
                                            pointerEvents={this.state[this.state.colbnames[index]] ? 'none' : 'auto'}
                                            disabled={this.state[this.state.colbnames[index]]}
                                        >
                                            <Text style={this.state[this.state.colbnames[index]] ? styles.green : styles.normal}
                                            >
                                                {elem}
                                                {/* {this.state.s} */}
                                            </Text>

                                        </TouchableOpacity>
                                    );
                                })}

                            </View>
                        </View>


                    </View>


                    );
        }


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
            color: '#FFFFFF',
            fontSize: 20,
            margin: 7
        },
        normal: {
                        color: '#000000',
            fontSize: 20,
            margin: 7,


        },
        active: {
                        width: 25,
            height: 25,

        },
        hidden: {
                        width: 0,
            height: 0
        },
        yellow: {
                        backgroundColor: '#FFFF00',
            fontSize: 20,
            color: '#000000',
            margin: 7,

        }

    }
);