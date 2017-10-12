import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Item, Input, Icon, Button } from 'native-base'
import ImagePicker from 'react-native-image-picker'

var options = {
    title: 'Select Avatar',
    customButtons: [
      {name: 'fb', title: 'Choose Photo from Facebook'},
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };


export default class Signup extends Component {
    state = {
        avatarSource: null,
        videoSource: null
      };
          
    selectPhotoTapped() {
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true
          }
        };
    
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled photo picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            let source = { uri: response.uri };
    
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
            this.setState({
              avatarSource: source
            });
          }
        });
      }    
    render () {
      let selectPic = {
        uri: 'https://s3-ap-southeast-1.amazonaws.com/traffiti/app_images/Cursor-Select-icon.png'
      };          
        return (
            <View>
                <Item>
                    <Input placeholder='匿稱'/>
                </Item>                  
                <Item>
                    <Input placeholder='電郵' />
                </Item>
                <Item>
                    <Input placeholder='密碼'  password={true}/>
                </Item>     
                <Item>
                    <Input placeholder='確認密碼'  password={true}/>
                </Item>
                <View style={styles.container}>
                  <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                      { this.state.avatarSource === null ? <View><Image style={styles.selectPic} source={selectPic} /><Text>選擇照片</Text></View> :
                          <Image style={styles.avatar} source={this.state.avatarSource} />
                      }
                  </TouchableOpacity>     
                </View>  
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },  
  selectPic: {
    height: 100,
    width: 100,
    alignItems: 'flex-start'    
  },  
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});
