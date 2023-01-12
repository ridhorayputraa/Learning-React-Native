import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import mackbook from './mackbook.jpg';

const App = () => {
  // 1.) Create New Components(Functional Components)
  return (
    <>
    {/* Scroll view => agar bisa men scroll content */}
    <ScrollView>
          <SampleComponent/>
          <StylingReactNative /> 
    </ScrollView>
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

export default App;
