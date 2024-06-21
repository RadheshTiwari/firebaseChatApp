import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Chat from '../Screens/Chat';
import {ImageSet} from '../assets/Images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopEndRadius: 5,
          borderTopLeftRadius: 5,
          borderLeftWidth: 0.2,
          borderRightWidth: 0.2,
          elevation: 5,
          shadowColor: 'black',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                height: 40,
              }}>
              {focused && (
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    height: 4,
                    width: '13%', // Adjust width for horizontal line
                    backgroundColor: 'purple',
                    borderRadius: 10,
                  }}
                />
              )}
              <Image
                source={ImageSet.home}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          ),
          tabBarButton: props => (
            <TouchableOpacity {...props} style={{flex: 1}}>
              <View
                style={[
                  props.style,
                  {
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 10, // Adjust padding for spacing
                  },
                ]}>
                {props.children}
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                height: 40,
              }}>
              {focused && (
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    height: 4,
                    width: '13%', // Adjust width for horizontal line
                    backgroundColor: 'purple',
                    borderRadius: 10,
                  }}
                />
              )}
              <Image
                source={ImageSet.messenger}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          ),
          tabBarButton: props => (
            <TouchableOpacity {...props} style={{flex: 1}}>
              <View
                style={[
                  props.style,
                  {
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 10, // Adjust padding for spacing
                  },
                ]}>
                {props.children}
              </View>
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
