import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

const CallApiVanilla = () => {
  useEffect(() => {
    //  fetch('https://jsonplaceholder.typicode.com/todos/1') => Json PlaceHolder
    //     fetch("https://reqres.in/api/users/2")
    //       .then((response) => response.json())
    //       .then((json) => console.log(json));
    //     //   Call API Method POST
    //     const dataForApi = {
    //       name: "morpheus",
    //       job: "leader",
    //     };
    //     // Debug
    //     console.log("Data Object : ", dataForApi);
    //     console.log("Data Tringify ", JSON.stringify(dataForApi));
    //     fetch("https://reqres.in/api/users", {
    //       // Request Method
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(dataForApi),
    //     })
    //       .then((response) => response.json())
    //       .then((json) => {
    //         console.log("Post Response: ", json);
    //       });
  }, []);

  const getData = () => {
    fetch("https://reqres.in/api/users/2")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>CallApiVanilla</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET DATA</Text>

      <View style={styles.line} />
      <Button title="POST DATA" />
      <Text>Response POST DATA</Text>
    </View>
  );
};

export default CallApiVanilla;

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: "center" },
  line: { height: 2, backgroundColor: "black", marginVertical: 20 },
});
