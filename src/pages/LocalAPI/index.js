import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SvgUri } from "react-native-svg";

const Item = () => {
  return (
    <View style={styles.itemContainer}>
      <SvgUri
        style={styles.avatar}
        uri="https://api.multiavatar.com/kathrin.svg"
      />

      <View style={styles.desc}>
        <Text style={styles.descName}>Nama Lengkap</Text>
        <Text style={styles.descEmail}>Email</Text>
        <Text style={styles.descBidang}>Bidang</Text>
      </View>
      <Text style={styles.delete}>X</Text>
    </View>
  );
};

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
      <Item />
      <Item />
      <Item />
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
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  itemContainer: { flexDirection: "row", marginBottom: 20 },
  desc: { marginLeft: 18, flex: 1 },
  descName: { fontSize: 20, fontWeight: "bold" },
  descEmail: { fontSize: 16 },
  descBidang: { fontSize: 12, marginTop: 8 },
  delete: { fontSize: 20, fontWeight: "bold", color: "red" },
});
