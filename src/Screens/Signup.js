import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import UserTextInput from '../components/userTextInput';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';

const Signup = props => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const registerUser = () => {
    const userId = uuid.v4();
    firestore()
      .collection('Users')
      .doc(userId)
      .set({
        name: name,
        email: email,
        password: password,
        userId: userId,
      })
      .then(res => {
        console.log(res);
        props.navigation.goBack();
      })
      .catch(error => console.log('register error', error));
  };
  const handleSubmit = () => {
    if (name === '' || name === undefined || name === null) {
      Alert.alert('please Enter The Name');
    } else if (email === '' || email === undefined || email === null) {
      Alert.alert('Please Enter Email');
    } else if (password === '' || password === undefined || password === null) {
      Alert.alert('please Enter Password');
    } else {
      registerUser();
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{alignItems: 'center', marginTop: 10, elevation: 3}}>
        <Text style={{fontSize: 24, fontWeight: 800, color: '#3f556f'}}>
          SignUp
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <UserTextInput
          PlaceHolder={'Enter Name'}
          setStateFunc={setName}
          stateVariable={name}
        />
        <UserTextInput
          PlaceHolder={'Enter Email'}
          setStateFunc={setEmail}
          stateVariable={email}
        />
        <UserTextInput
          PlaceHolder={'Enter Password'}
          setStateFunc={setPassword}
          stateVariable={password}
          numericValue={true}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            marginTop: 30,
            alignItems: 'center',
            width: '54%',
            alignSelf: 'center',
            height: 40,
            justifyContent: 'center',
            borderRadius: 10,
            elevation: 5,
          }}
          onPress={() => {
            handleSubmit();
          }}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: 400}}>
            Signup
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 400,
              alignSelf: 'center',
            }}>
            Already Have Account?
          </Text>
          <TouchableOpacity
            style={{marginHorizontal: 5}}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text
              style={{
                color: 'green',
                fontSize: 20,
                fontWeight: 600,
                alignSelf: 'center',
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 400,
              alignSelf: 'center',
            }}>
            Here
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
