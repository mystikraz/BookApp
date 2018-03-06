/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  Button,
  FlatList,
  Image,
  WebView,
  Dimensions,
  ViewPagerAndroid,
  AppRegistry,
  NativeModules,

} from 'react-native';

import { StackNavigator } from "react-navigation";
import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';
import YouTube from 'react-native-youtube';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import RecycleTestComponent from './RecyclerView';
import FlatListComp from './FlatListComp'
import QuizFlatList from './quizflatlist';
import MatchFields from './matchfields';
import Quiz from './quiz';
const dim = Dimensions.get('window');


const main = 1;
const quiz = 2;

let reply = [
  {
    'type': 'text', 'body': 'Lorem ipsum dolor sit amet, nisl porta sem dolor non, tortor ridiculus egestas sit elementum auctor, nibh quam morbi enim a. Magna mi lobortis sit sociosqu non porta. Porta sit lacinia. Sit placerat. Et montes hymenaeos est donec est.Vitae vitae aliquet libero, mauris etiam dui turpis, egestas ut, maecenas magna, aptent vehicula convallis non. In non, lectus lorem, at fringilla cursus fusce aliquam id, nonummy fringilla et ac volutpat, mauris risus massa congue dignissim sit pellentesque. Lorem amet nec ultrices pretium, facilisis viverra scelerisque at, fames vestibulum leo, adipiscing egestas est eleifend. Potenti adipiscing, vestibulum fringilla eu volutpat, rutrum lacus est cras nisl in. Egestas aliquam sed, aliquet sit ipsum est cras, aliquam tellus nisl sit, eget non maecenas mollis fringilla cras lacus, turpis neque molestie lacus pede. Dolor eu nunc diam mauris dui sit, interdum nec at arcu pede sapien morbi. Arcu laoreet convallis ultricies sed faucibus nullam, a adipiscing faucibus per pede molestie, erat non. Fusce quis imperdiet, ac cursus, vivamus recusandae maecenas diam, cras mollis vitae amet fermentum donec, dignissim nostra tincidunt turpis nulla fermentum. Varius id gravida wisi, at dignissimos lacus facilisis libero ligula, aptent feugiat praesent nibh feugiat mattis.'
  },
  { 'type': 'image', 'body': 'https://media.istockphoto.com/photos/elephant-isolated-picture-id486976303' },
  { 'type': 'text', 'body': 'Non esse per at purus, maxime est, officia wisi auctor duis velit senectus. Laoreet turpis suspendisse, erat condimentum, natoque ultrices risus, felis at ultricies. Felis sem vivamus, ornare ac et vivamus consequat enim. Velit urna placerat pellentesque vel, eu euismod massa arcu, tortor donec feugiat. Mauris massa, donec rutrum luctus nunc, mauris nunc, a et sit vitae, quis eu natoque nec eu qui. Ullamcorper per turpis consequat eleifend velit, etiam lorem dui ut velit ut, sit cursus, aptent ut eros, vitae est. Dui justo wisi, luctus sed phasellus diam accumsan ea aenean.' },
  { 'type': 'video', 'body': 'SNggmeilXDQ' },
  { 'type': 'text', 'body': 'Pellentesque eleifend tristique quisque, ultrices fusce erat pulvinar, dictumst ac, ac proin. Feugiat elementum mi dictum sollicitudin egestas, diam sem ante odio eros suspendisse, posuere ornare vivamus commodo at. Consectetuer eget nullam lacus cras auctor. Non at, urna egestas montes vitae ridiculus egestas platea, massa libero. Magnis magna justo pede dignissim lorem, libero libero ipsum feugiat massa diam ac, morbi elit, nihil commodo sed massa volutpat fusce. In id, vivamus nullam mi erat massa non donec. Et neque. Lacinia quis at justo urna ante, tortor sollicitudin non massa laoreet pede non. Nam in nulla id sollicitudin sed, quis orci a, suspendisse ornare nulla pede, in aenean sit praesent tortor. Mi inceptos wisi felis sociis libero leo, voluptate dui ullamcorper lobortis mi, accumsan sodales. Amet eros id vulputate vitae dolor, vestibulum ac. Sed et amet iaculis aliquet bibendum, fermentum ligula eu tristique amet eget nonummy, sed nunc.' }
];

