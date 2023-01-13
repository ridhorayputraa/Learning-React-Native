import React from 'react';
import { ScrollView } from 'react-native';
import MateriFlexbox from './pages/FlexBox';
import PositionReactNative from './pages/Position';
import SampleComponent from './pages/SanpleComponent';
import StylingReactNative from './pages/StylingComponent';

const App = () => {
  // 1.) Create New Components(Functional Components)
  return (
    <>
      {/* Scroll view => agar bisa men scroll content */}
      <ScrollView>
         <SampleComponent/>
          <StylingReactNative />  

         {/* 5.) MAteri Flexbox */}
          <MateriFlexbox/> 

        {/* 6.) Postion React Native */}
        <PositionReactNative />
      </ScrollView>
    </>
  );
};

export default App;
