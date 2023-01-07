import React from "react"
import { Text, View, ViewComponent } from "react-native"

const App = () => {
  // 1.) Create New Components(Functional Components)
  return (
    <View>
    {/* View adalah parent apabaila hanya teks makan tidak bisa
    di eksekusi */}
      <Text>Rayyyyy</Text>
      <Text>Rayyyyy</Text>
      <Clouse/>
      <Text>Rayyyyy</Text>
    </View>
  );
    
};

const Clouse = () => {
  return <Text>Bilaaa</Text>;
};


export default App;