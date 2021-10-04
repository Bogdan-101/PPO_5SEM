// @flow
import * as React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import type {button} from '../../../types/button';

type Props = {
  buttonInfo: button,
  children: React.Node,
  isDarkMode: boolean,
};

const Button = (props: Props) => {
  const {buttonInfo, children, isDarkMode} = props;
  let style = {};
  let childStyle = {};
  const styles = StyleSheet.create({
    button: {
      borderColor: isDarkMode ? '#3f4d5b' : '#e5e5e5',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '24%',
      minHeight: '54%',
      flex: 2,
    },
    textButton: {
      color: isDarkMode ? '#b5b7bb' : '#7c7c7c',
      fontSize: 28,
    },
  });

  if (buttonInfo.type === 'operation') {
    style = [
      styles.button,
      {
        backgroundColor: ['C', 'DEL', '.'].includes(buttonInfo.value)
          ? isDarkMode
            ? '#414853'
            : '#ededed'
          : '#FF6666',
        minWidth: buttonInfo.big ? '37.5%' : '25%',
      },
    ];
    childStyle = [
      styles.textButton,
      {color: isDarkMode ? 'white' : 'black', fontSize: 28},
    ];
  }
  if (buttonInfo.type === 'digit') {
    style = [
      styles.button,
      {
        backgroundColor: isDarkMode ? '#303946' : '#fff',
        minWidth: buttonInfo.big ? '37.5%' : '25%',
      },
    ];
    childStyle = styles.textButton;
  }

  return (
    <TouchableOpacity style={style} onPress={buttonInfo.onClick}>
      <Text style={childStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
