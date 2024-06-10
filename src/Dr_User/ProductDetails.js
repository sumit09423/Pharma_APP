import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Appbar, IconButton, useTheme} from 'react-native-paper';
import AppBar from '../components/AppBar';
import {FONTS} from '../constant';
const productImage = require('../images/ProductImage1.png');

const ProductDetails = props => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <AppBar
        navigation={navigation}
        title="Product Details"
        notification={false}
        backGroundColor={theme.colors.themeColor}
        color="white"
      />
      <View style={styles.imageContainer}>
        <Image
          source={productImage}
          // style={styles.image}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.flexContainer}>
          <View>
            <Text style={styles.title}>Propofol injection</Text>
            <Text style={styles.subtitle}>Injections</Text>
          </View>
          <View>
            <IconButton
              icon="cards-heart-outline"
              size={24}
              onPress={() => {
                // Handle button press
              }}
            />
          </View>
        </View>

        <View style={styles.brandContainer}>
          <Text style={styles.brandTitle}>Troyofol Brand name</Text>
          <Text style={styles.brandName}>Troyaca</Text>
        </View>
        <Text style={styles.priceText}>Price & Stock</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>Price: ₹75 + 12% GST</Text>
          <Text style={styles.mrp}>MRP: ₹65</Text>
          <Text style={styles.quantity}>Qty: 30</Text>
        </View>
        <View>
          <Text style={styles.otherText}>Others Details</Text>
        </View>
        <View style={styles.otherDetails}>
          <Text style={styles.otherDetailsText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum arcu commodo lacus dictum, id venenatis nisi vestibulum.
            Donec elementum dignissim finibus.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Myorder')}
          activeOpacity={0.8}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0EC5C1',
  },
  appbar: {
    backgroundColor: '#0EC5C1',
    color: '#FFFFFF',
    color: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  image: {
    width: 100,
    height: 100,
  },
  detailsContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    padding: 20,
    paddingTop: 40,
    marginTop: 34,
  },
  title: {
    fontFamily: FONTS.Comfortaa.Bold,
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  subtitle: {
    fontFamily: FONTS.Roboto.Regular,
    fontSize: 12,
    color: '#999999',
  },
  brandContainer: {
    marginVertical: 20,
    alignItems: 'flex-start',
  },
  brandTitle: {
    fontFamily: FONTS.Roboto.Regular,
    fontSize: 14,
    color: '#7E7E7E',
    marginBottom: 5,
  },
  brandName: {
    fontFamily: FONTS.Roboto.Regular,
    fontSize: 11,
    color: '#1E1E1E',
    paddingHorizontal: 15,
    paddingVertical: 2,
    backgroundColor: '#DAF0F0',
    borderRadius: 5,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 8,
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  priceText: {
    fontFamily: FONTS.Comfortaa.Bold,
    fontSize: 15,
    color: '#000000',
  },
  price: {
    fontFamily: FONTS.Roboto.Regular,
    fontSize: 12,
    color: '#000000',
  },
  mrp: {
    fontFamily: FONTS.Roboto.Regular,
    fontSize: 12,
    color: '#999999',
  },
  quantity: {
    fontFamily: FONTS.Roboto.Regular,
    fontSize: 12,
    color: '#999999',
  },
  otherDetails: {
    marginVertical: 8,
    backgroundColor: '#F8F8F8',
    padding: 6,
    borderRadius: 12,
  },
  otherDetailsText: {
    fontFamily: FONTS.Roboto.Regular,
    fontSize: 12,
    color: '#999999',
    lineHeight: 18,
  },
  button: {
    backgroundColor: '#0EC5C1',
    paddingVertical: 11,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    fontFamily: FONTS.Roboto.Medium,
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 21.09,
  },
  otherText: {
    fontSize: 13,
    fontFamily: FONTS.Comfortaa.Medium,
    color: '#000000',
    marginTop: 4,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ProductDetails;
