import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Appbar, IconButton, useTheme} from 'react-native-paper';

const AppBar = ({props}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <IconButton
          icon="keyboard-backspace"
          size={22}
          onPress={() => props.navigation.goBack()}
          style={styles.backBtn}
        />
      </Appbar.Header>
    </View>
  );
};

export default AppBar;

const createStyles = theme =>
  StyleSheet.create({
    container: {},
    header: {
      paddingHorizontal: 24,
    },
    backBtn: {
      borderWidth: 1,
      borderRadius: 12,
      borderColor: '#D6D6D6',
    },
  });
