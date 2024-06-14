import React, {useState} from 'react';
import {
  Image,
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
import {Controller, useForm} from 'react-hook-form';
import {useFormContext} from '../context/FormContext';
const logoImg = require('../images/Profile.png');

const Profile = ({navigation}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  // const [formValues, setFormValues] = useState({
  //   fname: '',
  //   lname: '',
  //   degree: '',
  //   licenceNumber: '',
  // });
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({
    defaultValues: {
      fname: '',
      lname: '',
      degree: '',
      licenceNumber: '',
    },
  });
  const formValues = watch();
  const {formData, setFormData} = useFormContext();

  const handleChange = (name, value) => {
    // setFormValues({
    //   ...formValues,
    //   [name]: value,
    // });
  };

  const handleContinue = () => {
    navigation.navigate('Profile2');
    setFormData({...formData, ...formValues});
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <AppBar
        navigation={navigation}
        backBordered={true}
        actionButton={false}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.step}>Step 1 to 3</Text>
        <Text style={styles.welcome}>Your Profile</Text>
        <Text style={[styles.signUpDetailText, styles.subtitleText]}>
          Update your profile to get the product details from seller.
        </Text>

        <View style={styles.imgDiv}>
          <Image source={logoImg} style={styles.profileImg} />
        </View>

        <Controller
          control={control}
          name="fname"
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              mode="outlined"
              value={value}
              onChangeText={onChange}
              placeholder="First Name"
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
          name="lname"
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              mode="outlined"
              value={value}
              onChangeText={onChange}
              placeholder="Last Name"
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
          name="degree"
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              mode="outlined"
              value={value}
              onChangeText={onChange}
              placeholder="Dr's Degree"
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
          name="licenceNumber"
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              mode="outlined"
              value={value}
              onChangeText={onChange}
              placeholder="Licence Number"
              style={styles.emailTextBox}
              outlineColor="transparent"
              outlineStyle={styles.outlineTextBox}
              textColor="#818181"
              placeholderTextColor="#818181"
            />
          )}
        />

        <TouchableOpacity
          onPress={handleContinue}
          style={styles.LoginBtn}
          activeOpacity={0.8}>
          <Text style={styles.continueText}>Continue</Text>
          <Icon source="arrow-right" color="white" size={18} />
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
      display: 'flex',
      position: 'relative',
      paddingHorizontal: 20,
      backgroundColor: '#fbfbfb',
    },
    step: {
      marginTop: 10,
      color: '#454545',
      fontSize: 12,
      fontWeight: '600',
      letterSpacing: -0.24,
      fontFamily: FONTS.Comfortaa.SemiBold,
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
    imgDiv: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 16,
      marginBottom: 28,
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
    continueText: {
      color: '#FFFFFF',
      fontFamily: FONTS.Comfortaa.Bold,
      fontSize: 14,
      fontWeight: '600',
    },
    signUpDetailText: {
      fontFamily: FONTS.Poppins.Regular,
      fontSize: 13,
      lineHeight: 19.5,
      color: '#999999',
    },
    signUpText: {
      color: theme.colors.themeColor,
    },
    termInfo: {
      marginTop: 29,
      width: 283,
      textAlign: 'center',
      lineHeight: 19.5,
    },
    subtitleText: {
      marginTop: 10,
      marginBottom: 28,
    },
  });

export default Profile;
