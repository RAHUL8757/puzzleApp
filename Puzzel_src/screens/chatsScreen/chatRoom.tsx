import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import firestore from '@react-native-firebase/firestore';

const ChatRoomScreen = () => {
    const usersCollection = firestore().collection('Users');
    console.log(usersCollection,'usersCollection')
    const [messages, setMessages] = useState([])

        // useEffect(() => {
        //     const subscriber = firestore()
        //       .collection('Users')
        //       .doc(1)
        //       .onSnapshot(documentSnapshot => {
        //         console.log('User data: ', documentSnapshot.data());
        //       });
        
        //     // Stop listening for updates when no longer required
        //     return () => subscriber();
        //   }, []);
        useEffect(() => {
          getUser()
        },[])
        const getUser = async() => {
        const users = await firestore().collection('Users').get();
        
        }

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        )
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    messageContainer: {
        marginBottom: 10,
    },
    messageSender: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingVertical: 10,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    sendButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ChatRoomScreen;
