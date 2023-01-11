import React from 'react';
import { Image,  Text,  View } from 'react-native';
import mackbook from './mackbook.jpg';

// Aing Praktek Pak
const AingPraktek = () => {
  return (
    <View
      style={{
        margin: 10,
        width: 209,
        height: 294,
        backgroundColor: '#F2F2F2',
        borderRadius: 14,
        padding: 20,
      }}
    >
      <Image
        source={mackbook}
        style={{
          width: 169,
          height: 127,
          borderRadius: 14,
        }}
      />

      <Text
        style={{
          fontSize: 12,
          fontWeight: 'bold',
          color: '#121212',
          marginTop: 15,
        }}
      >
        New Macbook Pro 2019
      </Text>

      <Text
        style={{
          color: '#DC9B6C',
          fontSize: 12,
          fontWeight: 'bold',
          marginTop: 10,
        }}
      >
        Rp. 25.000.
      </Text>

      <Text
        style={{
          color: '#858585',
          fontWeight: 'medium',
          fontSize: 12,
          marginTop: 6,
        }}
      >
        Jakarta Barat
      </Text>

      {/* Button */}
      <View
        style={{
          backgroundColor: '#41AA38',
          paddingVertical: 6,
          borderRadius: 15,
          marginTop: 12,
        }}
      >
        <Text
          style={{
            color: '#F1F1F1',
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
          }}
        >
          BELI
        </Text>
      </View>
    </View>
  );
};

export default AingPraktek;