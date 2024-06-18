import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Appbar, IconButton, Searchbar } from 'react-native-paper';
import AppBar from '../components/AppBar';
import { FONTS } from '../constant';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MultipleProduct = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation(); // Hook for navigation

  const handlePress = () => {
    navigation.navigate('ProductCategory'); // Navigate to the Details screen
  };

  const products = [
    {
      id: '1',
      title: 'DIPRIVAN injection',
      subtitle: 'Fresenious Propoven',
      buttonText: 'Diprivan',
    },
    {
      id: '2',
      title: 'Propofol Emulsion Injection',
      subtitle: 'Propofol Emulsion',
      buttonText: 'Propifol',
    },
    {
      id: '3',
      title: 'Mayoprofol Injectables Emulsion',
      subtitle: 'propofol',
      buttonText: 'Mayoprofol',
    },
    {
      id: '4',
      title: 'Propofol Emulsion Injection',
      subtitle: 'Propofol Emulsion',
      buttonText: 'Propifol',
    },
    {
      id: '5',
      title: 'DIPRIVAN injection',
      subtitle: 'Fresenious Propoven',
      buttonText: 'Diprivan',
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={handlePress}
      activeOpacity={0.7}>
      <View>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productSubtitle}>{item.subtitle}</Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{item.buttonText}</Text>
        </View>
      </View>
      <View style={styles.viewContainer}>
        <IconButton icon="chevron-right" size={24} onPress={handlePress} />
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <AppBar navigation={navigation} title="Gynecologist Medicine" />
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.searchBar}
          />
        </View>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatListContainer}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('4%'),
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    padding: wp('1%'),
    marginBottom: hp('2%'),
  },
  searchInput: {
    flex: 1,
    marginLeft: wp('2%'),
  },
  productContainer: {
    backgroundColor: '#F8F8F8',
    padding: wp('4%'),
    borderRadius: 10,
    marginBottom: hp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: wp('4%'),
    fontWeight: '600',
    color: '#000000',
    fontFamily: FONTS.Comfortaa.SemiBold,
  },
  productSubtitle: {
    color: '#7E7E7E',
    fontSize: wp('3.5%'),
    marginBottom: hp('1%'),
    lineHeight: hp('3%'),
    fontFamily: FONTS.Roboto.Regular,
  },
  buttonContainer: {
    backgroundColor: '#7EDEDC',
    alignSelf: 'flex-start',
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('1%'),
    borderRadius: 5,
  },
  buttonText: {
    color: '#000000',
    fontFamily: FONTS.Roboto.Regular,
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: wp('2%'),
  },
  flatListContainer: {
    paddingBottom: hp('2%'),
  },
  centerTitle: {
    fontSize: wp('2%'),
  },
  searchBar: {
    borderRadius: 20,
    backgroundColor: '#F3F6F6',
  },
});

export default MultipleProduct;
