// Importing necessary components from React Native
import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Functional component definition for ColoredBetweenAsterisk
const ColoredBetweenAsterisk = ({ text }) => {
    // Checking if the text contains asterisks
    const containsAsterisks = typeof text === 'string' && text.includes('*');

    // If the text contains asterisks, render it with colored parts
    if (containsAsterisks) {
        // Splitting the text into parts based on asterisks
        const parts = text.split('*');
        return (
            <Text style={styles.text}>
                {/* Mapping over the parts and rendering each part */}
                {parts.map((part, index) => (
                    <Text key={index} style={[styles.part, index % 2 === 1 && styles.blue]}>
                        {part}
                    </Text>
                ))}
            </Text>
        );
    } else {
        // If the text does not contain asterisks, render it as is
        return (
            <Text style={styles.text}>
                {text}
            </Text>
        );
    }
};

// Stylesheet for ColoredBetweenAsterisk component
const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: "500",
        color: 'black',
    },
    part: {
        fontSize: 18,
        fontWeight: "500",
    },
    blue: {
        color: 'blue',
    },
});

// Exporting the ColoredBetweenAsterisk component
export default ColoredBetweenAsterisk;
