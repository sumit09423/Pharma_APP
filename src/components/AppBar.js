import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Appbar, IconButton, useTheme} from 'react-native-paper';

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
            color={color ? color : 'black'}
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
      fontSize: 18,
      fontWeight: '600',
      fontFamily: 'Comfortaa',
      textAlign: 'center',
    },
    titleContainer: {
      flex: 1,
      flexDirection: 'column',
      lineHeight: 8,
    },
    text1: {
      color: '#9C9C9C',
      fontFamily: 'Comfortaa',
      fontWeight: '500',
    },
    text2: {
      color: '#000000',
      fontWeight: '500',
      fontSize: 20,
      fontFamily: 'Comfortaa',
    },
  });
