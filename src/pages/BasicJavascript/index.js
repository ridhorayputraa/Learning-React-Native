import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function BasicJavascript() {
  // Tipe data

  // Primitive
  const name = "Ridho ray"; // string
  let age = 19; // number => Integer
  const isMan = true; //boolean

  // Complex
  const Animal = {
    name: "Naila",
    spesicies: "Kitten",
    age: 2,
    isLocalAnimal: true,
    color: "orange",
    Parent: {
      man: "Kaisar",
      woman: "queen",
    },
  }; // Object

  const sapaOrang = (name, age) => {
    return console.log(`hello my name is ${name} my age is ${age}`);
  }; //Function

  sapaOrang("Ridhoo ray", 19);

  const namaOrang = ["Panjul", "Jajang", "Sutirman"]; // array

  //   Jika di typeof keluarnya akan object
  typeof namaOrang; // Object

  //   Logic Dasar
  // if(Animal.name === "Naila"){
  //     console.log('Hello naila')
  // }else{
  //     console.log('kamu siapa')
  // }

  const sapaHewan = (ObjectAnimal) => {
    let hasilSapa = "";
    //   Logic Dasar
    if (ObjectAnimal.name === "Naila") {
      hasilSapa = "Haloo Nailaaa";
    } else {
      hasilSapa = "kamu siapaaaa";
    }
    return hasilSapa;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>BasicJavascript</Text>

      <Text>Name: {name}</Text>
      <Text>AGge: {age}</Text>
      <Text>{sapaHewan(Animal)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: "center" },
});
