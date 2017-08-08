import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import ImageSlider from 'react-native-image-slider';
 

const json = {'wall_id': 0, 'lang_id': 2};
export default class WallDetail extends Component {
    constructor(props) {
        super(props);
    }    

  componentDidMount() {
   this.getWallDetail().done();
  }

  async getWallDetail() {
    await fetch('http://api.traffiti.co/api/Wall/GetWall', {
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
          //   //wall_id, location, content, photo_path, author_id, author_name, profile_pic, data_text
        })
        .done();
  }

  render() {
    // let pic = {
    //   uri: this.props.photo_path
    // };  
    // let profile = {
    //   uri: this.props.profile_pic
    // }  
    return (
      <View style={styles.grid}>
        {/* <View>
          <ImageSlider images={pic}/>
        </View>        
        <View>
          <Text style={styles.titleText}>{this.props.location}</Text>
          <Text style={styles.dateText}>{this.props.date_text}</Text>
          <Text style={styles.descriptionText}>{this.props.content}</Text>
        </View>

        <View style={styles.profileView}>
          <Image style={styles.profile} source={profile} />
          <Text style={styles.profileName}>{this.props.author_name}</Text>
        </View> */}
      </View>

    );
  }
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  grid: {
    borderWidth: 0.5,
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
    fontWeight: 'bold'
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