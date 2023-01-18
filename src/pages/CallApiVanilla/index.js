import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

const CallApiVanilla = () => {
  useEffect(() => {
    //  fetch('https://jsonplaceholder.typicode.com/todos/1') => Json PlaceHolder
    fetch("https://reqres.in/api/users/2")
      .then((response) => response.json())
      .then((json) => console.log(json));

    //   Call API Method POST
    const dataForApi = {
      name: "morpheus",
      job: "leader",
    };

    // Debug
    console.log('Data Object : ', dataForApi);
    console.log('Data Tringify ', JSON.stringify(dataForApi))
    
    fetch("https://reqres.in/api/users", {
        // Request Method
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataForApi)
    })
    .then(response => response.json())
    .then(json => {
        console.log('Post Response: ', json)
    })
  }, []);

  return (
    <View>
      <Text>CallApiVanilla</Text>
    </View>
  );
};

export default CallApiVanilla;

const styles = StyleSheet.create({});
