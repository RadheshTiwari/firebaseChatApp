import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageSet} from '../assets/Images';

const RenderItems = ({item, index}) => {
  const COLORS = [
    '#FFC0CB',
    '#FFD700',
    '#ADFF2F',
    '#40E0D0',
    '#FF6347',
    '#8A2BE2',
  ];
  const getColor = index => {
    return COLORS[index % COLORS.length];
  };
  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          width: 80,
          height: 80,
          borderRadius: 10,
          backgroundColor: getColor(index),
          // marginTop:40
          marginHorizontal: 4,
          elevation: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item?.pic}
          style={{width: 40, height: 40, alignSelf: 'center'}}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          fontFamily: 'Kalam-Regular',
          color: getColor(index),
          fontSize: 18,
          marginTop: 6,
        }}>
        {item?.name}
      </Text>
    </View>
  );
};

export default RenderItems;

const styles = StyleSheet.create({});
