// @flow

import React from 'react';
import {Modal, Alert, View, Text, StyleSheet, Pressable} from 'react-native';

type Props = {
  modalVisible: boolean,
  isDarkMode: boolean,
  setModalVisible: Function,
};

export const ErrorModal = (props: Props) => {
  const {modalVisible, setModalVisible, isDarkMode} = props;

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: isDarkMode ? 'black' : 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: isDarkMode ? '#fff' : '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      color: isDarkMode ? 'white' : 'black',
    },
  });

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            An error occurred! Check the expression you wrote god damn it!
          </Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Okay :(</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
