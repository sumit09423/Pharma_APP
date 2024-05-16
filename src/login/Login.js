import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Checkbox, IconButton, TextInput, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const logoImg = require('../images/Logo.png');

const Login = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(false);

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
        secureTextEntry={false}
        right={<TextInput.Icon icon="email" />}
      />
      <IconButton icon="eye-off" size={20} onPress={console.log('click')} />
      <IconButton icon="close" size={20} onPress={() => {}} />
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
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
      marginBottom: 38,
    },
    outlineTextBox: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#B9B9B9',
    },
    emailTextBox: {
      width: 316,
      paddingHorizontal: 6,
      marginBottom: 15,
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
