import React, { useState } from 'react';
import { Appbar, IconButton, Searchbar, Text } from 'react-native-paper';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppBar from '../components/AppBar';
import { FONTS } from '../constant';

const SalesMan = require('../images/Medisine.png');

const { width, height } = Dimensions.get('window');

const SearchProduct = (props) => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const data = [
    {
      id: '1',
      title: 'Injectables',
      description: 'Duis vitae turpis elementum, ullamcorper tortor vel',
      icon: 'injectablesIcon',
    },
    {
      id: '2',
      title: 'Sinusitis',
      description: 'Duis vitae turpis elementum, ullamcorper tortor vel',
      icon: 'sinusitisIcon',
    },
    {
      id: '3',
      title: 'Tonsillitis',
      description: 'Duis vitae turpis elementum, ullamcorper tortor vel',
      icon: 'tonsillitisIcon',
    },
    {
      id: '4',
      title: 'Mauris posuere ullamcorper',
      description: 'Duis vitae turpis elementum, ullamcorper tortor vel',
      icon: 'maurisIcon',
    },
    {
      id: '5',
      title: 'Nullo blandit lectus',
      description: 'Duis vitae turpis elementum, ullamcorper tortor vel',
      icon: 'nulloIcon',
    },
    {
      id: '6',
      title: 'Donec dopibus dignissim',
      description: 'Duis vitae turpis elementum, ullamcorper tortor vel',
      icon: 'donecIcon',
    },
    {
      id: '7',
      title: 'Nunc non odio id',
      description: 'Duis vitae turpis elementum, ullamcorper tortor vel',
      icon: 'nuncIcon',
    },
  ];

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('MultipleProduct', { item })}
      activeOpacity={0.7}
    >
      <View style={styles.cardContainer}>
        <View style={styles.ImageView}>
          <Image
            source={SalesMan}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description} numberOfLines={1}>
            {item.description}
          </Text>
        </View>
        <IconButton
          icon="chevron-right"
          size={24}
          onPress={() => navigation.navigate('MultipleProduct', { item })}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <AppBar navigation={navigation} title="Gynecologist Medicine" />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.searchBar}
          />
        </View>

        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  titleContainer: {
    marginVertical: 12,
  },
  searchBar: {
    marginBottom: 4,
    borderRadius: 12,
    backgroundColor: '#F3F6F6',
  },
  cardContainer: {
    backgroundColor: '#F5F5F9',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    marginVertical: 8,
  },
  ImageView: {
    backgroundColor: '#FCFCFF',
    padding: 8,
    borderRadius: 20,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: FONTS.Comfortaa.SemiBold,
    color: '#000000',
  },
  description: {
    fontSize: 13,
    marginTop: 4,
    color: '#7E7E7E',
    lineHeight: 14,
    fontFamily: FONTS.Roboto.Regular,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 8,
  },
});

export default SearchProduct;
