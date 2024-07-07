import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Icon, TextInput, useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../components/AppBar';
import {FONTS} from '../constant';
import OTPTextInput from 'react-native-otp-textinput';
import {Controller, useForm} from 'react-hook-form';
import {onSubmitError} from '../Lib/CommonFunction';

const Verification = ({navigation}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
    setValue,
  } = useForm({
    defaultValues: {
      otp: '',
    },
  });

  const onSubmitData = values => {
    console.log(values);
  };

  const handleVerification = () => {
    navigation.replace('Main');
    handleSubmit(onSubmitData, onSubmitError)();
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <AppBar
        navigation={navigation}
        backBordered={true}
        actionButton={false}
      />

      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>Verification</Text>
        <Text style={[styles.signUpDetailText, styles.subtitleText]}>
          Please check you message for a five-digit security code and enter it
          below.
        </Text>

        <Controller
          control={control}
          name="otp"
          rules={{
            required: 'OTP is required',
            pattern: {
              value: /^\d{4}$/,
              message: 'OTP must be 4 digits',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <OTPTextInput
              inputCount={4} // Number of OTP digits
              handleTextChange={onChange}
              textInputStyle={styles.otpBox}
              containerStyle={styles.otpContainer}
              defaultValue={value}
            />
          )}
        />

        <Text style={[styles.signUpDetailText, styles.termInfo]}>
          Didn't get a code? {''}
          <Text style={[styles.signUpText]}>Send again</Text>
        </Text>

        <TouchableOpacity
          onPress={handleVerification}
          style={styles.LoginBtn}
          activeOpacity={0.8}>
          <Text style={styles.verifyText}>Verify</Text>
          <Icon source="arrow-right" color="white" size={20} />
        </TouchableOpacity>
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
    textBoxDiv: {
      display: 'flex',
      flexDirection: 'row',
      columnGap: 7,
    },
    outlineTextBox: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#B9B9B9',
    },
    emailTextBox: {
      width: 45,
      marginBottom: 15,
      fontSize: 24,
      fontFamily: 'Roboto Condensed',
    },
    LoginBtn: {
      backgroundColor: '#0EC5C1',
      // backgroundColor: 'linear-gradient(90deg, #0EC5C1 18%, #24E2DE 100%)',
      width: '100%',
      borderColor: 'transparent',
      paddingVertical: 14,
      borderRadius: 10,
      marginTop: 12,
      marginBottom: 24,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    verifyText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: '600',
      fontFamily: FONTS.Comfortaa.Bold,
    },
    signUpDetailText: {
      fontFamily: FONTS.Poppins.Regular,
      fontSize: 13,
      lineHeight: 19.5,
      color: '#999999',
    },
    signUpText: {
      color: theme.colors.themeColor,
      fontSize: 13,
      fontFamily: FONTS.Poppins.Regular,
    },
    termInfo: {
      marginVertical: 25,
      width: 283,
      textAlign: 'center',
      lineHeight: 19.5,
      width: '100%',
    },
    subtitleText: {
      marginTop: 10,
      marginBottom: 28,
    },
    otpBox: {
      borderWidth: 1,
      borderColor: '#B9B9B9',
      borderRadius: 5,
      width: 50,
      height: 60,
      textAlign: 'center',
      fontSize: 18,
      color: '#000000',
      backgroundColor: '#fff',
    },
    otpContainer: {
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  });

export default Verification;
