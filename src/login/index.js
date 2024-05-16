import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
const logoImg = require('../images/LogoWithName.png');

const Welcome = props => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Text style={styles.title}>Let's get started!</Text>
      <Text style={styles.subtitle}>
        Login to enjoy the features we've provided, and save time!
      </Text>
      <View style={styles.innerDiv}>
        <Text>...</Text>
        <View style={styles.btnDiv}>
          <Button
            mode="outlined"
            onPress={() => props.navigation.navigate('Login')}
            style={[styles.loginBtn, styles.btn]}
            textColor="#FFFFFF">
            Login
          </Button>
          <Button
            mode="contained"
            onPress={() => console.log('Pressed')}
            style={[styles.signupBtn, styles.btn]}
            textColor={theme.colors.themeColor}
            buttonColor="#FFFFFF">
            Sign Up
          </Button>
        </View>
        <Text style={styles.loginText}>Are you a seller? Get here! </Text>
      </View>
    </View>
  );
};

const createStyles = theme =>
  StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      flex: 1,
    },
    logo: {
      marginTop: 158,
      marginBottom: 28,
    },
    title: {
      color: '#000000',
      fontSize: 20,
      fontWeight: '600',
      fontFamily: 'Comfortaa',
      letterSpacing: -0.24,
    },
    subtitle: {
      color: '#999999',
      fontSize: 14,
      lineHeight: 20,
      width: 199,
      textAlign: 'center',
      marginTop: 10,
      fontFamily: 'Roboto',
      letterSpacing: -0.24,
    },
    innerDiv: {
      backgroundColor: theme.colors.themeColor,
      height: 280,
      position: 'absolute',
      bottom: 0,
      width: '100%',
      borderRadius: 29,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    btnDiv: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%',
    },
    btn: {
      width: 140,
      height: 46,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#F0FEFE',
    },
    loginText: {
      color: '#FFFFFF',
    },
  });

export default Welcome;
