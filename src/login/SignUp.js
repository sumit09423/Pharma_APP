import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, TextInput, useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../components/AppBar';
import {FONTS} from '../constant';
const googleImg = require('../images/Google.png');
const fbImg = require('../images/Facebook.png');

const SignUp = ({navigation}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [formValues, setFormValues] = useState({
    email: '',
    contact: '',
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
    <SafeAreaView style={styles.mainContainer}>
      <AppBar
        navigation={navigation}
        backBordered={true}
        actionButton={false}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>Welcome to Doctor Hub</Text>
        <Text style={[styles.signUpDetailText, styles.subtitleText]}>
          Already have an account ?{' '}
          <Text
            style={[
              styles.signUpText,
              {paddingLeft: 4, marginLeft: 5, marginTop: 20},
            ]}
            onPress={() => navigation.navigate('Login')}>
            Log In
          </Text>
        </Text>

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
          value={formValues.contact}
          onChangeText={value => handleChange('contact', value)}
          placeholder="Contact Number"
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

        <TouchableOpacity
          onPress={() => navigation.navigate('Verification')}
          style={styles.LoginBtn}
          activeOpacity={0.8}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.orDiv}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.googleFbDiv}>
          <TouchableOpacity
            onPress={() => null}
            style={[styles.googleFbBtn]}
            activeOpacity={0.8}>
            <Image source={googleImg} style={styles.googleFbImg} />
            <Text style={styles.googleFbLabel}>With Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => null}
            style={[styles.googleFbBtn]}
            activeOpacity={0.8}>
            <Image source={fbImg} style={styles.googleFbImg} />
            <Text style={styles.googleFbLabel}>With Facebook</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.signUpDetailText, styles.termInfo]}>
          By Clicking sign up you are agreeing to the {'\n'}
          <Text style={[styles.signUpText]}>Terms of use</Text> and the{' '}
          <Text style={styles.signUpText}>Privacy Policy</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const createStyles = theme =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: '#fbfbfb',
    },
    welcome: {
      color: '#000000',
      fontWeight: '600',
      fontSize: 16,
      marginTop: 10,
      //   marginBottom: 12,
      fontFamily: FONTS.Comfortaa.SemiBold,
      letterSpacing: -0.24,
    },
    outlineTextBox: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#B9B9B9',
    },
    emailTextBox: {
      paddingHorizontal: 6,
      marginBottom: 15,
    },
    LoginBtn: {
      backgroundColor: '#0EC5C1',
      // backgroundColor: 'linear-gradient(90deg, #0EC5C1 18%, #24E2DE 100%)',
      width: '100%',
      borderColor: 'transparent',
      paddingVertical: 14,
      borderRadius: 10,
      marginTop: 12,
    },
    loginText: {
      textAlign: 'center',
      fontWeight: '600',
      fontFamily: FONTS.Comfortaa.Bold,
      fontSize: 14,
      color: '#FFFFFF',
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
      fontFamily: FONTS.IBMPlexSans.Regular,
    },
    googleFbDiv: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    googleFbBtn: {
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#e6e6e6',
      backgroundColor: '#e9ebeb',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 9,
      paddingVertical: 7,
    },
    googleFbLabel: {
      fontWeight: '300',
      fontFamily: FONTS.IBMPlexSans.Light,
      fontSize: 14,
      paddingLeft: 10,
      color: '#000000',
    },
    googleFbImg: {
      width: 24,
      height: 24,
    },
    signUpDetailText: {
      fontFamily: FONTS.Poppins.Regular,
      fontSize: 13,
      color: '#999999',
    },
    signUpText: {
      color: theme.colors.themeColor,
      fontSize: 13,
      fontFamily: FONTS.Poppins.Regular,
    },
    termInfo: {
      marginTop: 29,
      width: 283,
      textAlign: 'center',
      lineHeight: 19.5,
      marginBottom: 24,
      width: '100%',
    },
    subtitleText: {
      marginTop: 10,
      marginBottom: 28,
    },
  });

export default SignUp;
