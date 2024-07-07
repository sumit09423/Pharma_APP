import React from 'react';
import {ActivityIndicator, useTheme} from 'react-native-paper';

const LoadingComponent = ({loading}) => {
  const theme = useTheme();
  if (loading) {
    return (
      <ActivityIndicator
        animating={true}
        color={theme.colors.themeColor}
        size="large"
        style={{
          zIndex: 100,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    );
  }
};

export default LoadingComponent;
