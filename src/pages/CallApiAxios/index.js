import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";

const CallApiAxios = () => {
  // Buat data awal dengan STATE
  
  
  const [dataUser, setDataUser] = useState({
    avatar: "",
    email: "",
    first_name: "",
    last_name: "",
  });

  const getData = () => {
    axios
      .get("https://reqres.in/api/users/3")
      .then((result) => {
        setDataUser(result.data.data);
      })
      .catch((err) => console.log("err: ", err));
  };
  
  // State Awal untuk POST
  const [dataJob, setDataJob] = useState({
    name: "",
    job: "",
  });
  // Untuk POST
  const PostData = () => {
    //  Call API Method POST
    const dataForApi = {
      name: "morpheus",
      job: "leader",
    };
   
    axios.post("https://reqres.in/api/users", dataForApi)
    .then(result => {
      setDataJob(result.data)
    })
    .catch(err => console.log("err: ", err))
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>CallApiAxios</Text>
      {/* GET */}
      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET DATA</Text>
      {/* Munculkan data dari API */}

      {/* JIka string nya kosong jangan munculkan */}
      {dataUser.avatar.length > 0 && (
        <Image source={{ uri: dataUser.avatar }} style={styles.avatar} />
      )}
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />

      {/* Post */}
      <Button title="POST DATA" onPress={PostData} />
      <Text>Response POST DATA</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  );
};

export default CallApiAxios;

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: "center" },
  line: { height: 2, backgroundColor: "black", marginVertical: 20 },
  avatar: { width: 100, height: 100, borderRadius: 100 },
});
