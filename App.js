import React from 'react';
import { ScrollView } from 'react-native';
import MateriFlexbox from './MateriFlexbox';
import PositionReactNative from './PositionReactNative';
import SampleComponent from './SampleComponent';
import StylingReactNative from './StylingReactNativeComponent';

const App = () => {
  // 1.) Create New Components(Functional Components)
  return (
    <>
      {/* Scroll view => agar bisa men scroll content */}
      <ScrollView>
        {/* <SampleComponent/>
          <StylingReactNative />  */}

        {/* 5.) MAteri Flexbox
          <MateriFlexbox/> */}

        {/* 6.) Postion React Native */}
        <PositionReactNative />
      </ScrollView>
    </>
  );
};

export default App;
