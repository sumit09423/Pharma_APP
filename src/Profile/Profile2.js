import React, {useEffect, useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Button,
  Icon,
  TextInput,
  ToggleButton,
  useTheme,
} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppBar from '../components/AppBar';
import {onSubmitError} from '../Lib/CommonFunction';
import {FONTS} from '../constant';
import {Controller, useForm} from 'react-hook-form';
import {useFormContext} from '../context/FormContext';
import DatePicker from 'react-native-date-picker';

const logoImg = require('../images/Profile.png');

const Profile2 = ({navigation}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  // const [formValues, setFormValues] = useState({});
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
    setValue,
  } = useForm({
    defaultValues: {
      gender: 'male',
      // dob: new Date(),
      address: '',
    },
  });
  const {formData, setFormData} = useFormContext();
  const formValues = watch();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const onSubmitData = values => {
    setFormData(prevFormdata => ({
      ...prevFormdata,
      ...values,
    }));
    navigation.navigate('Profile3');
  };

  const handleContinue = () => {
    handleSubmit(onSubmitData, onSubmitError)();
  };

  const onDatePickerConfirm = selectedDate => {
    setOpen(false);
    const currentDate = selectedDate || date;
    setDate(currentDate);

    const tempDate = new Date(currentDate);
    const formattedDate = `${tempDate.getDate()}/${
      tempDate.getMonth() + 1
    }/${tempDate.getFullYear()}`;
    setValue('dob', formattedDate);
  };

  useEffect(() => {
    onDatePickerConfirm();
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <AppBar
        navigation={navigation}
        backBordered={true}
        actionButton={false}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.step}>Step 2 to 3</Text>
        <Text style={styles.welcome}>Other Information</Text>
        <Text style={[styles.signUpDetailText, styles.subtitleText]}>
          Update your profile to get the product details from seller.
        </Text>

        <View style={styles.toggleDiv}>
          <Controller
            control={control}
            name="gender"
            rules={{required: 'Gender is required'}}
            render={({field: {onChange, value}}) => (
              <>
                <ToggleButton
                  icon={() => (
                    <MaterialCommIcon
                      name="doctor"
                      size={30}
                      color={value === 'male' ? '#ffffff' : '#b0b0b0'}
                    />
                  )}
                  value="male"
                  status={value === 'male' ? 'checked' : 'unchecked'}
                  onPress={() => onChange('male')}
                  style={[
                    styles.toggleBtn,
                    {
                      backgroundColor:
                        value === 'male' ? theme.colors.themeColor : 'white',
                    },
                  ]}
                />
                <ToggleButton
                  icon={() => (
                    <MaterialCommIcon
                      name="mother-nurse"
                      size={30}
                      color={value === 'female' ? '#ffffff' : '#b0b0b0'}
                    />
                  )}
                  value="female"
                  status={value === 'female' ? 'checked' : 'unchecked'}
                  onPress={() => onChange('female')}
                  style={[
                    styles.toggleBtn,
                    {
                      backgroundColor:
                        value === 'female' ? theme.colors.themeColor : 'white',
                    },
                  ]}
                />
              </>
            )}
          />
        </View>

        <Pressable onPress={() => setOpen(true)}>
          <Controller
            control={control}
            name="dob"
            rules={{
              required: 'Birth date is required',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                mode="outlined"
                value={value}
                onChangeText={onChange}
                placeholder="Birth Date"
                style={styles.emailTextBox}
                outlineColor="transparent"
                outlineStyle={styles.outlineTextBox}
                textColor="#818181"
                placeholderTextColor="#818181"
                editable={false}
                left={
                  <TextInput.Icon
                    icon="calendar-month-outline"
                    color={theme.colors.themeColor}
                  />
                }
              />
            )}
          />
        </Pressable>
        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          onConfirm={onDatePickerConfirm}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <Controller
          control={control}
          name="address"
          rules={{required: 'Address is required'}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              mode="outlined"
              value={value}
              onChangeText={onChange}
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
          )}
        />

        <TouchableOpacity
          onPress={handleContinue}
          style={styles.LoginBtn}
          activeOpacity={0.8}>
          <Text style={styles.continueText}>Continue</Text>
          <Icon source="arrow-right" color="#FFFFFF" size={18} />
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
      paddingHorizontal: 20,
      backgroundColor: '#fbfbfb',
    },
    step: {
      marginTop: 10,
      color: '#454545',
      fontSize: 12,
      fontWeight: '600',
      fontFamily: FONTS.Comfortaa.SemiBold,
      letterSpacing: -0.24,
    },
    welcome: {
      color: '#000000',
      fontWeight: '600',
      fontSize: 16,
      marginTop: 10,
      fontFamily: FONTS.Comfortaa.SemiBold,
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
    subtitleText: {
      marginTop: 10,
      marginBottom: 28,
    },
  });

export default Profile2;
