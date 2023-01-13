import { Image, ScrollView, ScrollViewComponent, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Story = ({ name, image }) => {
  return (
    <View style={{ alignItems: 'center', marginRight: 20 }}>
      <Image
        source={{
          uri: image,
        }}
        style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
      />
      <Text style={{ maxWidth: 50, textAlign: 'center' }}>{name}</Text>
    </View>
  );
};

export default function index() {
  return (
    <View>
      <Text>Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal>
        <View style={{ flexDirection: 'row' }}>
          <Story
            image="https://instagram.fcgk27-1.fna.fbcdn.net/v/t51.2885-15/234136810_190789293084602_7389807128971981256_n.jpg?stp=c0.280.720.720a_dst-jpg_e35_s150x150&_nc_ht=instagram.fcgk27-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=fAVcPtfxIAUAX_E9wbP&tn=Tj0pwX5G0-xn_3WU&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AfC7MhPRfIa1xOKcWp7LgcD0jC8FmpcVyHC_d8nYrC7lLw&oe=63C36FE5&_nc_sid=acd11b"
            name="Ridhoooo"
          />
          <Story
            image="https://instagram.fcgk27-1.fna.fbcdn.net/v/t51.2885-15/234136810_190789293084602_7389807128971981256_n.jpg?stp=c0.280.720.720a_dst-jpg_e35_s150x150&_nc_ht=instagram.fcgk27-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=fAVcPtfxIAUAX_E9wbP&tn=Tj0pwX5G0-xn_3WU&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AfC7MhPRfIa1xOKcWp7LgcD0jC8FmpcVyHC_d8nYrC7lLw&oe=63C36FE5&_nc_sid=acd11b"
            name="Ridhoooo"
          />
          <Story
            image="https://instagram.fcgk27-1.fna.fbcdn.net/v/t51.2885-15/234136810_190789293084602_7389807128971981256_n.jpg?stp=c0.280.720.720a_dst-jpg_e35_s150x150&_nc_ht=instagram.fcgk27-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=fAVcPtfxIAUAX_E9wbP&tn=Tj0pwX5G0-xn_3WU&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AfC7MhPRfIa1xOKcWp7LgcD0jC8FmpcVyHC_d8nYrC7lLw&oe=63C36FE5&_nc_sid=acd11b"
            name="Ridhoooo"
          />
          <Story
            image="https://instagram.fcgk27-1.fna.fbcdn.net/v/t51.2885-15/234136810_190789293084602_7389807128971981256_n.jpg?stp=c0.280.720.720a_dst-jpg_e35_s150x150&_nc_ht=instagram.fcgk27-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=fAVcPtfxIAUAX_E9wbP&tn=Tj0pwX5G0-xn_3WU&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AfC7MhPRfIa1xOKcWp7LgcD0jC8FmpcVyHC_d8nYrC7lLw&oe=63C36FE5&_nc_sid=acd11b"
            name="Ridhoooo"
          />
          <Story
            image="https://instagram.fcgk27-1.fna.fbcdn.net/v/t51.2885-15/234136810_190789293084602_7389807128971981256_n.jpg?stp=c0.280.720.720a_dst-jpg_e35_s150x150&_nc_ht=instagram.fcgk27-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=fAVcPtfxIAUAX_E9wbP&tn=Tj0pwX5G0-xn_3WU&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AfC7MhPRfIa1xOKcWp7LgcD0jC8FmpcVyHC_d8nYrC7lLw&oe=63C36FE5&_nc_sid=acd11b"
            name="Ridhoooo"
          />
          <Story
            image="https://instagram.fcgk27-1.fna.fbcdn.net/v/t51.2885-15/234136810_190789293084602_7389807128971981256_n.jpg?stp=c0.280.720.720a_dst-jpg_e35_s150x150&_nc_ht=instagram.fcgk27-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=fAVcPtfxIAUAX_E9wbP&tn=Tj0pwX5G0-xn_3WU&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AfC7MhPRfIa1xOKcWp7LgcD0jC8FmpcVyHC_d8nYrC7lLw&oe=63C36FE5&_nc_sid=acd11b"
            name="bross"
          />
          <Story
            image="https://instagram.fcgk27-1.fna.fbcdn.net/v/t51.2885-15/234136810_190789293084602_7389807128971981256_n.jpg?stp=c0.280.720.720a_dst-jpg_e35_s150x150&_nc_ht=instagram.fcgk27-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=fAVcPtfxIAUAX_E9wbP&tn=Tj0pwX5G0-xn_3WU&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AfC7MhPRfIa1xOKcWp7LgcD0jC8FmpcVyHC_d8nYrC7lLw&oe=63C36FE5&_nc_sid=acd11b"
            name="bross"
          />
          <Story
            image="https://instagram.fcgk27-1.fna.fbcdn.net/v/t51.2885-15/234136810_190789293084602_7389807128971981256_n.jpg?stp=c0.280.720.720a_dst-jpg_e35_s150x150&_nc_ht=instagram.fcgk27-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=fAVcPtfxIAUAX_E9wbP&tn=Tj0pwX5G0-xn_3WU&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AfC7MhPRfIa1xOKcWp7LgcD0jC8FmpcVyHC_d8nYrC7lLw&oe=63C36FE5&_nc_sid=acd11b"
            name="bross"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
