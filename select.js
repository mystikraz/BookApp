import React,{Component} from 'react';
import {View,Button,Text,Image,StyleSheet,Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
{/* props:
    1. question
    2.choices
    3. correct answer position

*/}


export default class Select extends Component{

    state={answer:'',
            disable:false}

    render(){
        return(
            <View>
                <View style={styles.choices}>
                    {this.props.choices.map((item,index)=>{
                        return(
                            <View style={{flex:1,justifyContent:'space-between'}}>
                            <Button style={()=>{
                                if(this.state.answer==item)
                                return styles.correct;
                                else
                                return styles.normal;}}
                            title={this.props.choices[index]}
                            onPress={()=>{
                                if(this.props.answer==item)
                                {
                                this.setState({
                                    answer:item,
                                    
                                })
                                }
                            }} 
                            pointerEvents={this.state.disable}
                            color={item==this.state.answer?'#00ff00':'#3366ff'}>
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
    container:{
            padding:10,
            flex:1,
            background:'#fff'
    },

    question:{
        flex:1,
        flexDirection:'row',
        fontSize:20,
        fontColor:'#000',
        marginBottom:25,
        fontWeight:'bold'
        
    },

    text:{
        fontSize:20,

    },

    choices:{
        flex:1,
        flexDirection:'column',
        width:width,
        paddingBottom:50
        
        
        
    },
    normal:{
        flex:1,
        background:'#FFF',
        fontColor:'#000',
        padding:5,
        borderWidth:1,
        borderColor:'#000',
        
        

        
    },

    correct:{
        flex:1,
        background:'#9FF',
        fontColor:'#FFF',
        fontSize:30,
      
        
    }


});