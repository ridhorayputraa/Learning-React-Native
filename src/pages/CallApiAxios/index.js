import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const CallApiAxios = () => {
  // Buat data awal dengan STATE
  const [dataUser, setDataUser] = useState({
    avatar: "",
    email: "",
    first_name: "",
    last_name: "",
  });

  // State Awal untuk POST
  const [dataJob, setDataJob] = useState({
    name: "",
    job: "",
  });

  const getData = () => {
    fetch("https://reqres.in/api/users/2")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  // Untuk POST
  const PostData = () => {
    //  Call API Method POST
    const dataForApi = {
      name: "morpheus",
      job: "leader",
    };
    // Debug

    // console.log("Data Object : ", dataForApi);
    // console.log("Data Tringify ", JSON.stringify(dataForApi));

    fetch("https://reqres.in/api/users", {
      // Request Method
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForApi),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Post Response: ", json);
        // karna di belakang sudah berupa JSON maka langsung saja
        setDataJob(json);
      });
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
