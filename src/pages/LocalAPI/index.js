import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SvgUri } from "react-native-svg";
import axios from "axios";

const Item = ({ name, email, bidang, onPress, onDelete }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPress}>
        <SvgUri
          style={styles.avatar}
          // akal akalan dynamic url uri
          uri={`https://api.multiavatar.com/{${email}}.svg`}
        />
      </TouchableOpacity>
      {/* <Image 
 style={styles.avatar}
source= {<SvgUri uri={`https://api.multiavatar.com/${email}.svg`}/>}
 /> */}

      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

function LocalAPI() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bidang, setBidang] = useState("");
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState("Simpan");
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };
    // apabila key dan value nya sama
    // maka boleh hanya begitu saja

    // Logic jika buutton di state "Simpan"
    if (button === "Simpan") {
      axios
        .post("http://192.168.0.2:3000/users", data)
        .then((res) => {
          console.log("res: ", res);
          setName("");
          setEmail("");
          setBidang("");
          getData();
        })
        .catch((err) => {
          console.log("errr: ", err);
        });
    } else if (button === "Update") {
      //  Pur/Patch tergantung dari backend menyediakannya
      axios
        .put(`http://192.168.0.2:3000/users/${selectedUser.id}`, data)
        .then((res) => {
          console.log("Sukses Edit: ", res);
          getData();
          setName("");
          setEmail("");
          setBidang("");
          setButton("Simpan");
        });
    }
  };
  // json-server --host 10.0.2.2 --watch db.json
  // samakan localhost ip localjson server dan ip perangkat

  // Method GET

  const getData = () => {
    axios.get("http://192.168.0.2:3000/users").then((res) => {
      console.log("res get data: ", res);
      setUsers(res.data);
    });
  };

  // Update method PUT
  const selectItem = (item) => {
    console.log("Select Item: ", item);
    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton("Update");
  };

  // Delete
  const deleteItem = (item) => {
    console.log("delete: ", item);
    axios.delete(`http://192.168.0.2:3000/users/${item.id}`).then((res) => {
      console.log("kelar ngapus", res);
      getData();
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API (JSON Server)</Text>
      <Text>Masukan Anggota Katanya Coding</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
        placeholder="Nama Lengkap"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        value={bidang}
        onChangeText={(value) => setBidang(value)}
        placeholder="Bidang"
      />
      <Button title={button} onPress={submit} />
      <View style={styles.line} />
      {users.map((user) => {
        return (
          <Item
            key={user.id}
            name={user.name}
            onPress={() => selectItem(user)}
            email={user.email}
            bidang={user.bidang}
            onDelete={() =>
              Alert.alert("Peringatan", 
              "Anda yakin akan menghapus user ini",
               [
                { text: "Tidak", onPress: () => console.log("button Tidak") },
                { text: "Ya", onPress: () => deleteItem(user) },
              ])
            }
          />
        );
      })}
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

export default LocalAPI;
