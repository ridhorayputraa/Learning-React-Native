import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import mackbook from './mackbook.jpg';
import SampleComponent from './SampleComponent';

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



export default App;
