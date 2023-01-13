import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import MateriFlexbox from './pages/FlexBox';
import PositionReactNative from './pages/Position';
import SampleComponent from './pages/SanpleComponent';
import StylingReactNative from './pages/StylingComponent';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 6000);
  }, []);

  // 1.) Create New Components(Functional Components)
  return (
    <>
      {/* Scroll view => agar bisa men scroll content */}
      <ScrollView>
        {/* <SampleComponent/>
          <StylingReactNative />   */}

        {/* 5.) MAteri Flexbox */}

        {isShow && <MateriFlexbox />}

        {/* 6.) Postion React Native */}
        {/* <PositionReactNative /> */}
      </ScrollView>
    </>
  );
};

export default App;
