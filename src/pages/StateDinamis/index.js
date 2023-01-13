import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Counter = () => {
  return (
    <View>
      <Text>0</Text>
      <Button title="Tambah" />
    </View>
  );
};

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Materi Component dengan state</Text>
      <Counter />
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
