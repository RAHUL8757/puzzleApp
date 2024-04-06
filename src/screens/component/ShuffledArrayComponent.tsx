// ShuffledArrayComponent.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const ShuffledArrayComponent = ({ originalArray, handleChooseWord }) => {
  const [shuffledArray, setShuffledArray] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  // Function to shuffle the array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Update shuffled array on each render
  useEffect(() => {
    setShuffledArray(shuffleArray(originalArray));
  }, [originalArray]);

  // Handle item selection
  const handleItemPress = (item, index) => {
    if (!selectedItems.includes(index)) {
      setSelectedItems(prevSelected => [...prevSelected, index]);
      handleChooseWord(item);
    }
  };

  return (
    <View style={styles.container}>
      {shuffledArray.map((item, index) => (
        <Pressable
          onPress={() => handleItemPress(item, index)}
          key={index}
          style={[
            styles.item,
            selectedItems.includes(index) && styles.selectedItem // Add selected style if item is selected
          ]}
          disabled={selectedItems.includes(index)} // Disable item if already selected
        >
          <Text>{item}</Text>
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
    backgroundColor: 'lightblue',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: 'yellow', // Change background color to yellow when selected
  },
});

export default ShuffledArrayComponent;
