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
    brother: {
      man: "jajang",
      woman: "ajeng",
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
    // If else biasa

    // let hasilSapa = "";
    // //   Logic Dasar
    // if (ObjectAnimal.name === "Naila") {
    //   hasilSapa = "Haloo Nailaaa";
    // } else {
    //   hasilSapa = "kamu siapaaaa";
    // }
    // return hasilSapa;

    return ObjectAnimal.name === "Naila" ? "Haloo nailaaaaaa" : "kamuu siapa";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>BasicJavascript</Text>

      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>{sapaHewan(Animal)}</Text>

      {/* Looping menggunakan Map */}
      {namaOrang.map((orang) => (
        <Text>{orang}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: "center" },
});
