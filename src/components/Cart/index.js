import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import chart from '../../assets/icons/chart.png';

export default function Cart({quantity}) {
  return (
    <View>
      <View style={styles.cartWrapper}>
        <Image source={chart} style={styles.iconCart} />
        <Text style={styles.notif}>{quantity}</Text>
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
    position: 'relative',
    marginTop: 50,
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
