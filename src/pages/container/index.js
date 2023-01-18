import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Keranjang from '../../components/Keranjang'
import Prodak from '../../components/prodak'
import Seru from '../../components/Seru';

export default function Container() {
    const [countity, SetCountity] = useState(0);

    function onClick(){
      if(countity == 10){
        alert('10 Naila Sudah di masukan ke keranjang')
      }
      return SetCountity(countity + 1)
    }

  return (
    <View style={{ alignItems:'center', marginTop:20 }}>
      <Text>Jual Ayang</Text>
      <Keranjang countity={countity}/>
      <Seru onButtonPress={() => onClick()}/>
    </View>
  )
}

const styles = StyleSheet.create({})