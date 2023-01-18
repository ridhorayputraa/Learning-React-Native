import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

const CallApiVanilla = () => {
  useEffect(() => {
    //  fetch('https://jsonplaceholder.typicode.com/todos/1') => Json PlaceHolder
    fetch("https://reqres.in/api/users/2")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <View>
      <Text>CallApiVanilla</Text>
    </View>
  );
};

export default CallApiVanilla;

const styles = StyleSheet.create({});
