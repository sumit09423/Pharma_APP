import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TextInput, useTheme} from 'react-native-paper';
const logoImg = require('../images/Logo.png');

const Login = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Text style={styles.welcome}>Welcome back!</Text>

      <TextInput
        mode="outlined"
        value={text}
        onChangeText={text => setText(text)}
        placeholder="Email"
        style={styles.emailTextBox}
        outlineColor="transparent"
        outlineStyle={styles.outlineTextBox}
        textColor="#818181"
        placeholderTextColor="#818181"
      />

      <TextInput
        mode="outlined"
        value={text}
        onChangeText={text => setText(text)}
        placeholder="Password"
        style={styles.emailTextBox}
        outlineColor="transparent"
        outlineStyle={styles.outlineTextBox}
        textColor="#818181"
        placeholderTextColor="#818181"
        secureTextEntry
        right={<TextInput.Icon icon="email" />}
      />
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
      marginTop: 88,
      marginBottom: 8,
    },
    welcome: {
      color: '#000000',
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'Comfortaa',
      letterSpacing: -0.24,
    },
    outlineTextBox: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#B9B9B9',
    },
    emailTextBox: {
      width: 316,
      paddingHorizontal: 6,
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

export default Login;
