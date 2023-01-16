import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Keranjang from '../../components/Keranjang'
import Prodak from '../../components/prodak'

export default function Container() {
    const [countity, SetCountity] = useState(0);

    function onClick(){
      return SetCountity(countity + 1)
    }

  return (
    <View>
      <Text>Container</Text>
      <Keranjang countity={countity}/>
      <Prodak onButtonPress={() => onClick()}/>
    </View>
  )
}

const styles = StyleSheet.create({})