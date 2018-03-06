import React,{Component} from 'react';
import {View,Button,Text,Image,StyleSheet} from 'react-native';

{/* props:
    1. question
    2.choices
    3. correct answer position

*/}


export default class Select extends Component{


    render(){
        return(
            <View>
                <View style={styles.question}>
                    <Text style={styles.text}>
                        {this.props.question}
                        </Text>
                    </View>
                <View style={styles.choices}>
                    {this.props.choices.map((item,index)=>{
                        return(
                            <Button style={this.props.answer==index?styles.normal:styles.correct}
                            title={this.props.choices[index]}>
                                {this.props.choices[index]}
                            </Button>
                        );


                    })}
                    </View>
                </View>
        );


    }
}


const styles = StyleSheet.create({
    container:{
            padding:10,
            flex:1
            


    },

    question:{
        flex:1,
        flexDirection:'row',
        fontSize:20,
    },
    text:{
        fontSize:20,

    },

    choices:{
        flex:1,
        flexDirection:'row',
        margin:5,
        padding:2,

    },
    normal:{
        background:'#FFF',
        fontColor:'#000',
        fontSize:15
    },

    correct:{
        background:'#9FF',
        fontColor:'#FFF',
        fontSize:15
    }


});