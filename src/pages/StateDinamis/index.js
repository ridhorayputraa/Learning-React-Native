import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const Counter = () => {
    const [number, SetNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="Tambah" onPress={() => SetNumber(number + 1)} />
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
