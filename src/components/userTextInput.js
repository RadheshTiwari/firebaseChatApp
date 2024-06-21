import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const UserTextInput = ({
  PlaceHolder,
  setStateFunc,
  stateVariable,
  numericValue,
}) => {
  return (
    <View
      style={{
        width: '94%',
        borderRadius: 10,
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: 20,
        borderColor: 'black',
      }}>
      <TextInput
        placeholder={PlaceHolder}
        placeholderTextColor={'black'}
        style={{width: '100%'}}
        onChangeText={el => {
          setStateFunc(el);
        }}
        value={stateVariable}
        keyboardType={numericValue ? 'number-pad' : null}
      />
    </View>
  );
};

export default UserTextInput;

const styles = StyleSheet.create({});
