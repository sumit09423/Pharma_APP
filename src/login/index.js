import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FONTS } from '../constant';
const logoImg = require('../images/LogoWithName.png');

const Welcome = ({ navigation }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Text style={styles.title}>Let's get started!</Text>
      <Text style={styles.subtitle}>
        Login to enjoy the features we've provided, and save time!
      </Text>
      <View style={styles.innerDiv}>
        <Text>...</Text>
        <View style={styles.btnDiv}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={[styles.loginBtn, styles.btn]}
            activeOpacity={0.8}>
            <Text style={[{ color: '#FFFFFF' }, styles.loginSignUpText]}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={[styles.signupBtn, styles.btn]}
            activeOpacity={0.8}>
            <Text
              style={[
                {
                  color: theme.colors.themeColor,
                },
                styles.loginSignUpText,
              ]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.loginText}>Are you a seller? Get here! </Text>
      </View>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get('window');

const createStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
    },
    logo: {
      marginTop: height * 0.2, // Adjusted for different screen sizes
      marginBottom: height * 0.05,
      width: width * 0.6, // Adjusted for different screen sizes
      resizeMode: 'contain', // Ensures the image scales correctly
    },
    title: {
      color: '#000000',
      fontSize: 20,
      fontFamily: FONTS.Comfortaa.SemiBold,
      letterSpacing: -0.24,
    },
    subtitle: {
      color: '#999999',
      fontSize: 14,
      lineHeight: 20,
      width: '80%', // Adjusted for different screen sizes
      textAlign: 'center',
      marginTop: 10,
      fontFamily: FONTS.Roboto.Regular,
      letterSpacing: -0.24,
    },
    innerDiv: {
      backgroundColor: theme.colors.themeColor,
      height: height * 0.35, // Adjusted for different screen sizes
      position: 'absolute',
      bottom: 0,
      width: '100%',
      borderTopLeftRadius: 29,
      borderTopRightRadius: 29,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    btnDiv: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%',
    },
    btn: {
      width: width * 0.35, // Adjusted for different screen sizes
      height: 46,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#F0FEFE',
      alignItems: 'center',
      justifyContent: 'center',
    },
    signupBtn: {
      backgroundColor: '#FFFFFF',
    },
    loginText: {
      color: '#FFFFFF',
      fontFamily: FONTS.Roboto.Regular,
    },
    loginSignUpText: {
      fontFamily: FONTS.Comfortaa.SemiBold,
    },
  });

export default Welcome;
