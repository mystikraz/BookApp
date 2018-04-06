import React, { Component } from 'react';
import { View, Button, Text, Image, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
{/* props:
    1. question
    2.choices
    3. correct answer position

*/}


export default class ImageQuiz extends Component {

    state = {
        answer: '',
        disable: false
    }

    render() {
        return (
            <View style={{ marginTop: 30,flex:1 }}>
                <View>
                    <Image source={{ uri: this.props.image }} style={{ flex: 1, height: 300, width: 200, alignSelf: 'center', marginBottom: 20 }} />

                </View>
                <View style={styles.choices}>
                    {this.props.choices.map((item, index) => {
                        return (
                            <View style={{flex:1,justifyContent:'space-between'}}>
                                <Button style={() => {
                                    if (this.state.answer == item)
                                        return styles.correct;
                                    else
                                        return styles.normal;
                                }}
                                    title={this.props.choices[index]}
                                    onPress={() => {
                                        if (this.props.answer == item) {
                                            this.setState({
                                                answer: item,

                                            })
                                        }
                                    }}
                                    pointerEvents={this.state.disable}
                                    color={item == this.state.answer ? '#00ff00' : '#3366ff'}>
                                    {this.props.choices[index]}
                                </Button>
                            </View>
                        );


                    })}
                </View>
            </View>
        );


    }
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        marginTop: 10,
        background: '#fff'
    },

    question: {
        flex: 1,
        flexDirection: 'column',
        fontSize: 20,
        fontColor: '#000',
        fontWeight: 'bold'
    },

    text: {
        fontSize: 20,

    },

    choices: {
        flex: 1,
        flexDirection: 'column',
        width: width,
        fontColor: '#000',
        justifyContent:'space-between',
        padding:30


    },
    normal: {
        
        background: '#FFF',
        fontColor: '#000',
        fontSize: 30,
        



    },

    correct: {
        background: '#9FF',
        fontColor: '#FFF',
        fontSize: 30,


    }


});