import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';

const ChatScreen = props => {
  const [messages, setMessages] = useState([]);
  console.log('0000===>', props?.route?.params?.id);
  useEffect(() => {
    const subscriber = firestore()
      .collection('chats')
      .doc(props?.route?.params.id + props?.route?.params.item?.userId)
      .collection('messages')
      .orderBy('createdAt', 'desc');
    subscriber.onSnapshot(querysnapshot => {
      const allmessages = querysnapshot.docs.map(item => {
        return {...item._data, createdAt: item._data.createdAt};
      });
      setMessages(allmessages);
    });
    return () => subscriber();
  }, []);

  const onSend = useCallback(async (messages = []) => {
    const msg = messages[0];
    const myMsg = {
      ...msg,
      sendBy: props?.route?.params?.id,
      sendTo: props?.route?.params?.item?.userId,
      createdAt: Date.parse(msg.createdAt),
    };
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, myMsg),
    );
    firestore()
      .collection('chats')
      .doc('' + props?.route?.params?.id + props?.route?.params?.item.userId)
      .collection('messages')
      .add(myMsg);
    firestore()
      .collection('chats')
      .doc('' + props?.route?.params?.item.userId + props?.route?.params?.id)
      .collection('messages')
      .add(myMsg);
  }, []);
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: props?.route?.params?.id,
      }}
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
