import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  Checkbox,
  Icon,
  IconButton,
  TextInput,
  ToggleButton,
  useTheme,
} from 'react-native-paper';
import MaterialCommIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppBar from '../components/AppBar';

const logoImg = require('../images/Profile.png');

const Profile2 = props => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
    degree: '',
    licenceNumber: '',
  });
  const [toggle, setToggle] = useState('male');

  const handleChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleToggle = value => {
    setToggle(value);
  };

  return (
    <View style={styles.mainContainer}>
      <AppBar props={props} />
      <View style={styles.container}>
        <Text style={styles.step}>Step 2 to 3</Text>
        <Text style={styles.welcome}>Other Information</Text>
        <Text style={[styles.signUpDetailText, styles.subtitleText]}>
          Update your profile to get the product details from seller.
        </Text>

        <View style={styles.toggleDiv}>
          <ToggleButton
            icon={() => (
              <MaterialCommIcon
                name="doctor"
                size={30}
                color={toggle === 'male' ? '#ffffff' : '#b0b0b0'}
              />
            )}
            value="male"
            status={toggle === 'male' ? 'checked' : 'unchecked'}
            onPress={value => handleToggle('male')}
            style={[
              styles.toggleBtn,
              {
                backgroundColor:
                  toggle === 'male' ? theme.colors.themeColor : 'white',
              },
            ]}
          />
          <ToggleButton
            icon={() => (
              <MaterialCommIcon
                name="mother-nurse"
                size={30}
                color={toggle === 'female' ? '#ffffff' : '#b0b0b0'}
              />
            )}
            value="female"
            status={toggle === 'female' ? 'checked' : 'unchecked'}
            onPress={value => handleToggle('female')}
            style={[
              styles.toggleBtn,
              {
                backgroundColor:
                  toggle === 'female' ? theme.colors.themeColor : 'white',
              },
            ]}
          />
        </View>

        <TextInput
          mode="outlined"
          value={formValues.fname}
          onChangeText={value => handleChange('fname', value)}
          placeholder="Birth Date"
          style={styles.emailTextBox}
          outlineColor="transparent"
          outlineStyle={styles.outlineTextBox}
          textColor="#818181"
          placeholderTextColor="#818181"
          left={
            <TextInput.Icon
              icon="calendar-month-outline"
              color={theme.colors.themeColor}
            />
          }
        />

        <TextInput
          mode="outlined"
          value={formValues.lname}
          onChangeText={value => handleChange('lname', value)}
          placeholder="Address"
          style={styles.emailTextBox}
          outlineColor="transparent"
          outlineStyle={styles.outlineTextBox}
          textColor="#818181"
          placeholderTextColor="#818181"
          left={
            <TextInput.Icon
              icon="map-marker-outline"
              color={theme.colors.themeColor}
            />
          }
        />

        <Button
          mode="outlined"
          onPress={() => props.navigation.navigate('Profile3')}
          style={styles.LoginBtn}
          textColor="#FFFFFF">
          Continue <Icon source="arrow-right" color="#FFFFFF" size={18} />
        </Button>
      </View>
    </View>
  );
};

const createStyles = theme =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    container: {
      display: 'flex',
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
      fontFamily: 'Comfortaa',
      letterSpacing: -0.24,
    },
    outlineTextBox: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#B9B9B9',
    },
    emailTextBox: {
      marginBottom: 15,
    },
    toggleDiv: {
      marginTop: 16,
      marginBottom: 55,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    toggleBtn: {
      borderColor: '#EAEAEA',
      borderWidth: 1,
      marginHorizontal: 15,
      width: 65,
      height: 65,
      borderRadius: 10,
      fontSize: 35,
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
    signUpDetailText: {
      fontFamily: 'Poppins',
      fontSize: 13,
      lineHeight: 19.5,
    },
    subtitleText: {
      marginTop: 10,
      marginBottom: 28,
    },
  });

export default Profile2;
