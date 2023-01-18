import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import mackbook from "../../assets/image/kiw.jpeg";

const Seru = ({onButtonPress}) => {
  return (
    <View style={styles.wrapper}>
      <Image source={mackbook} style={styles.imageProduct} />

      <Text style={styles.productName}>Bilaa piscokkkk</Text>

      <Text style={styles.productPrice}>Rp. xxxxxxx.</Text>

      <Text style={styles.location}>Jakarta Barat</Text>

      {/* Button */}
      <TouchableOpacity onPress={onButtonPress}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>BELI</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: "#f2f2f2",
    width: 230,
    borderRadius: 8,
  },
  imageProduct: { width: 188 ,height: 108, borderRadius: 8 },
  productName: { fontSize: 14,color: '#212121' ,fontWeight: "bold", marginTop: 16 },
  productPrice: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#f2994a",
    marginTop: 12,
  },
  location: { fontSize: 12, fontWeight: "300", marginTop: 12 },
  buttonWrapper: {
    backgroundColor: "#6fcf97",
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
});

export default Seru;
