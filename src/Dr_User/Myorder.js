import React, { useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { Appbar, IconButton, Text } from 'react-native-paper';
import AppBar from '../components/AppBar';
import { FONTS } from '../constant';

const Seruff = require('../images/Seruff.png');
const { width, height } = Dimensions.get('window');

const Myorder = ({ navigation }) => {
  const [cart, setCart] = useState([
    {
      id: '1',
      name: 'Propofol Injection Bp 1 W V 20',
      price: 335,
      quantity: 1,
      srcCode: Seruff,
      description: 'Propofol Emulsion, Diprivan',
    },
    {
      id: '2',
      name: 'Propofol Injection Bp 1 W V 20',
      price: 335,
      quantity: 1,
      srcCode: Seruff,
      description: 'Propofol Emulsion, Diprivan',
    },
    {
      id: '3',
      name: 'Propofol Injection Bp 1 W V 20',
      price: 335,
      quantity: 1,
      srcCode: Seruff,
      description: 'Propofol Emulsion, Diprivan',
    },
  ]);

  const handleIncrement = (item) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1, price: (cartItem.price / cartItem.quantity) * (cartItem.quantity + 1) }
          : cartItem
      )
    );
  };

  const handleDecrement = (item) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1, price: (cartItem.price / cartItem.quantity) * (cartItem.quantity - 1) }
          : cartItem
      )
    );
  };

  const handleDelete = (itemId) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId));
  };

  const orderTotal = cart.reduce(
    (total, item) => total + item.price,
    0,
  );
  const itemDiscount = 25;
  const total = orderTotal - itemDiscount;

  const renderItem = ({ item }) => (
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
            <IconButton icon="delete-outline" size={18} onPress={() => handleDelete(item.id)} />
          </View>
        </View>
        <View style={styles.cartContainer}>
          <View>
            <Text style={styles.productPrice}>Price: ₹{item.price.toFixed(2)}</Text>
            <Text style={styles.productQty}>Qty: {item.quantity}</Text>
          </View>
          <View style={styles.inccontainer}>
            <TouchableOpacity style={styles.button1} onPress={() => handleDecrement(item)}>
              <Text style={styles.buttonText1}>−</Text>
            </TouchableOpacity>
            <View style={styles.countContainer}>
              <Text style={styles.countText}>{item.quantity}</Text>
            </View>
            <TouchableOpacity style={styles.button1} onPress={() => handleIncrement(item)}>
              <Text style={styles.buttonText1}>+</Text>
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
        <Text style={styles.totalItems}>{cart.length} item(s) in cart</Text>
        <TouchableOpacity>
          <Text style={styles.addMoreButton}>+ Add More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flatlistdiv}>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={styles.buttonDiv}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { }}
          activeOpacity={0.8}>
          <Text style={styles.buttonText}>Place order @ ₹{total.toFixed(2)}</Text>
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
    backgroundColor: '#ffffff',
  },
  productContainer: {
    flexDirection: 'row',
    marginHorizontal: '2%',
    marginVertical: 8,
    borderRadius: 8,
    borderBottomColor: '#ccc',
    backgroundColor: '#F9F9F9',
    paddingHorizontal: '3%',
    paddingVertical: 8,
  },
  searchContainer: {
    backgroundColor: '#ffffff',
  },
  searchBar: {
    borderRadius: 20,
    marginHorizontal: '4%',
    backgroundColor: '#F3F6F6',
  },
  productImage: {
    width: width * 0.25,
    height: height * 0.12,
    borderRadius: 12,
  },
  productDetails: {
    paddingHorizontal: '3%',
    flex: 1,
    flexDirection: 'column',
  },
  productName: {
    fontSize: width * 0.03,
    fontWeight: '600',
    fontFamily: FONTS.Comfortaa.SemiBold,
    color: '#000000',
  },
  productDescription: {
    fontFamily: FONTS.Roboto.Regular,
    fontSize: width * 0.025,
    color: '#7E7E7E',
  },
  productPrice: {
    fontSize: width * 0.03,
    fontFamily: FONTS.Roboto.Regular,
    color: '#616161',
  },
  productQty: {
    fontFamily: FONTS.Roboto.Regular,
    fontSize: width * 0.03,
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
    paddingHorizontal: '5%',
    marginVertical: 12,
  },
  totalItems: {
    fontFamily: FONTS.Roboto.Regular,
    fontSize: width * 0.03,
    color: '#7E7E7E',
  },
  addMoreButton: {
    fontFamily: FONTS.Roboto.Medium,
    fontSize: width * 0.03,
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
  buttonText1: {
    color: '#FFFFFF',
    fontSize: width * 0.04,
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
    width: width * 0.08,
    height: width * 0.08,
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
    justifyContent: 'space-between',
  },
  cartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flatlistdiv: {
    height: 470,
  }
});

export default Myorder;
