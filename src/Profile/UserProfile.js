import React, {lazy} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../components/AppBar';
import {Appbar, Searchbar, useTheme} from 'react-native-paper';
import {FONTS} from '../constant';
const BottomTab = lazy(() => import('../components/BottomTab'));

const logoImg = require('../images/Profile.png');

const UserProfile = ({navigation}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <AppBar navigation={navigation} title="Your Profile" />

      <ScrollView style={styles.container}>
        <View style={styles.imgDiv}>
          <Image source={logoImg} style={styles.profileImg} />

          <View style={styles.textView}>
            <Text style={styles.title}>Dr Nirav Patel</Text>
            <Text style={styles.subTitle}>
              26/0X/19X9 {'\n'}Pediatric, MBBS
            </Text>
          </View>
        </View>
        <View style={styles.licenceAddressDiv}>
          <Text style={styles.licenceText}>
            Licence Number <Text style={styles.colonSpan}>:</Text>{' '}
            <Text style={styles.licenceNo}> XX-0000-XX</Text>
          </Text>
          <Text style={styles.addressText}>
            Vandematram Hills, Satyamev Vista, 100 Feet Rd, Near Vishwas City-6,
            Gota, Ahmedabad, Gujarat 382481
          </Text>
        </View>
        <View style={styles.infoDiv}>
          <Text style={styles.infoText}>
            Info : {'\n'}
            <Text style={styles.info}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              eu nisl vel nunc ultrices elementum vitae sit amet justo. Nulla
              laoreet a nisi eu imperdiet.
            </Text>{' '}
            {'\n'}
          </Text>
        </View>

        <View style={styles.btncontainer}>
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Order History</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* <BottomTab /> */}
    </SafeAreaView>
  );
};

const createStyles = theme =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#fbfbfb',
    },
    container: {
      flex: 1,
      paddingHorizontal: 32,
    },
    imgDiv: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    textView: {
      marginLeft: 18,
    },
    title: {
      color: '#000000',
      fontSize: 20,
      fontWeight: '500',
      fontFamily: FONTS.Comfortaa.Medium,
    },
    subTitle: {
      color: '#999999',
      fontSize: 13,
      lineHeight: 19.5,
      fontFamily: FONTS.Poppins.Regular,
    },
    licenceAddressDiv: {
      marginVertical: 38,
    },
    licenceText: {
      fontFamily: FONTS.Poppins.Regular,
      fontSize: 13,
      color: '#000000',
    },
    colonSpan: {
      fontFamily: FONTS.Poppins.Regular,
      fontSize: 13,
      color: '#999999',
    },
    licenceNo: {
      fontFamily: FONTS.Poppins.Regular,
      fontSize: 13,
      color: '#4e4e4e',
    },
    addressText: {
      fontFamily: FONTS.Poppins.Regular,
      fontSize: 13,
      color: '#000000',
      lineHeight: 19.5,
    },
    infoDiv: {
      marginTop: 14,
    },
    infoText: {
      fontFamily: FONTS.Poppins.Medium,
      fontSize: 13,
      color: '#000000',
      fontWeight: '500',
      lineHeight: 22,
    },
    info: {
      fontFamily: FONTS.Poppins.Regular,
      fontSize: 13,
      color: '#999999',
      lineHeight: 22,
    },
    btncontainer: {
      marginTop: 95,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#0EC5C1',
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 30,
      width: '80%',
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 15,
      fontWeight: '600',
      fontFamily: FONTS.Comfortaa.Bold,
      textAlign: 'center',
      lineHeight: 16.73,
    },
  });

export default UserProfile;
