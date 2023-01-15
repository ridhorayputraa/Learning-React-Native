import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProgrammerImg from '../../assets/image/programmer.svg'

export default function ReactNativeSvg() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>ReactNativeSvg</Text>
      <ProgrammerImg width={244} height={125}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: "center" },
});
