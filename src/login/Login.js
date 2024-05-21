import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  Checkbox,
  IconButton,
  TextInput,
  useTheme,
} from 'react-native-paper';
const logoImg = require('../images/Logo.png');
const googleImg = require('../images/Google.png');
const fbImg = require('../images/Facebook.png');

const Login = props => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [checked, setChecked] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Text style={styles.welcome}>Welcome back!</Text>

      <TextInput
        mode="outlined"
        value={formValues.email}
        onChangeText={value => handleChange('email', value)}
        placeholder="Email"
        style={styles.emailTextBox}
        outlineColor="transparent"
        outlineStyle={styles.outlineTextBox}
        textColor="#818181"
        placeholderTextColor="#818181"
      />

      <TextInput
        mode="outlined"
        value={formValues.password}
        onChangeText={value => handleChange('password', value)}
        placeholder="Password"
        style={styles.emailTextBox}
        outlineColor="transparent"
        outlineStyle={styles.outlineTextBox}
        textColor="#818181"
        placeholderTextColor="#818181"
        secureTextEntry={secureTextEntry}
        right={
          <TextInput.Icon
            icon={secureTextEntry ? 'eye-off-outline' : 'eye-outline'}
            onPress={toggleSecureTextEntry}
          />
        }
      />

      <View style={styles.innerDiv}>
        <View style={styles.rpDiv}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={styles.rpText}>Remember password</Text>
        </View>
        <Text style={styles.fpText}>Forgot password?</Text>
      </View>
      <Button
        mode="outlined"
        onPress={() => props.navigation.navigate('Login')}
        style={styles.LoginBtn}
        textColor="#FFFFFF">
        Log In
      </Button>
      <View style={styles.orDiv}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.googleFbDiv}>
        <Button
          mode="outlined"
          onPress={() => null}
          style={[styles.googleFbBtn, styles.googleBtn]}
          textColor="#000000">
          {/* <Image source={googleImg} style={styles.googleImg} /> */}
          With Google
        </Button>
        <Button
          mode="outlined"
          onPress={() => null}
          style={[styles.googleFbBtn, styles.fbBtn]}
          textColor="#000000">
          {/* <Image source={fbImg} style={styles.fbImg} /> */}
          With Facebook
        </Button>
      </View>
      <Text style={styles.signUpDetailText}>
        Don't have an account{' '}
        <Text
          style={styles.signUpText}
          onPress={() => props.navigation.navigate('SignUp')}>
          Sign Up
        </Text>
      </Text>
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
      paddingHorizontal: 32,
      backgroundColor: '#fbfbfb',
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
    innerDiv: {
      // width: '100%',
      // flex: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    rpDiv: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    rpText: {
      color: '#736D6D',
      fontSize: 12,
      fontFamily: 'Poppins',
    },
    fpText: {
      color: '#999999',
      fontFamily: 'Poppins',
      fontSize: 13,
    },
    LoginBtn: {
      backgroundColor: '#0EC5C1',
      // backgroundColor: 'linear-gradient(90deg, #0EC5C1 18%, #24E2DE 100%)',
      width: '100%',
      borderColor: 'transparent',
      paddingVertical: 5,
      borderRadius: 10,
      fontFamily: 'Comfortaa',
      fontSize: 14,
      fontWeight: 700,
      marginTop: 12,
    },
    orDiv: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 20,
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: '#ccc',
    },
    orText: {
      marginHorizontal: 10,
      fontSize: 13,
      color: '#888',
    },
    googleFbDiv: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    googleFbBtn: {
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#e6e6e6',
      backgroundColor: '#e9ebeb',
      fontFamily: 'IBM Plex Sans',
      fontSize: 13,
      fontWeight: 300,
    },
    // googleImg: {
    //   width: 25,
    // },
    signUpDetailText: {
      marginTop: 29,
      fontFamily: 'Poppins',
      fontSize: 13,
    },
    signUpText: {
      color: theme.colors.themeColor,
    },
  });

export default Login;
