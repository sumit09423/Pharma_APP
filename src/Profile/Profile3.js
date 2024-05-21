import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  Checkbox,
  Chip,
  IconButton,
  Searchbar,
  TextInput,
  ToggleButton,
  useTheme,
} from 'react-native-paper';
const logoImg = require('../images/Profile.png');

const categoryData = [
  {
    label: 'Gynecologist',
  },
  {
    label: 'Pediatric',
  },
  {
    label: 'Cardiologist',
  },
  {
    label: 'Neurologist',
  },
  {
    label: 'Psychiatrist',
  },
  {
    label: 'Endocrinologist',
  },
  {
    label: 'Dermatologist',
  },
  {
    label: 'Dentist',
  },
];

const Profile3 = props => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [checkedItems, setCheckedItems] = useState(
    categoryData.reduce((acc, item) => {
      acc[item.label] = false;
      return acc;
    }, {}),
  );
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleChange = item => {
    setCheckedItems(prevState => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const handleClose = (key, value) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [key]: false,
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.step}>Step 3 to 3</Text>
      <Text style={styles.welcome}>Add Department of Doctor</Text>
      <Text style={[styles.signUpDetailText, styles.subtitleText]}>
        Update your profile to get the product details from seller.
      </Text>

      <Searchbar
        placeholder="Search Catagory"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />

      <View style={styles.chipDiv}>
        {Object.entries(checkedItems).map(([key, value], index) => {
          if (value)
            return (
              <Chip
                onClose={() => handleClose(key, value)}
                compact={true}
                key={index}
                style={styles.chip}
                textStyle={styles.chipText}>
                {key}
              </Chip>
            );
        })}
      </View>

      {categoryData?.map((item, index) => {
        return (
          <Checkbox.Item
            label={item.label}
            status={checkedItems[item.label] ? 'checked' : 'unchecked'}
            onPress={() => handleChange(item.label)}
            key={index}
          />
        );
      })}

      <Button
        mode="outlined"
        onPress={() => props.navigation.navigate('Profile2')}
        style={styles.LoginBtn}
        textColor="#FFFFFF">
        Done
      </Button>
    </View>
  );
};

const createStyles = theme =>
  StyleSheet.create({
    container: {
      // display: 'flex',
      // position: 'relative',
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
      paddingHorizontal: 6,
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
      width: 60,
      height: 60,
      borderRadius: 10,
    },

    chipDiv: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 16,
      marginBottom: 24,
    },
    chip: {
      marginRight: 7,
      backgroundColor: '#2BB1FD',
    },
    chipText: {
      color: '#ffffff',
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

export default Profile3;
