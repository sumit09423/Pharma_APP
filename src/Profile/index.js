import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  Checkbox,
  Icon,
  IconButton,
  TextInput,
  useTheme,
} from 'react-native-paper';
const logoImg = require('../images/Profile.png');

const Profile = props => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
    degree: '',
    licenceNumber: '',
  });

  const handleChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.step}>Step 1 to 3</Text>
      <Text style={styles.welcome}>Your Profile</Text>
      <Text style={[styles.signUpDetailText, styles.subtitleText]}>
        Update your profile to get the product details from seller.
      </Text>

      <View style={styles.imgDiv}>
        <Image source={logoImg} style={styles.profileImg} />
      </View>

      <TextInput
        mode="outlined"
        value={formValues.fname}
        onChangeText={value => handleChange('fname', value)}
        placeholder="First Name"
        style={styles.emailTextBox}
        outlineColor="transparent"
        outlineStyle={styles.outlineTextBox}
        textColor="#818181"
        placeholderTextColor="#818181"
      />

      <TextInput
        mode="outlined"
        value={formValues.lname}
        onChangeText={value => handleChange('lname', value)}
        placeholder="Last Name"
        style={styles.emailTextBox}
        outlineColor="transparent"
        outlineStyle={styles.outlineTextBox}
        textColor="#818181"
        placeholderTextColor="#818181"
      />

      <TextInput
        mode="outlined"
        value={formValues.degree}
        onChangeText={value => handleChange('degree', value)}
        placeholder="Dr's Degree"
        style={styles.emailTextBox}
        outlineColor="transparent"
        outlineStyle={styles.outlineTextBox}
        textColor="#818181"
        placeholderTextColor="#818181"
      />

      <TextInput
        mode="outlined"
        value={formValues.licenceNumber}
        onChangeText={value => handleChange('licenceNumber', value)}
        placeholder="Licence Number"
        style={styles.emailTextBox}
        outlineColor="transparent"
        outlineStyle={styles.outlineTextBox}
        textColor="#818181"
        placeholderTextColor="#818181"
      />

      <Button
        mode="outlined"
        onPress={() => props.navigation.navigate('Profile2')}
        style={styles.LoginBtn}
        textColor="#FFFFFF">
        Continue <Icon source="arrow-right" color="white" size={18} />
      </Button>
    </View>
  );
};

const createStyles = theme =>
  StyleSheet.create({
    container: {
      display: 'flex',
      position: 'relative',
      flex: 1,
      paddingHorizontal: 32,
      backgroundColor: '#fbfbfb',
    },
    step: {
      marginTop: 10,
      color: '#454545',
      fontSize: 12,
    },
    welcome: {
      color: '#000000',
      fontWeight: '600',
      fontSize: 16,
      marginTop: 10,
      //   marginBottom: 12,
      fontFamily: 'Comfortaa',
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
      display: 'flex',
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
    signUpDetailText: {
      fontFamily: 'Poppins',
      fontSize: 13,
      lineHeight: 19.5,
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
