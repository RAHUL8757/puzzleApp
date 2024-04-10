import React, { useState, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Pressable,
    Image
} from 'react-native';
import { useQuery } from 'react-query';
import {getUserList} from '../../../api/api'


const UserListComponent = () => {
  const {
        data: getUserListData,
        isLoading: userListDataLoding,
    } = useQuery('getUserList', () => getUserList(), {})
    console.log(getUserListData,'getUserListData')
  return (
    <View style={{
      backgroundColor:"red",
      flex:1
    }}>
    <Text>Rahul Singh</Text>
    </View>
  )
}
export default UserListComponent;