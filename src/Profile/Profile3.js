import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Checkbox, Chip, Searchbar, useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppBar from '../components/AppBar';
import {FONTS} from '../constant';
import axios from 'axios';
// import {useDispatch} from 'react-redux';
// import {register_doctor} from '../actions/authActions';
import {useFormContext} from '../context/FormContext';
import {onSubmitError} from '../Lib/CommonFunction';
import {useForm} from 'react-hook-form';
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

const Profile3 = ({navigation}) => {
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
      doctor_department: [],
    },
  });
  // const [checkedItems, setCheckedItems] = useState(
  //   categoryData.reduce((acc, item) => {
  //     acc[item.label] = false;
  //     return acc;
  //   }, {}),
  // );
  const [searchQuery, setSearchQuery] = React.useState('');
  const {formData, setFormData} = useFormContext();
  const doctorDepartment = watch('doctor_department');

  const handleChange = item => {
    const updatedDepartment = doctorDepartment.includes(item)
      ? doctorDepartment.filter(dept => dept !== item)
      : [...doctorDepartment, item];
    setValue('doctor_department', updatedDepartment);
  };

  const handleClose = item => {
    setValue(
      'doctor_department',
      doctorDepartment.filter(dept => dept !== item),
    );
  };

  const onSubmitData = values => {
    setFormData(prevFormdata => ({
      ...prevFormdata,
      ...values,
    }));

    axios
      .post('https://guyana-joins-organize-alarm.trycloudflare.com/addUser', {
        ...formData,
        ...values,
      })
      .then(response => {
        console.log('response:', response.data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  const handleDone = () => {
    handleSubmit(onSubmitData, onSubmitError)();

    // fetch('https://guyana-joins-organize-alarm.trycloudflare.com/addUser', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     ...formData,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json);
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <AppBar
          navigation={navigation}
          backBordered={true}
          actionButton={false}
        />
        <ScrollView style={styles.container}>
          <Text style={styles.step}>Step 3 to 3</Text>
          <Text style={styles.welcome}>Add Department of Doctor</Text>
          <Text style={[styles.signUpDetailText, styles.subtitleText]}>
            Update your profile to get the product details from seller.
          </Text>

          <Searchbar
            placeholder="Search Catagory"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.searchbar}
          />

          <View style={styles.chipDiv}>
            {doctorDepartment.map((item, index) => {
              return (
                <Chip
                  onClose={() => handleClose(item)}
                  closeIcon={() => (
                    <MaterialCommIcon name="close" size={20} color="#ffffff" />
                  )}
                  compact={true}
                  key={index}
                  style={styles.chip}
                  textStyle={styles.chipText}>
                  {item}
                </Chip>
              );
            })}
          </View>

          {categoryData?.map((item, index) => {
            return (
              <Checkbox.Item
                label={item.label}
                status={
                  doctorDepartment.includes(item.label)
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => handleChange(item.label)}
                uncheckedColor="#D7D7D7"
                color="#D7D7D7"
                labelStyle={styles.checkboxLabel}
                key={index}
              />
            );
          })}

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Verification');
              handleDone();
            }}
            style={styles.LoginBtn}
            activeOpacity={0.8}>
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </ScrollView>
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
      paddingHorizontal: 20,
      flex: 1,
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
      fontFamily: FONTS.Comfortaa.SemiBold,
      letterSpacing: -0.24,
    },
    searchbar: {
      backgroundColor: '#F3F6F6',
    },
    chipDiv: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 16,
      marginBottom: 24,
      // overflow: 'auto',
    },
    chip: {
      marginRight: 7,
      marginBottom: 7,
      backgroundColor: '#2BB1FD',
    },
    chipText: {
      color: '#ffffff',
      fontSize: 11,
      fontFamily: FONTS.Comfortaa.SemiBold,
      letterSpacing: -0.24,
    },
    checkboxLabel: {
      fontFamily: FONTS.Comfortaa.Regular,
      fontSize: 13,
      letterSpacing: -0.24,
      color: '#000000',
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
    doneText: {
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
    subtitleText: {
      marginTop: 10,
      marginBottom: 28,
    },
  });

export default Profile3;
