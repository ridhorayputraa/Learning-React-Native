import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import MateriFlexbox from "./pages/FlexBox";
import PositionReactNative from "./pages/Position";
import SampleComponent from "./pages/SanpleComponent";
import StylingReactNative from "./pages/StylingComponent";
import PropsDinamis from "./pages/PropsDinamis";
import StateDinamis from "./pages/StateDinamis";
import Communication from "./pages/Comunication";
import ReactNativeSvg from "./pages/ReactNativeSvg/Index";
import BasicJavascript from "./pages/BasicJavascript";
import Container from "./pages/container";
import CallApiVanilla from "./pages/CallApiVanilla";

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
         */}

        {/* <StylingReactNative />    */}

        {/* 5.) MAteri Flexbox */}

        {/* <MateriFlexbox /> */}

        {/* 6.) Postion React Native */}
        {/* <PositionReactNative /> */}

        {/* 8.) props Dinamis */}
        {/* <PropsDinamis/> */}

        {/* 9.) State dinamis
         */}
        {/* <StateDinamis /> */}

        {/* 10.) Communication state and Props */}
        {/* <Communication /> */}

        {/* 11.) React Native Svg */}
        {/* <ReactNativeSvg /> */}

        {/* 12.) Basic JS in ReactNative */}
        {/* <BasicJavascript /> */}

        {/* Learning */}
        {/* <Container/> */}

        {/* API React Native */}
        <CallApiVanilla />
      </ScrollView>
    </>
  );
};

export default App;
