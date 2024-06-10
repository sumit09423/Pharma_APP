import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Appbar, IconButton, Text} from 'react-native-paper';
import AppBar from '../components/AppBar';
import {FONTS} from '../constant';

const Seruff = require('../images/Seruff.png');
const Myorder = ({navigation}) => {
  const [cart, setCart] = useState([
    {
      id: '1',
      name: 'Propofol Injection Bp 1 W V 20',
      price: 335,
      quantity: 1,
      srcCode: Seruff,
      description: 'Propofol Emulsion, Diprivan',
    },
    // { id: '2', name: 'Propofol Injection Bp 1 W V 20', price: 335, quantity: 1 },
    // { id: '3', name: 'Propofol Injection Bp 1 W V 20', price: 335, quantity: 1 },
  ]);

  const orderTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const itemDiscount = 25;
  const total = orderTotal - itemDiscount;

  const renderItem = ({item}) => (
    <View style={styles.productContainer}>
      <View style={styles.imgcontainer}>
        <Image source={item.srcCode} style={styles.productImage} />
      </View>
      <View style={styles.productDetails}>
        <View style={styles.childcontainer}>
          <View>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
          </View>
          <View>
            <IconButton icon="delete-outline" size={18} />
          </View>
        </View>
        <View style={styles.cartContainer}>
          <View>
            <Text style={styles.productPrice}>Price: ₹{item.price}</Text>
            <Text style={styles.productQty}>Qty: {item.qty}</Text>
          </View>
          <View style={styles.inccontainer}>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.buttonText}>−</Text>
            </TouchableOpacity>
            <View style={styles.countContainer}>
              <Text style={styles.countText}>1</Text>
            </View>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} title="Your Cart" notification={false} />

      <View style={styles.sectionContainer}>
        <Text style={styles.totalItems}>3 items into cart</Text>
        <TouchableOpacity>
          <Text style={styles.addMoreButton}>+ Add More</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.buttonDiv}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
          activeOpacity={0.8}>
          <Text style={styles.buttonText}>Place order @ 900</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerTitle: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appbar: {
    backgroundColor: '#fff',
  },

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  productContainer: {
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 8,
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
    width: 95,
    height: 85,
    borderRadius: 12,
  },
  productDetails: {
    paddingHorizontal: 14,
    flex: 1,
    flexDirection: 'column',
  },
  productName: {
    fontSize: 11,
    fontWeight: '600',
    fontFamily: FONTS.Comfortaa.SemiBold,
    color: '#000000',
  },
  productDescription: {
    fontFamily: FONTS.Roboto.Regular,
    fontSize: 10,
    color: '#7E7E7E',
  },
  productPrice: {
    fontSize: 11,
    fontFamily: FONTS.Roboto.Regular,
    color: '#616161',
  },
  productMrp: {
    fontSize: 12,
    color: '#333',
  },
  productQty: {
    fontFamily: FONTS.Roboto.Regular,
    fontSize: 11,
    color: '#616161',
  },
  addToCartButton: {
    backgroundColor: '#0ec5c1',
    borderRadius: 5,
    marginTop: 3,
    width: 110,
    paddingHorizontal: 18,
    paddingVertical: 7,
  },
  addToCartText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  PriceView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 12,
  },
  totalItems: {
    fontFamily: FONTS.Roboto.Regular,
    fontSize: 11,
    color: '#7E7E7E',
  },
  addMoreButton: {
    fontFamily: FONTS.Roboto.Medium,
    fontSize: 11,
    color: '#0EC5C1',
  },
  buttonDiv: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#00BCD4',
    padding: 12,
    width: '80%',
    borderRadius: 30,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 158,
  },
  inccontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0f7f9',
    borderRadius: 25,
    padding: 2,
  },
  button1: {
    backgroundColor: '#00bcd4',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: FONTS.Comfortaa.Bold,
    lineHeight: 16.73,
  },
  countContainer: {
    marginHorizontal: 16,
  },
  countText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  childcontainer: {
    flexDirection: 'row',
  },
  cartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Myorder;
