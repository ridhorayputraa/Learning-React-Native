import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import chart from "../../assets/icons/chart.png";

const Keranjang = ({countity}) => {
  return <View style={styles.wrapper}>
    <Image style={styles.iconChart} source={chart} />
       <Text style={styles.notif}>{countity}</Text>
  </View>;
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: "#4398d1",
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: 50,
  },
  iconChart: {
    width: 50,
    height: 50,
  },
    notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6fcf97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default Keranjang;
