import React from 'react';
import {  ScrollView } from 'react-native';
import SampleComponent from './SampleComponent';
import StylingReactNative from './StylingReactNativeComponent';


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
