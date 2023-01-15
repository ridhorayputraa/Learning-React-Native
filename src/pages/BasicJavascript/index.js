import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function BasicJavascript() {

    // Tipe data
    
    // Primitive
    const name = 'Ridho ray'; // string
    let age = 19;  // number => Integer
    const isMan = true; //boolean


  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>BasicJavascript</Text>

      <Text>Name: {name}</Text>
      <Text>AGe: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: "center" },
});
