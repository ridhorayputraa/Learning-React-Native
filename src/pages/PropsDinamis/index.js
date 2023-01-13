import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Story = ({ name, image }) => {
  return (
    <>
      <Text>Materi Component Dinamis dengan Props</Text>
      <Image
        source={{
          uri:  image ,
        }}
        style={{ width: 50, height: 50, borderRadius: 50/2 }}
      />
      <Text>{name}</Text>
    </>
  );
};

export default function index() {
  return (
    <View>
      <Story
        image="https://instagram.fcgk27-1.fna.fbcdn.net/v/t51.2885-15/234136810_190789293084602_7389807128971981256_n.jpg?stp=c0.280.720.720a_dst-jpg_e35_s150x150&_nc_ht=instagram.fcgk27-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=fAVcPtfxIAUAX_E9wbP&tn=Tj0pwX5G0-xn_3WU&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AfC7MhPRfIa1xOKcWp7LgcD0jC8FmpcVyHC_d8nYrC7lLw&oe=63C36FE5&_nc_sid=acd11b"
        name="Ridhoooo"
      />
      <Story
        image="https://instagram.fcgk27-1.fna.fbcdn.net/v/t51.2885-15/234136810_190789293084602_7389807128971981256_n.jpg?stp=c0.280.720.720a_dst-jpg_e35_s150x150&_nc_ht=instagram.fcgk27-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=fAVcPtfxIAUAX_E9wbP&tn=Tj0pwX5G0-xn_3WU&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AfC7MhPRfIa1xOKcWp7LgcD0jC8FmpcVyHC_d8nYrC7lLw&oe=63C36FE5&_nc_sid=acd11b"
        name="bross"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
