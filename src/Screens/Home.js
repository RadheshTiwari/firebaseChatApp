import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Avatar, Searchbar} from 'react-native-paper';
import VectorIcons from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import RenderItems from '../components/RenderItems';
// import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import {ImageSet} from '../assets/Images';

const Home = (props) => {
  console.log("props----",props.route.params)
  const data = [
    {name: 'Heart', id: 1, pic: require('../assets/Img/heart.png')},
    {name: 'Dental', id: 2, pic: require('../assets/Img/dental.png')},
    {name: 'Ear', id: 3, pic: require('../assets/Img/ear.png')},
    {name: 'Brain', id: 4, pic: require('../assets/Img/brain.png')},
    {name: 'Bone', id: 5, pic: require('../assets/Img/bone.png')},
    {name: 'Eye', id: 6, pic: require('../assets/Img/eye.png')},
    {name: 'Teeth', id: 7, pic: require('../assets/Img/teeth.png')},
    {name: 'Hair', id: 8, pic: require('../assets/Img/hair.png')},
    {name: 'Skin', id: 9, pic: require('../assets/Img/skin.png')},
    {name: 'Psychology', id: 10, pic: require('../assets/Img/psyco.png')},
  ];

  return (
    <ScrollView style={{backgroundColor: 'white',width:"100%"}} showsVerticalScrollIndicator={false}>
      <View style={{margin: 20}}>
        <View
          style={{
            width: '40%',
            height: 30,
            borderWidth: 0.5,
            borderRadius: 15,
            borderColor: 'black',
            alignSelf: 'flex-end',
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 5,
          }}>
          <Avatar.Icon
            size={24}
            icon="calendar"
            style={{backgroundColor: 'white'}}
          />
          <Text>date</Text>
          <VectorIcons name="down" size={18} color="black" />
        </View>
      </View>
      <View style={{paddingHorizontal: 10}}>
        <Text
          style={{fontSize: 24, fontFamily: 'Poppins-Medium', color: 'purple'}}>
          Hi,
        </Text>
        <Text
          style={{fontSize: 28, fontFamily: 'RobotoSlab-Bold', color: 'black'}}>
          Let's Find Your doctor
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
          marginTop: "8%",
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
      <View style={{paddingHorizontal: 10, marginTop: "8%"}}>
        <Text
          style={{fontSize: 22, fontFamily: 'RobotoSlab-Bold', color: 'black'}}>
          Categories
        </Text>
        <FlatList
          data={data}
          renderItem={RenderItems}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10}}
        />
      </View>
      <View
        style={{
          width: '94%',
          backgroundColor: '#08589d',
          borderRadius: 15,
          alignSelf: 'center',
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
          marginTop: "8%",
          elevation: 3,
        }}>
        <View>
          <Text
            style={{fontFamily: 'Poppins-Bold', fontSize: 16, color: 'white'}}>
            How to save your life
          </Text>
          <Text
            style={{fontFamily: 'Poppins-Bold', fontSize: 16, color: 'white'}}>
            from covid-19
          </Text>
          <TouchableOpacity
            style={{
              width: 100,
              borderRadius: 15,
              backgroundColor: '#d07689',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: 'white',
                fontSize: 14,
              }}>
              Read More
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          source={ImageSet.covid}
          resizeMode="contain"
          style={{width: 100, height: 100}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
          marginTop:"8%"
        }}>
        <Text
          style={{fontFamily: 'Poppins-Bold', color: 'black', fontSize: 18}}>
          Popular Doctors
        </Text>
        <Text
          style={{fontFamily: 'Poppins-Medium', color: 'black', fontSize: 14}}>
          View All
        </Text>
      </View>
      <View
        style={{
          width: '94%',
          backgroundColor: 'white',
          borderRadius: 15,
          alignSelf: 'center',
          // flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
          marginTop: "8%",
          elevation: 3,
          marginBottom:20
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
                Dr. Josheph David
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
          <View style={{flexDirection: 'row',alignItems:"center"}}>
            <VectorIcons name="clockcircleo" size={15} color="black" />
            <Text style={{marginLeft:3,color:"black"}}>03:00PM-09:00PM</Text>
          </View>
          <Text style={{color:"black"}}>Clinic fees:$100</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
