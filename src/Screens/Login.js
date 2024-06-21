import {ActivityIndicator, Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import UserTextInput from '../components/userTextInput';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading,setloading]=useState(false)
  const handleSubmit = () => {
    if (email === '' || email === undefined || email === null) {
      Alert.alert('Please Enter Email');
    } else if (password === '' || password === undefined || password === null) {
      Alert.alert('please Enter Password');
    } else {
      //   console.log('All Values==>', email, password);
      loginUser();
    }
  };
  const loginUser = async () => {
    const userId = uuid.v4();
    firestore()
      .collection('Users')
      .where('email', '==', email)
      .where('password', '==', password)
      .get()
      .then(res => {
        if (res.docs !== []) {
          console.log(JSON.stringify(res.docs[0].data()));

          gotoMain(
            res.docs[0].data().name,
            res.docs[0].data().email,
            res.docs[0].data().userId,
          );
        }
      })
      .catch(error => {
        console.log('register error', error);
        setloading(false)
        Alert.alert('user does not exist or password incorrect');
      });
  };
  const gotoMain = async (name, email, userId) => {
    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('USERID', userId);
    setloading(false)
    props.navigation.navigate('TabNavigator');
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{alignItems: 'center', marginTop: 10, elevation: 3}}>
        <Text style={{fontSize: 24, fontWeight: 800, color: '#3f556f'}}>
          Login
        </Text>
      </View>
      
      <View style={{flex: 1, justifyContent: 'center'}}>
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
         {loading?(<ActivityIndicator size="large" color="#00ff00" />):null}
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
            setloading(true)
          }}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: 400}}>
            Login
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
            Do not have account?
          </Text>
          <TouchableOpacity
            style={{marginHorizontal: 5}}
            onPress={() => {
              props.navigation.navigate('Signup');
            }}>
            <Text
              style={{
                color: 'green',
                fontSize: 20,
                fontWeight: 600,
                alignSelf: 'center',
              }}>
              Signup
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

export default Login;

const styles = StyleSheet.create({});
