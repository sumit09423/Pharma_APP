import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Appbar, Button, Searchbar} from 'react-native-paper';
import AppBar from '../components/AppBar';
import {FONTS} from '../constant';
const Seruff = require('../images/Seruff.png');
const products = [
  {
    id: '1',
    name: 'Propofol Injection Bp 1 W V 20 ML',
    description: 'Propofol Emulsion, Diprivan',
    price: 75,
    mrp: 65,
    gst: 12,
    qty: 30,
    srcCode: Seruff,
  },
  {
    id: '2',
    name: 'Propofol Injection Bp 1 W V 20 ML',
    description: 'Propofol Emulsion, Diprivan',
    price: 75,
    mrp: 65,
    gst: 12,
    qty: 30,
    srcCode: Seruff,
  },
  {
    id: '3',
    name: 'Propofol Injection Bp 1 W V 20 ML',
    description: 'Propofol Emulsion, Diprivan',
    price: 75,
    mrp: 65,
    gst: 12,
    qty: 30,
    srcCode: Seruff,
  },
  {
    id: '4',
    name: 'Propofol Injection Bp 1 W V 20 ML',
    description: 'Propofol Emulsion, Diprivan',
    price: 75,
    mrp: 65,
    gst: 12,
    qty: 30,
    srcCode: Seruff,
  },
];

const ProductCategory = props => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <View style={styles.productContainer}>
      <View style={styles.imgcontainer}>
        <Image source={item.srcCode} style={styles.productImage} />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <View style={styles.PriceView}>
          <Text style={styles.productPrice}>
            Price : ₹{item.price} + {item.gst}% GST
          </Text>
          <Text style={styles.productMrp}>MRP : ₹{item.mrp}</Text>
        </View>
        <Text style={styles.productQty}>Qty: {item.qty}</Text>

        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => navigation.navigate('ProductDetails', {item})}
          activeOpacity={0.8}>
          <Text style={styles.addToCartText} textColor="#FFFFFF">
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <>
      <AppBar
        navigation={navigation}
        title="Propofol Injection"
        notification={false}
      />

      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  productContainer: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 12,
    borderBottomColor: '#ccc',
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  searchContainer: {
    backgroundColor: '#ffffff',
  },
  searchBar: {
    borderRadius: 20,
    marginHorizontal: 16,
    backgroundColor: '#F3F6F6',
  },
  productImage: {
    width: 100,
    height: 105,
    borderRadius: 12,
  },
  productDetails: {
    paddingHorizontal: 14,
    flex: 1,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: FONTS.Comfortaa.SemiBold,
    color: '#000000',
  },
  productDescription: {
    fontSize: 13,
    color: '#7E7E7E',
    fontFamily: FONTS.Roboto.Regular,
  },
  productPrice: {
    fontSize: 12,
    color: '#333',
    fontFamily: FONTS.Roboto.Regular,
  },
  productMrp: {
    fontSize: 12,
    fontFamily: FONTS.Roboto.Regular,
    color: '#999999',
  },
  productQty: {
    fontSize: 12,
    fontFamily: FONTS.Roboto.Regular,
    color: '#616161',
  },
  addToCartButton: {
    backgroundColor: '#0ec5c1',
    borderRadius: 5,
    marginTop: 3,
    width: 89,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  addToCartText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: FONTS.Roboto.Regular,
  },
  PriceView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgcontainer: {},
});

export default ProductCategory;
