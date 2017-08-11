import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import ImageSlider from 'react-native-image-slider';
 

const json = {'wall_id': 0, 'lang_id': 2};
export default class WallDetail extends Component {
    constructor(props) {
      super(props);
      this.state = {
        position: 0,
        interval: null,
        result: null
      }        
    }    
  componentWillMount () {
    // this.setState({interval: setInterval(() => {
    //     this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1})
    // }, 2000)})
  }

  componentDidMount() {
   this.getWallDetail().done();
  }

  componentWillUnmount () {
    clearInterval(this.state.interval)
  }  

  async getWallDetail() {
    json.wall_id = this.props.wall_id;
    await fetch('http://api.traffiti.co/api/Wall/GetWallDetail', {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },            
            body: JSON.stringify(json)
          }
        )
        .then((response) => response.json())
        .then(responseData => {
          this.setState(
            {
              result:responseData
            }
          );
        })
        .done();
  }

  render() {
    let imageList = [];
    let contentList = [];
    let location = '';
    let author_name = '';
    let profile = null;        
    let date_text = '';

    if (this.state.result) {
      imageList = this.state.result.photoList;
      contentList = this.state.result.contentList;
      location = this.state.result.location;
      author_name = this.state.result.author_name;
      profile = {
        uri: this.state.result.profile_pic
      }
      date_text = this.state.result.date_text;
    }    
    return (

      <View style={styles.grid}>
        <View>
          <ImageSlider height={230} images={imageList} 
                position={this.state.position} onPositionChanged={position => this.setState({position})} />
        </View>        
        <View>
          <Text style={styles.titleText}>{location}</Text>
          <Text style={styles.dateText}>{date_text}</Text>
          <Text style={styles.descriptionText}>{contentList}</Text>
        </View>

        <View style={styles.profileView}>
          <Image style={styles.profile} source={profile} />
          <Text style={styles.profileName}>{author_name}</Text>
        </View> 
      </View>

    );
  }
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  grid: {
    //borderWidth: 0.5,
    backgroundColor: '#ededed',
    margin: 10,
    flex: 0.5,
    padding:5
  },
  dateText: {
    color: '#a0a0a8',
    fontSize: 10,
  },
  titleText: {
    color: '#424347',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop:10
  },
  descriptionText: {
    paddingTop: 10,
    color: '#6f6f71',
    fontSize: 14,
    paddingBottom:10,
  },
  image: {
    width: 346,
    height: 230,
  },
  profileView: {
    paddingTop:10,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start'
  },
  profile: {
    height: 40,
    borderRadius: 20,
    width: 40,
    alignItems: 'flex-start'    
  },
  profileName: {
    paddingLeft:10,
    alignItems: 'flex-end'    
  }
});