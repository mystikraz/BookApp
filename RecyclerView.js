import React, { Component } from "react";
import { View, Text, Dimensions,Image,WebView } from "react-native";
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import YouTube from 'react-native-youtube';



const ViewTypes = {
    TEXT: 0,
   IMAGE: 1,
    VIDEO: 2
};
 
let containerCount = 0;
 
class CellContainer extends React.Component {
    constructor(args) {
        super(args);
        this._containerId = containerCount++;
    }
    render() {
        return <View {...this.props}>{this.props.children}<Text></Text></View>;
    }
}
 
/***
 * To test out just copy this component and render in you root component
 */
export default class RecycleTestComponent extends React.Component {
    constructor(args) {
        super(args);
        state={
            isReady:true
        };
        this.setState(state);

 
        let { width } = Dimensions.get("window");
 
        //Create the data provider and provide method which takes in two rows of data and return if those two are different or not.
        //THIS IS VERY IMPORTANT, FORGET PERFORMANCE IF THIS IS MESSED UP
        let dataProvider = new DataProvider((r1, r2) => {
            return r1 !== r2;
        });
 
        //Create the layout provider
        //First method: Given an index return the type of item e.g ListItemType1, ListItemType2 in case you have variety of items in your list/grid
        //Second: Given a type and object set the exact height and width for that type on given object, if you're using non deterministic rendering provide close estimates
        //If you need data based check you can access your data provider here
        //You'll need data in most cases, we don't provide it by default to enable things like data virtualization in the future
        //NOTE: For complex lists LayoutProvider will also be complex it would then make sense to move it to a different file
        this._layoutProvider = new LayoutProvider(
            index => {
                // if (index % 3 === 0) {
                //     return ViewTypes.FULL;
                // } else if (index % 3 === 1) {
                //     return ViewTypes.HALF_LEFT;
                // } else {
                //     return ViewTypes.HALF_RIGHT;
                // }
                if(this.props.dataArray[index].type=="image")
                {
                    return ViewTypes.IMAGE;
                }else if(this.props.dataArray[index].type=="text")
                {
                    return ViewTypes.TEXT;
                }else(this.props.dataArray[index].type=="video")
                {
                    return ViewTypes.VIDEO;
                }
                

            },
            (type, dim) => {
                switch (type) {
                    case ViewTypes.TEXT:
                        dim.width = width;
                        dim.height = Dimensions.get('window').height;
                        break;
                    case ViewTypes.IMAGE:
                        dim.width = width;
                        dim.height = 240;
                        break;
                    case ViewTypes.VIDEO:
                        dim.width = width;
                        dim.height = 370;
                        break;
                    default:
                        dim.width = 0;
                        dim.height = 0;
                }
            }
        );
 
        this._rowRenderer = this._rowRenderer.bind(this);
 
        //Since component should always render once data has changed, make data provider part of the state
        this.state = {
            dataProvider: dataProvider.cloneWithRows(this.props.dataArray)
        };
    }
 
    _generateArray(n) {
       
        return n;
    }
 
    //Given type and data return the view component
    _rowRenderer(type, data) {
        //You can return any view here, CellContainer has no special significance
        switch (type) {
            case ViewTypes.TEXT:
                return (
                   
                        <Text style={{flex:5,fontSize:20,flexWrap:'wrap',}}>{data.body}</Text>
                   
                );
            case ViewTypes.IMAGE:
                return (
                                           <Image
                        style={{flex:1,height:300,width:200,alignSelf:'center'}}
                        source={{uri:data.body}}
                        ></Image>
                   
                );
            case ViewTypes.VIDEO:
                return (
                   
//                         <YouTube
//                         apiKey='AIzaSyCjg7CVf6P7JlJ_I5Y584u0Lt42nOskB1c'
//                         videoId={data.body}   // The YouTube video ID
//                         play={true}             // control playback of video with true/false
//                         fullscreen={false}       // control whether the video should play in fullscreen or inline
//                         loop={false}             // control whether the video should loop when ended
//                         controls={1}
//                         onReady={e => this.setState({ isReady: true })}
//                         onChangeState={e => this.setState({ status: e.state })}
//                         onChangeQuality={e => this.setState({ quality: e.quality })}
//                         onError={e => this.setState({ error: e.error })}

//                         style={{ alignSelf: 'stretch',height:350,width:400 }}
// />
<WebView
        source={{html:'<iframe width="480" height="270" src="https://www.youtube.com/embed/BhfHSuUKOSg" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>'}}
        style={{marginTop: 20,flex:1,flexWrap:'wrap'}}
      />
                   
                );
            default:
                return null;
        }
    }
 
