import React, { Component } from 'react';
import {FlatList, StyleSheet,Text,Image,WebView,Dimensions} from 'react-native';
import RadioForm, {RadioButton, RadioButtonLabel} from 'react-native-simple-radio-button';
import {MatchFields} from "./matchfields";
import {AppRegistry} from 'react-native';
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
                      />

                  </View>
                );
              }
              else if (item.type === 'image') {
                return (
                  <Image
                    style={{ flex: 1, height: 300, width: 200, alignSelf: 'center' }}
                    source={{ uri: item.body }}
                  ></Image>
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
