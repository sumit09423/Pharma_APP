import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Appbar, Card, Searchbar, Text, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AppBar from '../components/AppBar';
import { FONTS } from '../constant';

const SalesMan = require('../images/SalesMan.png');
const UserAvailable = require('../images/user2.png');

const Category = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation(); // Hook for navigation

  const handlePress = () => {
    navigation.navigate('SearchProduct'); // Navigate to the Details screen
  };

  return (
    <View style={styles.container}>
      <AppBar userName="Dr Hub" />
      <View style={styles.titleContainer1}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
        />
      </View>
      <TouchableOpacity
        style={[styles.cardContainer2, styles.cardCommonContainer]}
        onPress={handlePress}
        activeOpacity={0.7}>
        <Card.Title
          title="Gynecologist"
          subtitle="Mauris a finibus ante, aliquet tincidunt ipsum"
          titleStyle={[styles.cardText, styles.cardTitle]}
          subtitleNumberOfLines={2}
          subtitleStyle={[styles.cardText, styles.cardSubTitle]}
          left={props => (
            <Image
              source={UserAvailable}
              style={styles.userImage}
            />
          )}
          leftStyle={styles.leftStyle}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.cardContainer2, styles.cardCommonContainer]}
        activeOpacity={0.7}>
        <Card.Title
          title="Pediatrician"
          subtitle="Mauris a finibus ante, aliquet tincidunt ipsum"
          titleStyle={[styles.cardText, styles.cardTitle]}
          subtitleNumberOfLines={2}
          subtitleStyle={[styles.cardText, styles.cardSubTitle]}
          left={props => (
            <Image
              source={UserAvailable}
              style={styles.userImage}
            />
          )}
          leftStyle={styles.leftStyle}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.cardContainer2, styles.cardCommonContainer]}
        activeOpacity={0.7}>
        <Card.Title
          title="GP Doctors"
          subtitle="Mauris a finibus ante, aliquet tincidunt ipsum"
          titleStyle={[styles.cardText, styles.cardTitle]}
          subtitleNumberOfLines={2}
          subtitleStyle={[styles.cardText, styles.cardSubTitle]}
          left={props => (
            <Image
              source={UserAvailable}
              style={styles.userImage}
            />
          )}
          leftStyle={styles.leftStyle}
        />
      </TouchableOpacity>
      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handlePress}>
          <Text style={styles.buttonText}>Search Products</Text>
        </TouchableOpacity>
      </View>
      {/* <NewTab /> */}
    </View>
  );
};

const { width } = Dimensions.get('window');

const createStyles = theme => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  titleContainer1: {
    marginTop: 6,
    marginBottom: 6,
  },
  cardCommonContainer: {
    height: 95,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 15,
    marginVertical: 6,
    width: '100%',
  },
  searchBar: {
    backgroundColor: '#F3F6F6',
    borderRadius: 20,
  },
  cardText: {
    paddingHorizontal: 20,
    fontFamily: FONTS.Comfortaa.Medium,
    fontWeight: '500',
  },
  cardTitle: {
    fontSize: width * 0.05,
    color: '#000000',
  },
  cardSubTitle: {
    fontSize: width * 0.03,
    lineHeight: 15,
    color: '#767575',
  },
  cardContainer2: {
    backgroundColor: '#F8F8F8',
  },
  btncontainer: {
    marginTop: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#00c4cc',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: '80%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: width * 0.04,
    fontWeight: '600',
    fontFamily: FONTS.Comfortaa.Bold,
    textAlign: 'center',
    lineHeight: 17.8,
  },
  leftStyle: {
    paddingRight: 50,
  },
  userImage: {
    width: 65,
    height: 65,
    borderRadius: 20,
  },
});

export default Category;
