import { StyleSheet, View, TouchableWithoutFeedback, Image, Text } from 'react-native';
import React, { useState } from 'react';
import { MyDimensi, colors, fonts } from '../../utils';

// Ganti dengan path gambar yang sesuai
import ImageYes from '../../assets/narmashop.png';
import ImageNo from '../../assets/kurirnarma.png';

const MyRadio = ({ value, onPress, image, imageStyle, topText, bottomText }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.radioContainer}>
        <View style={styles.radioButton}>
          {value && <View style={styles.radioButtonSelected} />}
        </View>
        <Image source={image} style={[styles.radioImage, imageStyle]} />
        <View style={styles.textContainer}>
          <Text style={styles.topText}>{topText}</Text>
          <Text style={styles.bottomText}>{bottomText}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const App = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <View style={styles.container}>
      <MyRadio
        value={selectedValue === 'yes'}
        onPress={() => setSelectedValue('yes')}
        image={ImageYes}
        imageStyle={styles.imageYes}
        topText="Ambil di Toko"
        bottomText="08.00 - 20.00"
      />
      <MyRadio
        value={selectedValue === 'no'}
        onPress={() => setSelectedValue('no')}
        image={ImageNo}
        imageStyle={styles.imageNo}
        topText="Kurir Narma"
        bottomText="Maksimal Jarak 10 Km"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radioButton: {
    width: 20,
    height: 20,
    backgroundColor: colors.border,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioButtonSelected: {
    width: 14,
    height: 14,
    backgroundColor: colors.primary,
    borderRadius: 7,
  },
  radioImage: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
  },
  textContainer: {
    marginLeft: 10,
  },
  topText: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: 'black',
  },
  bottomText: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: 'black',
  },
  imageYes: {
    width: 40,
    height: 33,
  },
  imageNo: {
    width: 40,
    height: 39,
  },
});

export default App;
