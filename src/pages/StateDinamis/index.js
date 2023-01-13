import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Materi Component dengan state</Text>
    </View>
  )
}

export default StateDinamis

const styles = StyleSheet.create({
    wrapper: {
        padding:20
    },
    textTitle: {
        textAlign: 'center'
    }
})