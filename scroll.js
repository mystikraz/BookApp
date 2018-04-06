import React, {Component} from 'react';
import {View,Dimensions,Image,Animated} from 'react-native';

const dim = Dimensions.get('window');

export default class Scroll extends Component{


    render(){
        return(
            <View style={{width:20, height:(dim.height-50),top:50,position:'absolute',alignSelf:'right'}}>
                <Image source={{uri:'https://png.pngtree.com/element_pic/17/08/10/d549dc357a1c4a27de673cd67a5c59f3.jpg'}} style={{height:(dim-50),alignSelf:'center'}}/>
                <Animated.Image source={{uri:'https://png.pngtree.com/element_pic/00/16/08/2857c2022b2add2.jpg'}} style={{position:'absolute', top: }}/>
                </View>
        );


    }


}