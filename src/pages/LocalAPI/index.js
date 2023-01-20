import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function LocalAPI() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API (JSON Server)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: "center" },
  line: { height: 2, backgroundColor: "black", marginVertical: 20 },
});
