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
import AppBar from '../components/AppBar';
const logoImg = require('../images/Logo.png');

const Verification = props => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [formValues, setFormValues] = useState({
    textBox1: '',
    textBox2: '',
    textBox3: '',
    textBox4: '',
    textBox5: '',
  });

  const handleChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <View style={styles.mainContainer}>
      <AppBar props={props} />

      <View style={styles.container}>
        <Text style={styles.welcome}>Verification</Text>
        <Text style={[styles.signUpDetailText, styles.subtitleText]}>
          Please check you message for a five-digit security code and enter it
          below.
        </Text>

        <View style={styles.textBoxDiv}>
          <TextInput
            mode="outlined"
            value={formValues.textBox1}
            onChangeText={value => handleChange('textBox1', value)}
            placeholder=""
            style={styles.emailTextBox}
            outlineColor="transparent"
            outlineStyle={styles.outlineTextBox}
            textColor="#818181"
            placeholderTextColor="#818181"
            maxLength={1}
            underlineColor="transparent"
            activeUnderlineColor="transparent"
          />

          <TextInput
            mode="outlined"
            value={formValues.textBox2}
            onChangeText={value => handleChange('textBox2', value)}
            placeholder=""
            style={styles.emailTextBox}
            outlineColor="transparent"
            outlineStyle={styles.outlineTextBox}
            textColor="#818181"
            placeholderTextColor="#818181"
            maxLength={1}
          />

          <TextInput
            mode="outlined"
            value={formValues.textBox3}
            onChangeText={value => handleChange('textBox3', value)}
            placeholder=""
            style={styles.emailTextBox}
            outlineColor="transparent"
            outlineStyle={styles.outlineTextBox}
            textColor="#818181"
            placeholderTextColor="#818181"
            maxLength={1}
            secureTextEntry={false}
          />
          <TextInput
            mode="outlined"
            value={formValues.textBox4}
            onChangeText={value => handleChange('textBox4', value)}
            placeholder=""
            style={styles.emailTextBox}
            outlineColor="transparent"
            outlineStyle={styles.outlineTextBox}
            textColor="#818181"
            placeholderTextColor="#818181"
            maxLength={1}
            secureTextEntry={false}
          />
          <TextInput
            mode="outlined"
            value={formValues.textBox5}
            onChangeText={value => handleChange('textBox5', value)}
            placeholder=""
            style={styles.emailTextBox}
            outlineColor="transparent"
            outlineStyle={styles.outlineTextBox}
            textColor="#818181"
            placeholderTextColor="#818181"
            maxLength={1}
            secureTextEntry={false}
          />
        </View>

        <Text style={[styles.signUpDetailText, styles.termInfo]}>
          Didn't get a code? {''}
          <Text style={[styles.signUpText]}>Send again</Text>
        </Text>

        <Button
          mode="outlined"
          onPress={() => props.navigation.navigate('Profile1')}
          style={styles.LoginBtn}
          textColor="#FFFFFF">
          Verify <Icon source="arrow-right" color="white" size={18} />
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
      flex: 1,
      paddingHorizontal: 32,
      backgroundColor: '#fbfbfb',
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
      marginVertical: 25,
      width: 283,
      textAlign: 'center',
      lineHeight: 19.5,
    },
    subtitleText: {
      marginTop: 10,
      marginBottom: 28,
    },
  });

export default Verification;
