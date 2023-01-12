import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import chart from './chart.png';

export default function PositionReactNative() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cartWrapper}>
        <Image source={chart} style={styles.iconCart} />
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    alignItems: 'center',
  },

  cartWrapper: {
    borderWidth: 1,
    borderColor: '#4398d1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconCart: {
    width: 50,
    height: 50,
  },

  text: {
    fontSize: 12,
    color: '#777777',
    fontWeight: '700',
    marginTop: 8,
  },
});
