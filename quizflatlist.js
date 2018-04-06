import React, { Component } from 'react';
import {View,FlatList, StyleSheet,Text,Image,WebView,Dimensions} from 'react-native';
import RadioForm, {RadioButton, RadioButtonLabel} from 'react-native-simple-radio-button';
import MatchFields from "./matchFieldnew";
import {AppRegistry} from 'react-native';
import Select from './select';
import ImageQuiz from './image';
import {Card,CardContent,CardTitle} from 'react-native-card-view';




const dim = Dimensions.get('window');
export default class FlastListComp extends React.Component{

    constructor(args){
        super(args);

    }


    render(){
        return (
            <FlatList
            style={{ flex: 1,background:'#000088' }}
            data={this.props.data}

            renderItem={({ item }) => {
              if (item.type === 'pick') {
                return (

                  <Card style={{flex:1}}>
                    <CardTitle>
                      <Text style={styles.text}>
                        
                    Please Match The Following.
                      </Text>
                      </CardTitle>
                    <CardContent>

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
                      </CardContent>

                  </Card>
                );
              }
              else if (item.type === 'select') {
                return (
                  <Card>
                    <CardTitle>
                      <Text style={styles.text}>
                    What is the year Albert Einstein published his Special Theory of Relativity?
                      </Text>
                      </CardTitle>
                    <CardContent>
                  <Select question={'What is the year Albert Einstein published his Special Theory of Relativity?'}
                          choices={['1990','1902','1905','1890']}
                          answer={'1905'}/>
                          </CardContent>
                          </Card>
                );
              }
              else if (item.type === 'image') {
                return (
                  <Card style={{flex:1,minHeight:200}}>
                  <CardTitle>
                  <Text style={styles.text}>
                  What do you see in the Image?
                  
                      </Text>
                      </CardTitle>
                  <CardContent>
                  <ImageQuiz choices={['Elephant','Mouse','Chimp','ButterFly']}
                  answer={'ButterFly'}
                  question={'What do you see in the Image?'}
                  image={'https://images.pexels.com/photos/355401/pexels-photo-355401.jpeg'}/>
                </CardContent>
                </Card>
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
      },
      text:{
        fontSize:20,
        fontColor:'#000',
        fontWeight:'bold'
      }

}); 
