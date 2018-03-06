import React, { Component } from 'react';
import {
  View,
  Text,

} from 'react-native';
import QuizFlatList from "./quizflatlist";

export default class Quiz extends Component{

    state={
        data:[
            {'type':'pick'},
            {'type':'select'},
            {'type':'audio'}
        ]
    };


    render(){
        return (
            <View style={{flex:1}}>
                {/* <View style={{flex:1}}>
                    <Text style={{fontSize:40}}>This is Quiz Page</Text>
                </View> */}
                <QuizFlatList
                data={this.state.data}
                />

                </View>

        );


    };


}
