import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
  Alert,
} from 'react-native';
import {Button, Checkbox, TextInput, useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FONTS} from '../constant';
import {Controller, useForm} from 'react-hook-form';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import {onSubmitError} from '../Lib/CommonFunction';
import {useDispatch, useSelector} from 'react-redux';
import {setUserType} from '../Reducer/CommonReducer';
const logoImg = require('../images/Logo.png');
const googleImg = require('../images/Google.png');
const fbImg = require('../images/Facebook.png');

const {width, height} = Dimensions.get('window');

const Login = ({navigation}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [checked, setChecked] = useState(false);
  // const [formValues, setFormValues] = useState({
  //   email: '',
  //   password: '',
  // });

  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const formValues = watch();
  const dispatch = useDispatch();
  const data = useSelector(state => state.CommonReducer);

  console.log('User Type', data);

  const handleChange = (name, value) => {
    // setFormValues({
    //   ...formValues,
    //   [name]: value,
    // });
  };

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const onSubmitData = values => {
    console.log('Login', values);
    axios
      .post('https://guyana-joins-organize-alarm.trycloudflare.com/login', {
        ...values,
      })
      .then(response => {
        console.log('response:', response.data);
        Toast.show({
          type: 'success',
          text1: 'Login success ',
        });
        navigation.replace('Main');
      })
      .catch(error => {
        console.log('Error', error);
        Toast.show({
          type: 'error',
          text1:
            error.response.data.message ||
            'An error occurred. Please try again.',
        });
      });
  };

  const handleLogin = () => {
    handleSubmit(onSubmitData, onSubmitError)();
    // navigation.replace('Main');
    dispatch(setUserType('Admin'));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewDiv}>
        <Image source={logoImg} style={styles.logo} />
        <Text style={styles.welcome}>Welcome back!</Text>

        <Controller
          control={control}
          name="email"
          rules={{
            required: 'Email is required',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              mode="outlined"
              value={value}
              onChangeText={onChange}
              placeholder="Email"
              style={styles.emailTextBox}
              outlineColor="transparent"
              outlineStyle={styles.outlineTextBox}
              textColor="#818181"
              placeholderTextColor="#818181"
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Password is required',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              mode="outlined"
              value={value}
              onChangeText={onChange}
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
          )}
        />

        <View style={styles.innerDiv}>
          <View style={styles.rpDiv}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              uncheckedColor="#D7D7D7"
              color="#D7D7D7"
            />
            <Text style={styles.rpText}>Remember password</Text>
          </View>
          <Text style={styles.fpText}>Forgot password?</Text>
        </View>

        <TouchableOpacity
          onPress={handleLogin}
          style={styles.LoginBtn}
          activeOpacity={0.8}>
          <Text style={styles.loginText}>Log In</Text>
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

        <Text style={styles.signUpDetailText}>
          Don't have an account{' '}
          <Text
            style={styles.signUpText}
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            Sign Up
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const createStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fbfbfb',
    },
    scrollViewDiv: {
      paddingHorizontal: width * 0.05,
      alignItems: 'center',
    },
    logo: {
      marginTop: height * 0.1,
      marginBottom: height * 0.01,
      width: width * 0.4,
      height: height * 0.1,
      resizeMode: 'contain',
    },
    welcome: {
      color: '#000000',
      fontSize: width * 0.04,
      fontWeight: '600',
      fontFamily: FONTS.Comfortaa.SemiBold,
      letterSpacing: -0.24,
      marginBottom: height * 0.04,
    },
    outlineTextBox: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#B9B9B9',
    },
    emailTextBox: {
      width: '100%',
      paddingHorizontal: 6,
      marginBottom: height * 0.02,
    },
    innerDiv: {
      width: '100%',
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
      fontSize: width * 0.03,
      fontFamily: FONTS.Poppins.Regular,
    },
    fpText: {
      color: '#999999',
      fontFamily: FONTS.Poppins.Regular,
      fontSize: width * 0.035,
    },
    LoginBtn: {
      backgroundColor: '#0EC5C1',
      width: '100%',
      borderColor: 'transparent',
      paddingVertical: height * 0.02,
      borderRadius: 10,
      marginTop: height * 0.015,
    },
    loginText: {
      textAlign: 'center',
      fontFamily: FONTS.Comfortaa.Bold,
      fontSize: width * 0.04,
      fontWeight: '600',
      color: '#FFFFFF',
    },
    orDiv: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: height * 0.03,
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: '#ccc',
    },
    orText: {
      marginHorizontal: width * 0.03,
      fontSize: width * 0.035,
      color: '#888',
      fontFamily: FONTS.IBMPlexSans.Regular,
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
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: width * 0.03,
      paddingVertical: height * 0.01,
    },
    googleFbLabel: {
      fontFamily: FONTS.IBMPlexSans.Light,
      fontSize: width * 0.035,
      fontWeight: '300',
      paddingLeft: width * 0.02,
      color: '#000000',
    },
    googleFbImg: {
      width: width * 0.06,
      height: width * 0.06,
    },
    signUpDetailText: {
      marginTop: height * 0.03,
      fontSize: width * 0.035,
      color: '#999999',
      marginBottom: height * 0.03,
      fontFamily: FONTS.Poppins.Regular,
    },
    signUpText: {
      color: theme.colors.themeColor,
      fontFamily: FONTS.Poppins.Regular,
      fontSize: width * 0.035,
    },
  });

export default Login;
