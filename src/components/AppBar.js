import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Appbar, IconButton, useTheme} from 'react-native-paper';
import {FONTS} from '../constant';

const AppBar = ({
  backBordered = false,
  navigation,
  title,
  userName = '',
  actionButton = true,
  notification = true,
  buttonOneIcon = 'bell-outline',
  buttonTwoIcon = 'cart-outline',
  backGroundColor = '',
  color = '',
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Appbar.Header
        style={[
          styles.header,
          {backgroundColor: backGroundColor ? backGroundColor : 'white'},
        ]}>
        {userName ? (
          <>
            <View style={styles.titleContainer}>
              <Text style={styles.text1}>welcome back</Text>
              <Text style={styles.text2}>{userName}</Text>
            </View>
          </>
        ) : (
          <IconButton
            icon="keyboard-backspace"
            size={25}
            iconColor={color ? color : 'black'}
            onPress={() => navigation.goBack()}
            style={backBordered ? styles.backBtn : {}}
          />
        )}

        {title && (
          <Appbar.Content
            title={title}
            titleStyle={styles.centerTitle}
            color={color ? color : '#020202'}
          />
        )}

        {actionButton && (
          <>
            {notification && <Appbar.Action icon={buttonOneIcon} />}
            <Appbar.Action
              icon={buttonTwoIcon}
              color={color ? color : 'black'}
            />
          </>
        )}
      </Appbar.Header>
    </View>
  );
};

export default AppBar;

const createStyles = theme =>
  StyleSheet.create({
    container: {},
    header: {
      paddingHorizontal: 10,
    },
    backBtn: {
      borderWidth: 1,
      borderRadius: 12,
      borderColor: '#D6D6D6',
    },
    centerTitle: {
      fontSize: 15,
      fontWeight: '600',
      fontFamily: FONTS.Comfortaa.SemiBold,
      textAlign: 'center',
    },
    titleContainer: {
      flex: 1,
      flexDirection: 'column',
      lineHeight: 8,
    },
    text1: {
      color: '#9C9C9C',
      fontFamily: FONTS.Comfortaa.Medium,
      fontWeight: '500',
      fontSize: 13,
    },
    text2: {
      color: '#000000',
      fontWeight: '500',
      fontSize: 20,
      fontFamily: FONTS.Comfortaa.Medium,
    },
  });
