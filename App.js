import React, { Component } from 'react';
import { Image, Text, TextInput, View, ViewComponent } from 'react-native';

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


export default App;