export default class App extends Component {


  constructor(props) {
    super(props);
    this._endReached = this._endReached.bind(this);
    this._renderDotIndicator = this._renderDotIndicator.bind(this);
    this._renderTitleIndicator = this._renderTitleIndicator.bind(this);

  }
  static navigationOptions = {
    header: { visible: false, }
  };


  state = {
    location: 'Kathmandu',
    grade: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'],
    chapter: ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4'],
    isReady: false,
    selected: false,
    gradeSelected: 'grade 1',
    chapterSelected: 'chapter 1',
    data: [
      [
        { 'type': 'title', 'body': 'Chapter 1' },
        {
          'type': 'text', 'body': 'Lorem ipsum dolor sit amet, nisl porta sem dolor non, tortor ridiculus egestas sit elementum auctor, nibh quam morbi enim a. Magna mi lobortis sit sociosqu non porta. Porta sit lacinia. Sit placerat. Et montes hymenaeos est donec est.Vitae vitae aliquet libero, mauris etiam dui turpis, egestas ut, maecenas magna, aptent vehicula convallis non. In non, lectus lorem, at fringilla cursus fusce aliquam id, nonummy fringilla et ac volutpat, mauris risus massa congue dignissim sit pellentesque. Lorem amet nec ultrices pretium, facilisis viverra scelerisque at, fames vestibulum leo, adipiscing egestas est eleifend. Potenti adipiscing, vestibulum fringilla eu volutpat, rutrum lacus est cras nisl in. Egestas aliquam sed, aliquet sit ipsum est cras, aliquam tellus nisl sit, eget non maecenas mollis fringilla cras lacus, turpis neque molestie lacus pede. Dolor eu nunc diam mauris dui sit, interdum nec at arcu pede sapien morbi. Arcu laoreet convallis ultricies sed faucibus nullam, a adipiscing faucibus per pede molestie, erat non. Fusce quis imperdiet, ac cursus, vivamus recusandae maecenas diam, cras mollis vitae amet fermentum donec, dignissim nostra tincidunt turpis nulla fermentum. Varius id gravida wisi, at dignissimos lacus facilisis libero ligula, aptent feugiat praesent nibh feugiat mattis.'
        },
        { 'type': 'image', 'body': 'https://media.istockphoto.com/photos/elephant-isolated-picture-id486976303' },
        { 'type': 'text', 'body': 'Non esse per at purus, maxime est, officia wisi auctor duis velit senectus. Laoreet turpis suspendisse, erat condimentum, natoque ultrices risus, felis at ultricies. Felis sem vivamus, ornare ac et vivamus consequat enim. Velit urna placerat pellentesque vel, eu euismod massa arcu, tortor donec feugiat. Mauris massa, donec rutrum luctus nunc, mauris nunc, a et sit vitae, quis eu natoque nec eu qui. Ullamcorper per turpis consequat eleifend velit, etiam lorem dui ut velit ut, sit cursus, aptent ut eros, vitae est. Dui justo wisi, luctus sed phasellus diam accumsan ea aenean.' },
        { 'type': 'video', 'body': 'https://www.youtube.com/watch?SNggmeilXDQ' },
        { 'type': 'text', 'body': 'Pellentesque eleifend tristique quisque, ultrices fusce erat pulvinar, dictumst ac, ac proin. Feugiat elementum mi dictum sollicitudin egestas, diam sem ante odio eros suspendisse, posuere ornare vivamus commodo at. Consectetuer eget nullam lacus cras auctor. Non at, urna egestas montes vitae ridiculus egestas platea, massa libero. Magnis magna justo pede dignissim lorem, libero libero ipsum feugiat massa diam ac, morbi elit, nihil commodo sed massa volutpat fusce. In id, vivamus nullam mi erat massa non donec. Et neque. Lacinia quis at justo urna ante, tortor sollicitudin non massa laoreet pede non. Nam in nulla id sollicitudin sed, quis orci a, suspendisse ornare nulla pede, in aenean sit praesent tortor. Mi inceptos wisi felis sociis libero leo, voluptate dui ullamcorper lobortis mi, accumsan sodales. Amet eros id vulputate vitae dolor, vestibulum ac. Sed et amet iaculis aliquet bibendum, fermentum ligula eu tristique amet eget nonummy, sed nunc.' }
      ],
      [
        { 'type': 'title', 'body': 'Chapter 2' },
        {
          'type': 'text', 'body': 'Lorem ipsum dolor sit amet, nisl porta sem dolor non, tortor ridiculus egestas sit elementum auctor, nibh quam morbi enim a. Magna mi lobortis sit sociosqu non porta. Porta sit lacinia. Sit placerat. Et montes hymenaeos est donec est.Vitae vitae aliquet libero, mauris etiam dui turpis, egestas ut, maecenas magna, aptent vehicula convallis non. In non, lectus lorem, at fringilla cursus fusce aliquam id, nonummy fringilla et ac volutpat, mauris risus massa congue dignissim sit pellentesque. Lorem amet nec ultrices pretium, facilisis viverra scelerisque at, fames vestibulum leo, adipiscing egestas est eleifend. Potenti adipiscing, vestibulum fringilla eu volutpat, rutrum lacus est cras nisl in. Egestas aliquam sed, aliquet sit ipsum est cras, aliquam tellus nisl sit, eget non maecenas mollis fringilla cras lacus, turpis neque molestie lacus pede. Dolor eu nunc diam mauris dui sit, interdum nec at arcu pede sapien morbi. Arcu laoreet convallis ultricies sed faucibus nullam, a adipiscing faucibus per pede molestie, erat non. Fusce quis imperdiet, ac cursus, vivamus recusandae maecenas diam, cras mollis vitae amet fermentum donec, dignissim nostra tincidunt turpis nulla fermentum. Varius id gravida wisi, at dignissimos lacus facilisis libero ligula, aptent feugiat praesent nibh feugiat mattis.'
        },
        { 'type': 'image', 'body': 'https://media.istockphoto.com/photos/isolated-honeybee-picture-id117307019' },
        { 'type': 'text', 'body': 'Non esse per at purus, maxime est, officia wisi auctor duis velit senectus. Laoreet turpis suspendisse, erat condimentum, natoque ultrices risus, felis at ultricies. Felis sem vivamus, ornare ac et vivamus consequat enim. Velit urna placerat pellentesque vel, eu euismod massa arcu, tortor donec feugiat. Mauris massa, donec rutrum luctus nunc, mauris nunc, a et sit vitae, quis eu natoque nec eu qui. Ullamcorper per turpis consequat eleifend velit, etiam lorem dui ut velit ut, sit cursus, aptent ut eros, vitae est. Dui justo wisi, luctus sed phasellus diam accumsan ea aenean.' },
        { 'type': 'video', 'body': 'https://www.youtube.com/watch?SNggmeilXDQ' },
        { 'type': 'text', 'body': 'Pellentesque eleifend tristique quisque, ultrices fusce erat pulvinar, dictumst ac, ac proin. Feugiat elementum mi dictum sollicitudin egestas, diam sem ante odio eros suspendisse, posuere ornare vivamus commodo at. Consectetuer eget nullam lacus cras auctor. Non at, urna egestas montes vitae ridiculus egestas platea, massa libero. Magnis magna justo pede dignissim lorem, libero libero ipsum feugiat massa diam ac, morbi elit, nihil commodo sed massa volutpat fusce. In id, vivamus nullam mi erat massa non donec. Et neque. Lacinia quis at justo urna ante, tortor sollicitudin non massa laoreet pede non. Nam in nulla id sollicitudin sed, quis orci a, suspendisse ornare nulla pede, in aenean sit praesent tortor. Mi inceptos wisi felis sociis libero leo, voluptate dui ullamcorper lobortis mi, accumsan sodales. Amet eros id vulputate vitae dolor, vestibulum ac. Sed et amet iaculis aliquet bibendum, fermentum ligula eu tristique amet eget nonummy, sed nunc.' }
      ],
      [
        { 'type': 'title', 'body': 'Chapter 3' },
        {
          'type': 'text', 'body': 'Lorem ipsum dolor sit amet, nisl porta sem dolor non, tortor ridiculus egestas sit elementum auctor, nibh quam morbi enim a. Magna mi lobortis sit sociosqu non porta. Porta sit lacinia. Sit placerat. Et montes hymenaeos est donec est.Vitae vitae aliquet libero, mauris etiam dui turpis, egestas ut, maecenas magna, aptent vehicula convallis non. In non, lectus lorem, at fringilla cursus fusce aliquam id, nonummy fringilla et ac volutpat, mauris risus massa congue dignissim sit pellentesque. Lorem amet nec ultrices pretium, facilisis viverra scelerisque at, fames vestibulum leo, adipiscing egestas est eleifend. Potenti adipiscing, vestibulum fringilla eu volutpat, rutrum lacus est cras nisl in. Egestas aliquam sed, aliquet sit ipsum est cras, aliquam tellus nisl sit, eget non maecenas mollis fringilla cras lacus, turpis neque molestie lacus pede. Dolor eu nunc diam mauris dui sit, interdum nec at arcu pede sapien morbi. Arcu laoreet convallis ultricies sed faucibus nullam, a adipiscing faucibus per pede molestie, erat non. Fusce quis imperdiet, ac cursus, vivamus recusandae maecenas diam, cras mollis vitae amet fermentum donec, dignissim nostra tincidunt turpis nulla fermentum. Varius id gravida wisi, at dignissimos lacus facilisis libero ligula, aptent feugiat praesent nibh feugiat mattis.'
        },
        { 'type': 'image', 'body': 'https://www.pets4homes.co.uk/images/articles/771/cat-lifespan-the-life-expectancy-of-cats-568e40723c336.jpg' },
        { 'type': 'text', 'body': 'Non esse per at purus, maxime est, officia wisi auctor duis velit senectus. Laoreet turpis suspendisse, erat condimentum, natoque ultrices risus, felis at ultricies. Felis sem vivamus, ornare ac et vivamus consequat enim. Velit urna placerat pellentesque vel, eu euismod massa arcu, tortor donec feugiat. Mauris massa, donec rutrum luctus nunc, mauris nunc, a et sit vitae, quis eu natoque nec eu qui. Ullamcorper per turpis consequat eleifend velit, etiam lorem dui ut velit ut, sit cursus, aptent ut eros, vitae est. Dui justo wisi, luctus sed phasellus diam accumsan ea aenean.' },
        { 'type': 'video', 'body': 'https://www.youtube.com/watch?SNggmeilXDQ' },
        { 'type': 'text', 'body': 'Pellentesque eleifend tristique quisque, ultrices fusce erat pulvinar, dictumst ac, ac proin. Feugiat elementum mi dictum sollicitudin egestas, diam sem ante odio eros suspendisse, posuere ornare vivamus commodo at. Consectetuer eget nullam lacus cras auctor. Non at, urna egestas montes vitae ridiculus egestas platea, massa libero. Magnis magna justo pede dignissim lorem, libero libero ipsum feugiat massa diam ac, morbi elit, nihil commodo sed massa volutpat fusce. In id, vivamus nullam mi erat massa non donec. Et neque. Lacinia quis at justo urna ante, tortor sollicitudin non massa laoreet pede non. Nam in nulla id sollicitudin sed, quis orci a, suspendisse ornare nulla pede, in aenean sit praesent tortor. Mi inceptos wisi felis sociis libero leo, voluptate dui ullamcorper lobortis mi, accumsan sodales. Amet eros id vulputate vitae dolor, vestibulum ac. Sed et amet iaculis aliquet bibendum, fermentum ligula eu tristique amet eget nonummy, sed nunc.' }
      ]
    ],
    whichScreen: main,
  };




  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={this.state.data.length} />;
  }
  _renderTitleIndicator() {
    return <PagerTitleIndicator titles={this.state.chapter} />;
  }

  componentDidMount() {

    //  return fetch('http://192.168.0.4:8000/1/chapters/').then(
    //   function(response){
    //      response.json().then(function(jsonData){
    //       this.setState({data:jsonData.grade});
    //       this.setState({isReady:true});
    //      });
    //   }
    // ).catch((error)=>{console.error(error);});

  }

  _endReached() {
    let newData = [
      {
        'type': 'text', 'body': 'Lorem ipsum dolor sit amet, nisl porta sem dolor non, tortor ridiculus egestas sit elementum auctor, nibh quam morbi enim a. Magna mi lobortis sit sociosqu non porta. Porta sit lacinia. Sit placerat. Et montes hymenaeos est donec est.Vitae vitae aliquet libero, mauris etiam dui turpis, egestas ut, maecenas magna, aptent vehicula convallis non. In non, lectus lorem, at fringilla cursus fusce aliquam id, nonummy fringilla et ac volutpat, mauris risus massa congue dignissim sit pellentesque. Lorem amet nec ultrices pretium, facilisis viverra scelerisque at, fames vestibulum leo, adipiscing egestas est eleifend. Potenti adipiscing, vestibulum fringilla eu volutpat, rutrum lacus est cras nisl in. Egestas aliquam sed, aliquet sit ipsum est cras, aliquam tellus nisl sit, eget non maecenas mollis fringilla cras lacus, turpis neque molestie lacus pede. Dolor eu nunc diam mauris dui sit, interdum nec at arcu pede sapien morbi. Arcu laoreet convallis ultricies sed faucibus nullam, a adipiscing faucibus per pede molestie, erat non. Fusce quis imperdiet, ac cursus, vivamus recusandae maecenas diam, cras mollis vitae amet fermentum donec, dignissim nostra tincidunt turpis nulla fermentum. Varius id gravida wisi, at dignissimos lacus facilisis libero ligula, aptent feugiat praesent nibh feugiat mattis.'
      },
      { 'type': 'image', 'body': 'https://media.istockphoto.com/photos/elephant-isolated-picture-id486976303' },
      { 'type': 'text', 'body': 'Non esse per at purus, maxime est, officia wisi auctor duis velit senectus. Laoreet turpis suspendisse, erat condimentum, natoque ultrices risus, felis at ultricies. Felis sem vivamus, ornare ac et vivamus consequat enim. Velit urna placerat pellentesque vel, eu euismod massa arcu, tortor donec feugiat. Mauris massa, donec rutrum luctus nunc, mauris nunc, a et sit vitae, quis eu natoque nec eu qui. Ullamcorper per turpis consequat eleifend velit, etiam lorem dui ut velit ut, sit cursus, aptent ut eros, vitae est. Dui justo wisi, luctus sed phasellus diam accumsan ea aenean.' },
      { 'type': 'video', 'body': 'https://www.youtube.com/watch?SNggmeilXDQ' },
      { 'type': 'text', 'body': 'Pellentesque eleifend tristique quisque, ultrices fusce erat pulvinar, dictumst ac, ac proin. Feugiat elementum mi dictum sollicitudin egestas, diam sem ante odio eros suspendisse, posuere ornare vivamus commodo at. Consectetuer eget nullam lacus cras auctor. Non at, urna egestas montes vitae ridiculus egestas platea, massa libero. Magnis magna justo pede dignissim lorem, libero libero ipsum feugiat massa diam ac, morbi elit, nihil commodo sed massa volutpat fusce. In id, vivamus nullam mi erat massa non donec. Et neque. Lacinia quis at justo urna ante, tortor sollicitudin non massa laoreet pede non. Nam in nulla id sollicitudin sed, quis orci a, suspendisse ornare nulla pede, in aenean sit praesent tortor. Mi inceptos wisi felis sociis libero leo, voluptate dui ullamcorper lobortis mi, accumsan sodales. Amet eros id vulputate vitae dolor, vestibulum ac. Sed et amet iaculis aliquet bibendum, fermentum ligula eu tristique amet eget nonummy, sed nunc.' }
    ];

    this.setState({ data: [...this.state.data, ...newData] });
  };


  render() {


    if (this.state.isReady) {
      if (this.state.whichScreen == main) {
        return (
          <View style={styles.main}>
            {/* <View style={styles.container}>
            <Picker
              selectedValue={this.state.grade || 'Grade'}
              onValueChange={(value) => this.setState({


              })}
              style={styles.picker}
              mode="dropdown">

              <Picker.Item value='chapter' label='chapter' />
              <Picker.Item value='chapter' label='chapter' />
            </Picker>
            <Picker enabled={!(this.state.grade == "none")}
              selectedValue={this.state.chapter || "Chapter"}
              onValueChange={(value) => this.setState({
                isReady: true,

              })}
              style={styles.picker}
              mode="dropdown">
              <Picker.Item value='chapter' label='chapter' />
              <Picker.Item value='chapter' label='chapter' />

            </Picker>



          </View> */}

            <View style={styles.list}>

               <IndicatorViewPager
              style={{ flex: 6, flexWrap: 'wrap' }}
              initialPage={0}


              indicator={this._renderTitleIndicator()}>
              {this.state.data.map(d => (
                <FlatListComp
                  data={d}
                  style={{ flex: 1, flexWrap: 'wrap' }}>
                  {this.state.data}
                </FlatListComp>
              ))}
             
            </IndicatorViewPager> 
              {/* 
            <MatchFields
              style={{ flex: 1, flexWrap: 'wrap' }}
              cola={ [
                {'text':'peigon'},
                {'text':'hedgehog'},
                {'text':'peacock'},
                {'text':'elephant'}
            ]}
            colb={  [
              { 'text': 'Sonic the ?' },
              { 'text': 'Message Carrier' },
              { 'text': 'Biggest Mammal' },
              { 'text': 'The Magnificent' }
          ]}

              question={"Please Match The Following."}
              answer={[['peigon','Message Carrier'],
                        ['hedgehog','Sonic the ?'],
                        ['peacock','The Magnificent'],
                        ['elephant','Biggest Mammal']]}

            > </MatchFields> */}
              <Button onPress={() => {
                this.setState({whichScreen:quiz});
              }}
                title="Click" />
            </View>




          </View>
        );
      }
      else{
        return(
          <View style={styles.main}>
          <Quiz style={{width:300, height:400}}/>
          </View>
        );
      }
    }
    else {
      return (
        <View style={styles.main}>
          <View style={styles.container}>
            <Picker
              mode="dropdown"
              selectedValue={this.state.grade}
              onValueChange={(value) => { }}
              style={styles.picker}>
              {this.state.grade.map((value) => { return <Picker.Item label={value} value={value} /> })}


            </Picker>
            <Picker enabled={!(this.state.grade == "none")}
              selectedValue={this.state.chapter || "Chapter"}
              onValueChange={(value) => this.setState({

                isReady: true
              })}
              style={styles.picker}
              mode="dropdown">
              {this.state.chapter.map((value) => { return <Picker.Item label={value} value={value} /> })}
            </Picker>




          </View>



        </View>
      );
    }
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
    height: 30,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
  main: {
    flex: 1,

    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000000'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  picker: {
    color: '#678312',
    flex: 1,
  },

  containerInner: {
    flex: 1,
    top: 20,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
  list: {
    flexDirection: 'column',

    flex: 6,

  },
  button: {
    alignSelf: 'center',
    flex: 1,
  }

});
