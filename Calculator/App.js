/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Alert,
  Modal,
  Dimensions,
} from 'react-native';
import {evaluate} from 'mathjs';
import Button from './components/common/Button';
import {buttons, extendedButtons} from './constants/buttons';
import Icon from 'react-native-vector-icons/Entypo';
import {ErrorModal} from './components/common/ErrorModal';

const App = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [lastNumber, setLastNumber] = React.useState(0);
  const [isReady, setIsReady] = React.useState(true);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [currentNumber, setCurrentNumber] = React.useState('');
  const [isLandscape, setIsLandscape] = React.useState(false);

  React.useEffect(() => {
    evaluate('1+1');
    setIsLandscape(isPortrait() ? false : true);
  }, []);

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  Dimensions.addEventListener('change', () => {
    setIsLandscape(isPortrait() ? false : true);
  });

  const styles = StyleSheet.create({
    results: {
      backgroundColor: isDarkMode ? '#282f3b' : '#f5f5f5',
      maxWidth: '100%',
      minHeight: '35%',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    resultText: {
      maxHeight: 45,
      color: '#FF6666',
      margin: 15,
      fontSize: 35,
    },
    historyText: {
      color: isDarkMode ? '#B5B7BB' : '#7c7c7c',
      fontSize: 20,
      marginRight: 10,
      alignSelf: 'flex-end',
    },
    themeButton: {
      alignSelf: 'flex-start',
      position: 'absolute',
      bottom: '5%',
      margin: 15,
      backgroundColor: isDarkMode ? '#7b8084' : '#e5e5e5',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    buttons: {
      width: '100%',
      height: '35%',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    textButton: {
      color: isDarkMode ? '#b5b7bb' : '#7c7c7c',
      fontSize: 28,
    },
  });

  return (
    <View>
      <StatusBar barStyle={'dark-content'} animated backgroundColor="white" />
      <View style={styles.results}>
        <TouchableOpacity
          style={styles.themeButton}
          onPress={() => {
            setIsDarkMode(prev => !prev);
          }}>
          <Icon
            name={isDarkMode ? 'light-up' : 'moon'}
            size={24}
            color={isDarkMode ? 'white' : 'black'}
          />
        </TouchableOpacity>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {(isLandscape ? extendedButtons : buttons).map(button => (
          <Button
            key={`${button.type}-${button.value}`}
            buttonInfo={{
              type: button.type,
              onClick: () => {
                if (isReady) {
                  setCurrentNumber(button.onClick(currentNumber));
                } else {
                  if (button.type === 'operation') {
                    setCurrentNumber(button.onClick(currentNumber));
                  } else {
                    setLastNumber(currentNumber);
                    setCurrentNumber(button.onClick(''));
                  }
                  setIsReady(true);
                }
              },
              big: button.big,
              value: button.value,
            }}
            isDarkMode={isDarkMode}
            small={isLandscape}>
            {button.value}
          </Button>
        ))}
        <Button
          buttonInfo={{
            type: 'operation',
            onClick: () => {
              try {
                setCurrentNumber(evaluate(currentNumber));
                setIsReady(false);
              } catch (error) {
                setModalVisible(true);
                setCurrentNumber('');
              }
            },
            big: false,
            value: '=',
          }}
          isDarkMode={isDarkMode}
          small={isLandscape}
          children={'='}
        />
      </View>
      <ErrorModal
        isDarkMode={isDarkMode}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default App;
