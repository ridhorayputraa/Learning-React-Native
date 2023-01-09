import React, { Component } from 'react';
import { Image, Text, TextInput, View } from 'react-native';

const App = () => {
  // 1.) Create New Components(Functional Components)
  return (
    <View>
      {/* View adalah parent apabaila hanya teks makan tidak bisa
    di eksekusi */}

      <View style={{ with:80, height:80, backgroundColor: '#93CAED'  }} />

      <Text>Rayyyyy</Text>
      <Text>Rayyyyy</Text>
      <Clouse />
      <Text>Rayyyyy</Text>
      <Photos/>
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen/>
      <Profile/>
    </View>
  );
};

const Clouse = () => {
  return <Text>Bilaaa</Text>;
};

const Photos = () => {
  return (
    <Image
      source={{ uri: 'https://placeimg.com/100/100/animals' }}
      style={{ width: 100, height: 100 }}
    />
  );
}


//  2.) Membuat class components
class BoxGreen extends Component {
  render() {
    return <Text>Ini Component dari class</Text>
  }
}


// 2 of component classs 
class Profile extends Component{
  render(){
    return (
      <View>
        <Image
          source={{ uri: 'https://placeimg.com/100/100/tech' }}
          style={{ width: 100, height: 100, borderRadius:50 }}
        />
        <Text style={{ color:'blue', fontSize:24 }}>Ini adlaah teknologi</Text>
      </View>
    );  
}
}


export default App;
