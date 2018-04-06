import React, { Component } from "react";
import { View,Animated, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Button, FlatList, AsyncStorage } from "react-native";
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
        constructor(props)
        {
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
        anim:new Animated.Value(-1)



    }


    componentWillMount() {
        this.setState({
            isSelectedA: '',
            isSelectedB: '',
        });

    }

    correctAnimation(e)
    {

        Animated.timing(
            this.state.anim,
            {
                toValue:1,
                duration:100
            }
        ).start(()=>{
            Animated.timing(
                this.state.anim,
                {
                    toValue:-1,
                    duration:100
                }
            ).start();

        });

    }

    incorrectAnimation(e)
    {
     Animated.timing(
         this.state.anim,
         {
             toValue:1,
             duration:100
         }
     ).start(
         ()=>{
             Animated.timing(
                 this.state.anim,
                 {
                     toValue:-1,
                     duration:100
                 }
             ).start();
         }
     );

    }


    render() {

        if ((this.state.cola1 ||
            this.state.cola2) &&
            (this.state.cola3 ||
            this.state.cola4) &&
            (this.state.colb1 ||
            this.state.colb2) &&
            (this.state.colb3 ||
            this.state.colb4)) {
            return (
                <View style={{ width: 100, height: 300,opacity:0.7,alignSelf:'center' }}>
                    <Image source={{ uri: 'https://png.pngtree.com/element_pic/17/09/16/6ba96ffc82c13a9c4271233ab23e9afe.jpg' }} style={{ width: 200, height: 200 }} />
                    {/* <Text style={{ fontSize: 40 }} >
                        {this.state.s}
                            </Text> */}
                </View>
            );

        } else {
            return (
                <View style={{ flex: 1 }}>

                    {/* <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 20 }}> {this.props.question}</Text>

                    </View> */}
                    <View style={styles.choices}>
                        <View style={{ flex: 1, flexDirection: 'column', width: width / 2, height: 300 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ currentlySelectedA: 'cola1', currentlySelectedAVal: this.props.cola[0] });
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
                                style={('cola1') === (this.state.currentlySelectedA) ? styles.green : styles.normal}
                                pointerEvents={this.state.cola1 ? 'none' : 'auto'}
                                disabled={this.state.cola1}
                            >
                                <Text style={this.state.cola1 ? styles.green : styles.normal}
                                >
                                    {this.props.cola[0]}
                                    {/* {this.state.s} */}
                                </Text>
                                {/* {/* <Image source={{uri:'https://png.pngtree.com/element_pic/17/09/16/6ba96ffc82c13a9c4271233ab23e9afe.jpg'}} 
                            style={this.state.cola1?styles.active:styles.passive}/> */}

                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ currentlySelectedA: 'cola2', currentlySelectedAVal: this.props.cola[1] })
                                    this.props.answer.forEach(function (element) {
                                        if (element[0] === (this.state.currentlySelectedAVal) && element[1] === (this.state.currentlySelectedBVal)) {
                                            var a = {};
                                            a[this.state.currentlySelectedA] = true;
                                            a[this.state.currentlySelectedB] = true;
                                            {/* this.setState(a); */ }
                                            this.setState({ [this.state.currentlySelectedA]: true });

                                            this.setState({ [this.state.currentlySelectedB]: true });
                                        }
                                    }, this);


                                }}
                                style={('cola2') === (this.state.currentlySelectedA) ? styles.green : styles.normal}
                                pointerEvents={!this.state.cola2 ? 'none' : 'auto'}
                                disabled={this.state.cola2}
                            >
                                <Text style={this.state.cola2 ? styles.green : styles.normal}
                                >
                                    {this.props.cola[1]}
                                </Text>
                                {/* <Image source={{uri:'https://png.pngtree.com/element_pic/17/09/16/6ba96ffc82c13a9c4271233ab23e9afe.jpg'}}
                                style={this.state.cola2?styles.active:styles.hidden}/> */}


                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ currentlySelectedA: 'cola3', currentlySelectedAVal: this.props.cola[2] });

                                    this.props.answer.forEach(function (element) {
                                        if (element[0] === (this.state.currentlySelectedAVal) && element[1] === (this.state.currentlySelectedBVal)) {
                                            var a = {};
                                            a[this.state.currentlySelectedA] = true;
                                            a[this.state.currentlySelectedB] = true;
                                            {/* this.setState(a); */ }
                                            this.setState({ [this.state.currentlySelectedA]: true });

                                            this.setState({ [this.state.currentlySelectedB]: true });
                                        }
                                    }, this);

                                }}
                                style={('cola3') === (this.state.currentlySelectedA) ? styles.green : styles.normal}
                                pointerEvents={this.state.cola3 ? 'none' : 'auto'}
                                disabled={this.state.cola3}
                            >
                                <Text style={this.state.cola3 ? styles.green : styles.normal}
                                >
                                    {this.props.cola[2]}
                                </Text>
                                {/* <Image source={{uri:'https://png.pngtree.com/element_pic/17/09/16/6ba96ffc82c13a9c4271233ab23e9afe.jpg'}}
                                style={this.state.cola3?styles.active:styles.hidden}/> */}

                            </TouchableOpacity>

                            {/* column 1 4th element */}

                            <TouchableOpacity
                                onPress={() => {

                                    this.setState({ currentlySelectedA: 'cola4', currentlySelectedAVal: this.props.cola[3] });

                                    this.props.answer.forEach(function (element) {
                                        if (element[0] === (this.state.currentlySelectedAVal) && element[1] === (this.state.currentlySelectedBVal)) {
                                            var a = {};
                                            a[this.state.currentlySelectedA] = true;
                                            a[this.state.currentlySelectedB] = true;
                                            {/* this.setState(a); */ }
                                            this.setState({ [this.state.currentlySelectedA]: true });

                                            this.setState({ [this.state.currentlySelectedB]: true });
                                        }
                                    }, this);
                                }}
                                style={('cola4') === (this.state.currentlySelectedA) ? styles.green : styles.normal}
                                pointerEvents={!this.state.cola4 ? 'none' : 'auto'}
                                disabled={this.state.cola4}
                            >
                                <Text style={this.state.cola4 ? styles.green : styles.normal}
                                >
                                    {this.props.cola[3]}
                                </Text>

                                {/* <Image source={{uri:'https://png.pngtree.com/element_pic/17/09/16/6ba96ffc82c13a9c4271233ab23e9afe.jpg'}}
                                style={this.state.cola4?styles.active:styles.hidden}/> */}
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', color: '#000000', width: width / 2, height: 300,  }}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ currentlySelectedB: 'colb1', currentlySelectedBVal: this.props.colb[0] });

                                    this.props.answer.forEach(function (element) {
                                        if (element[0] === (this.state.currentlySelectedAVal) && element[1] === (this.state.currentlySelectedBVal)) {
                                            var a = {};
                                            a[this.state.currentlySelectedA] = true;
                                            a[this.state.currentlySelectedB] = true;
                                            {/* this.setState(a); */ }
                                            this.setState({ [this.state.currentlySelectedA]: true });

                                            this.setState({ [this.state.currentlySelectedB]: true });
                                        }
                                    }, this);

                                }}
                                style={('colb1') === (this.state.currentlySelectedB) ? styles.green : styles.normal}
                                pointerEvents={this.state.colb1 ? 'none' : 'auto'}
                                disabled={this.state.colb1}
                            >
                                <Text style={this.state.colb1 ? styles.green : styles.normal}
                                >
                                    {this.props.colb[0]}
                                </Text>
                                {/* <Image source={{uri:'https://png.pngtree.com/element_pic/17/09/16/6ba96ffc82c13a9c4271233ab23e9afe.jpg'}}
                              style={this.state.colb1?styles.active:styles.passive}/> */}



                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ currentlySelectedB: 'colb2', currentlySelectedBVal: this.props.colb[1] });

                                    this.props.answer.forEach(function (element) {
                                        if (element[0] === (this.state.currentlySelectedAVal) && element[1] === (this.state.currentlySelectedBVal)) {
                                            var a = {};
                                            a[this.state.currentlySelectedA] = true;
                                            a[this.state.currentlySelectedB] = true;
                                            {/* this.setState(a); */ }
                                            this.setState({ [this.state.currentlySelectedA]: true });

                                            this.setState({ [this.state.currentlySelectedB]: true });
                                        }
                                    }, this);

                                }}
                                style={('colb2') === (this.state.currentlySelectedB) ? styles.green : styles.normal}
                                pointerEvents={this.state.colb2 ? 'none' : 'auto'}
                                disabled={this.state.colb2}
                            >
                                <Text style={this.state.colb2 ? styles.green : styles.normal}
                                >
                                    {this.props.colb[1]}
                                </Text>
                                {/* <Image source={{uri:'https://png.pngtree.com/element_pic/17/09/16/6ba96ffc82c13a9c4271233ab23e9afe.jpg'}}
                            style={this.state.colb2?styles.active:styles.passive}/> */}


                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {

                                    this.setState({ currentlySelectedB: 'colb3', currentlySelectedBVal: this.props.colb[2] });



                                    this.props.answer.forEach(function (element) {
                                        if (element[0] === (this.state.currentlySelectedAVal) && element[1] === (this.state.currentlySelectedBVal)) {
                                            var a = {};
                                            a[this.state.currentlySelectedA] = true;
                                            a[this.state.currentlySelectedB] = true;
                                            {/* this.setState(a); */ }
                                            this.setState({ [this.state.currentlySelectedA]: true });

                                            this.setState({ [this.state.currentlySelectedB]: true });
                                        }
                                    }, this);
                                }}
                                style={('colb3') === (this.state.currentlySelectedB) ? styles.green : styles.normal}
                                pointerEvents={this.state.colb3 ? 'none' : 'auto'}
                                disabled={this.state.colb3}
                            >
                                <Text style={this.state.colb3 ? styles.green : styles.normal}
                                >
                                    {this.props.colb[2]}
                                </Text>
                               


                            </TouchableOpacity>

                            {/* column 1 4th element */}

                            <TouchableOpacity
                                onPress={() => {

                                    this.setState({ currentlySelectedB: 'colb4', currentlySelectedBVal: this.props.colb[3] });
                                    this.props.answer.forEach(function (element) {
                                        if (element[0] === (this.state.currentlySelectedAVal) && element[1] === (this.state.currentlySelectedBVal)) {
                                            var a = {};
                                            a[this.state.currentlySelectedA] = true;
                                            a[this.state.currentlySelectedB] = true;

                                            {/* this.setState(a) */ }
                                            this.setState({ [this.state.currentlySelectedA]: true });

                                            this.setState({ [this.state.currentlySelectedB]: true });
                                        }
                                    }, this);
                                }}
                                style={('colb4') === (this.state.currentlySelectedB) ? styles.green : styles.normal}
                                pointerEvents={this.state.colb4 ? 'none' : 'auto'}
                                disabled={this.state.colb4}
                            >
                                <Text style={this.state.colb4 ? styles.green : styles.normal}
                                >
                                    {this.props.colb[3]}
                                </Text>
                                

                            </TouchableOpacity>
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