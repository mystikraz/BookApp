import React, { Component } from 'react';
import {View,FlatList, StyleSheet,Text,Image,WebView,Dimensions} from 'react-native';
import RadioForm, {RadioButton, RadioButtonLabel} from 'react-native-simple-radio-button';
import MatchFields from "./matchfields";
import {AppRegistry} from 'react-native';
import Select from './select';



const dim = Dimensions.get('window');
export default class FlastListComp extends React.Component{

    constructor(args){
        super(args);

    }


    render(){
        return (
            <FlatList
            style={{ flex: 1, flexWrap: 'wrap' }}
            data={this.props.data}

            renderItem={({ item }) => {
              if (item.type === 'pick') {
                return (
                  <View>
                      <MatchFields
                      cola={[
                        'peigon',
                        'hedgehog',
                        'peacock',
                        'elephant' 
                      ]}
                      colb={[
                        'largest mammal',
                        'Beautiful',
                        'sonic the ?',
                        'messenger',
                      ]}
                      question="Please Match The Following."
                      answer={[['peigon','messenger'],
                        ['hedgehog','sonic the ?'],
                        ['peacock','Beautiful'],
                        ['elephant','largest mammal']]}
                      />

                  </View>
                );
              }
              else if (item.type === 'select') {
                return (
                  <Select question={'What is the year Albert Einstein published his Special Theory of Relativity?'}
                          choices={['1990','1902','1905','1890']}
                          answer={2}/>
                );
              }
              else if (item.type === 'video') {
                return (
                  <WebView
                    source={{ html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/XpFD-kgQxnI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' }}
                    style={{ marginTop: 20, flex: 1, flexWrap: 'wrap', height: 500, width: dim.width }}
                  />
                );
              }
              else if(item.type==='title'){
                    return(
                        <Text 
                        style={{flex:1,fontSize:30,color:'#000000',paddingLeft:30}}>{item.body} </Text>
                    );
              }
              else {
                return (
                  <Text style={styles.welcome}> Somethings Wrong</Text>
                );
              }
            }}
          >

          </FlatList>

        );
    }


}
const styles =  StyleSheet.create( {
    list: {
        flexDirection: 'column',
    
        flex: 6,
    
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#000000'
      }
}); 
