// ShuffledFinalSubmit.js

import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const ShuffledFinalSubmit = ({ originalArray, categoryLength }) => {
  const [shuffledArray, setShuffledArray] = useState([]);

  // Function to fill the array sequentially
  const fillArraySequentially = (array, length) => {
    const filledArray = [...Array(length)].map((_, index) => {
      if (index < array.length) {
        return array[index];
      } else {
        return '';
      }
    });
    return filledArray;
  };

  // Update shuffled array on each render
  useEffect(() => {
    setShuffledArray(fillArraySequentially(originalArray, categoryLength));
  }, [originalArray, categoryLength]);

  return (
    <View style={styles.container}>
      {shuffledArray.map((item, index) => (
        <Pressable key={index} style={styles.item}>
          <Text style={styles.text}>{item}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});

export default ShuffledFinalSubmit;
