import React, { Component } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import mackbook from './mackbook.jpg';

const App = () => {
  // 1.) Create New Components(Functional Components)
  return (
    <>
          <StylingReactNative /> 
    </>
  );
};


// 3.) Styling Component React
const StylingReactNative = () => {
  return (
    <View>
      {/* Dengan object stylesheets */}
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#93CAED',
          borderWidth: 2,
          borderColor: 'purple',
          marginTop: 20,
          marginLeft: 20,
        }}
      ></View>

      {/* CHallnge styling */}
      <View style={{ padding: 12, backgroundColor: '#f2f2f2', width: 212, borderRadius: 8 }}>
        <Image source={mackbook} style={{ width: 188, height: 107, borderRadius: 8 }} />

        <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 16 }}>
          New Macbook Pro 2019
        </Text>

        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#f2994a', marginTop: 12 }}>
          Rp. 25.000.
        </Text>

        <Text style={{ fontSize: 12, fontWeight: '300', marginTop: 12 }}>Jakarta Barat</Text>

        {/* Button */}
        <View
          style={{
            backgroundColor: '#6fcf97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}
          >
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 10,
    marginTop: 40,
  },
});

const SampleComponent = () => {
  return (
    <View>
      {/* View adalah parent apabaila hanya teks makan tidak bisa
  di eksekusi */}

      <View style={{ with: 80, height: 80, backgroundColor: '#93CAED' }} />

      <Text>Rayyyyy</Text>
      <Text>Rayyyyy</Text>
      <Clouse />
      <Text>Rayyyyy</Text>
      <Photos />
      <TextInput style={{ borderWidth: 1 }} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

// end 3

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
};

// 2.) Membuat class components
class BoxGreen extends Component {
  render() {
    return <Text>Ini Component dari class</Text>;
  }
}

// 2 of component classs
class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{ uri: 'https://placeimg.com/100/100/tech' }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ color: 'blue', fontSize: 24 }}>Ini adlaah teknologi</Text>
      </View>
    );
  }
}

export default App;
