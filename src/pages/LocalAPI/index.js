import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SvgUri } from "react-native-svg";
import axios from "axios";

const Item = ({ name, email, bidang }) => {
  return (
    <View style={styles.itemContainer}>
      <SvgUri
        style={styles.avatar}
        // akal akalan dynamic url uri
        uri={`https://api.multiavatar.com/{${email}}.svg`}
        
        
      />
{/* <Image 
 style={styles.avatar}
source= {<SvgUri uri={`https://api.multiavatar.com/${email}.svg`}/>}
 /> */}

      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>
      <Text style={styles.delete}>X</Text>
    </View>
  );
};

function LocalAPI() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bidang, setBidang] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };
    // try {
    //   console.log('data berfore send', data)
    //   const response = await axios.post(
    //     `http://${IP_ADDRESS}:3000/users`,
    //     data
    //   );
    //   return response.data;
    // } catch (error) {
    //   console.error(error);
    // }

    // apabila key dan value nya sama
    // maka boleh hanya begitu saja

    axios.post("http://192.168.0.2:3000/users", data)
      .then((res) => {
        console.log("res: ", res);
        setName("");
        setEmail("");
        setBidang("");
      })
      .catch((err) => {
        console.log("errr: ", err);
      });
  };
  // json-server --host 10.0.2.2 --watch db.json
  // samakan localhost ip localjson server dan ip perangkat

  // Method GET

  const getData = () => {
    axios.get("http://192.168.0.2:3000/users").then((res) => {
      console.log("res get data: ", res);
      setUsers(res.data)
    })
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
      <Button title="Simpan" onPress={submit} />
      <View style={styles.line} />
      {users.map(user => {
        return <Item key={user.id} name={user.name}  email={user.email} bidang={user.bidang} />
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