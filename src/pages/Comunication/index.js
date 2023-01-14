import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cart from '../../components/Cart'
import Product from '../../components/Product'

export default function Communication() {
  return (
    <View style={styles.container}>
      <Text style={styles.TextTitle}>Communication</Text> 
      <Cart/>
      <Product/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {padding: 20},
    TextTitle: {textAlign: 'center'},
})