import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import VectorIcons from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ImageSet} from '../assets/Images';
var myid = '';
const Chat = props => {
  // const [myid, setmyid] = useState();
  const [user, setUser] = useState([]);
  const {width, height} = Dimensions.get('window');
  // console.log(width,height)
  useEffect(() => {
    getuser();
  }, []);
  const getuser = async () => {
    let temp = [];
    const email = await AsyncStorage.getItem('EMAIL');
    myid = await AsyncStorage.getItem('USERID');

    // console.log('------55--', myid);
    firestore()
      .collection('Users')
      .where('email', '!=', email)
      .get()
      .then(res => {
        if (res.docs != []) {
          res.docs.map(item => {
            temp.push(item.data());
          });
        }
        setUser(temp);
      });
  };
  // console.log('------>', user);
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{alignItems: 'center', marginTop: height * 0.02}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{fontFamily: 'Poppins-Bold', fontSize: 24, color: 'black'}}>
            Chat Room
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#D3D3D3',
            width: '94%',
            height: 50,
            borderRadius: 20,
            paddingHorizontal: 10,
            alignSelf: 'center',
            marginTop: '8%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={'#686D76'}
            style={{width: '94%', flexWrap: 'wrap'}}
          />
          <VectorIcons name="search1" size={18} color="#686D76" />
        </View>
      </View>
      <FlatList
        data={user}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 100 / 2,
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 20,
                position: 'relative',
              }}>
              <Image
                source={ImageSet.doctor}
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: 'white',
                  borderRadius: 100 / 2,
                }}
              />
            </View>
          );
        }}
        horizontal
      />
      <FlatList
        data={user}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                width: '94%',
                backgroundColor: 'white',
                borderRadius: 15,
                alignSelf: 'center',
                // flexDirection: 'row',
                padding: 10,
                justifyContent: 'space-between',
                marginTop: '8%',
                elevation: 3,
                marginBottom: 20,
              }}
              onPress={() => {
                props.navigation.navigate('ChatScreen', {item: item, id: myid});
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  // backgroundColor: 'yellow',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={ImageSet.doctor}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 15,
                      // backgroundColor: 'blue',
                    }}
                  />
                  <View style={{marginLeft: 5}}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                        color: 'black',
                        fontSize: 14,
                      }}>
                      {item?.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        color: 'black',
                        fontSize: 12,
                      }}>
                      Dentist
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <VectorIcons name="enviromento" size={18} color="black" />
                      <Text
                        style={{
                          marginLeft: 4,
                          fontFamily: 'Poppins-Regular',
                          color: 'black',
                          fontSize: 12,
                        }}>
                        United State,America
                      </Text>
                    </View>
                  </View>
                </View>

                <VectorIcons name="right" size={20} color="black" />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  // backgroundColor: 'green',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <VectorIcons name="clockcircleo" size={15} color="black" />
                  <Text style={{marginLeft: 3, color: 'black'}}>
                    03:00PM-09:00PM
                  </Text>
                </View>
                <Text style={{color: 'black'}}>Clinic fees:$100</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