    render() {
        if(this.state.isReady)
        {
        return <RecyclerListView
         onEndReached={{}}

         layoutProvider={this._layoutProvider} dataProvider={this.state.dataProvider} rowRenderer={this._rowRenderer} />;
    }
    else{
        return <Text style={{fontSize:20,flex:1}}>End Reached</Text>
    }
}
}
const styles = {
    container: {
        justifyContent: "space-around",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#F5FCFF",
        flexWrap:'wrap'
       
    },
    containerGridLeft: {
        justifyContent: "space-around",
        alignItems: "center",
        flex: 1,
        flexWrap:'wrap',
        marginLeft:5,
        marginRight:5,
        fontSize:20,
        backgroundColor: "#F5FCFF"
    },
    containerGridRight: {
        justifyContent: "space-around",
        alignItems: "center",
        flex: 1,
        flexWrap:'wrap',
        backgroundColor: "#F5FCFF"
    }
};


// this.setState({dataProvider:[...this.state.dataProvider,[
//     {'type':'heading','body':'Chapter 2'},
//     {'type':'text','body':'Lorem ipsum dolor sit amet, nisl porta sem dolor non, tortor ridiculus egestas sit elementum auctor, nibh quam morbi enim a. Magna mi lobortis sit sociosqu non porta. Porta sit lacinia. Sit placerat. Et montes hymenaeos est donec est.Vitae vitae aliquet libero, mauris etiam dui turpis, egestas ut, maecenas magna, aptent vehicula convallis non. In non, lectus lorem, at fringilla cursus fusce aliquam id, nonummy fringilla et ac volutpat, mauris risus massa congue dignissim sit pellentesque. Lorem amet nec ultrices pretium, facilisis viverra scelerisque at, fames vestibulum leo, adipiscing egestas est eleifend. Potenti adipiscing, vestibulum fringilla eu volutpat, rutrum lacus est cras nisl in. Egestas aliquam sed, aliquet sit ipsum est cras, aliquam tellus nisl sit, eget non maecenas mollis fringilla cras lacus, turpis neque molestie lacus pede. Dolor eu nunc diam mauris dui sit, interdum nec at arcu pede sapien morbi. Arcu laoreet convallis ultricies sed faucibus nullam, a adipiscing faucibus per pede molestie, erat non. Fusce quis imperdiet, ac cursus, vivamus recusandae maecenas diam, cras mollis vitae amet fermentum donec, dignissim nostra tincidunt turpis nulla fermentum. Varius id gravida wisi, at dignissimos lacus facilisis libero ligula, aptent feugiat praesent nibh feugiat mattis.'}
//     ,
// {'type':'image','body':'https://media.istockphoto.com/photos/elephant-isolated-picture-id486976303'},
// {'type':'text','body':'Non esse per at purus, maxime est, officia wisi auctor duis velit senectus. Laoreet turpis suspendisse, erat condimentum, natoque ultrices risus, felis at ultricies. Felis sem vivamus, ornare ac et vivamus consequat enim. Velit urna placerat pellentesque vel, eu euismod massa arcu, tortor donec feugiat. Mauris massa, donec rutrum luctus nunc, mauris nunc, a et sit vitae, quis eu natoque nec eu qui. Ullamcorper per turpis consequat eleifend velit, etiam lorem dui ut velit ut, sit cursus, aptent ut eros, vitae est. Dui justo wisi, luctus sed phasellus diam accumsan ea aenean.'},
// {'type':'video','body':'SNggmeilXDQ'},
// {'type':'text','body':'Pellentesque eleifend tristique quisque, ultrices fusce erat pulvinar, dictumst ac, ac proin. Feugiat elementum mi dictum sollicitudin egestas, diam sem ante odio eros suspendisse, posuere ornare vivamus commodo at. Consectetuer eget nullam lacus cras auctor. Non at, urna egestas montes vitae ridiculus egestas platea, massa libero. Magnis magna justo pede dignissim lorem, libero libero ipsum feugiat massa diam ac, morbi elit, nihil commodo sed massa volutpat fusce. In id, vivamus nullam mi erat massa non donec. Et neque. Lacinia quis at justo urna ante, tortor sollicitudin non massa laoreet pede non. Nam in nulla id sollicitudin sed, quis orci a, suspendisse ornare nulla pede, in aenean sit praesent tortor. Mi inceptos wisi felis sociis libero leo, voluptate dui ullamcorper lobortis mi, accumsan sodales. Amet eros id vulputate vitae dolor, vestibulum ac. Sed et amet iaculis aliquet bibendum, fermentum ligula eu tristique amet eget nonummy, sed nunc.'}

//  ]]})