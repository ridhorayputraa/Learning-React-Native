import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ReactNativeSvg() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>ReactNativeSvg</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: "center" },
});
