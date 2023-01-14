import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Cart from '../../components/Cart'
import Product from '../../components/Product'

export default function Communication() {
  const [totalProduct, setTotalProduct] = useState(0)
 
  function counter(totalProduct){
   return setTotalProduct(totalProduct + 1)
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.TextTitle}>Communication</Text> 
      <Cart quantity={totalProduct}/>
      <Product onButtonPress={() => counter(totalProduct)}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {padding: 20},
    TextTitle: {textAlign: 'center'},
})