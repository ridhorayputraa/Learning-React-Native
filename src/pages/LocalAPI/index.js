import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SvgUri } from "react-native-svg";

export default function LocalAPI() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API (JSON Server)</Text>
      <Text>Masukan Anggota Katanya Coding</Text>
      <TextInput style={styles.input} placeholder="Nama Lengkap" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Bidang" />
      <Button title="Simpan" />
      <View style={styles.line} />
      <View>
        <SvgUri
          width="100"
          height="100"
          uri="https://api.multiavatar.com/kathrin.svg"
        />

        <View>
          <Text>Nama Lengkap</Text>
          <Text>Email</Text>
          <Text>Bidang</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: "center" },
  line: { height: 2, backgroundColor: "black", marginVertical: 20 },
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
