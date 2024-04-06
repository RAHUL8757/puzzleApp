// screens/GameScreen.js
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Button, Pressable, StyleSheet } from 'react-native';
import ShuffledFinalSubmit from '../../components/ShuffledFinalSubmit';
import ShuffledArrayComponent from '../../components/ShuffledArrayComponent';

const GameScreen = ({ navigation, route }) => {
    const { category, clue, data, point } = route.params;
    const [score, setScore] = useState(0);
    const [newWord, setNewWord] = useState([]);

    // Function to handle word selection
    const handleChooseWordSubmit = useCallback((e) => {
        setNewWord(prev => [...prev, ...e]);
    }, []);

    // Function to handle puzzle submission
    const handleSubmitPuzzle = useCallback(() => {
        if (newWord?.length > 0 && data?.toLowerCase() === newWord.join('').toLowerCase()) {
            navigation.navigate('Result', {
                point: point
            });
        } else {
            navigation.navigate('Result', {
                point: 0
            });
        }
    }, [newWord, data, navigation, point]);

    const handleSkipPuzzle = () => {
        navigation.navigate('CategorySelection');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{category}</Text>
            <View style={styles.contentContainer}>
                <View style={styles.wordContainer}>
                    <ShuffledFinalSubmit originalArray={newWord} categoryLength={data?.length} />
                </View>
                <Text style={styles.clueText}>{clue}</Text>
                <View style={styles.arrayContainer}>
                    <ShuffledArrayComponent originalArray={data} handleChooseWord={handleChooseWordSubmit} />
                </View>
            </View>
            {newWord?.length == 0 ?
                <Pressable style={styles.submitButton} onPress={handleSkipPuzzle}>
                    <Text style={styles.submitButtonText}>Skip</Text>
                </Pressable>
                :
                <Pressable style={styles.submitButton} onPress={handleSubmitPuzzle}>
                    <Text style={styles.submitButtonText}>Next</Text>
                </Pressable>
            }
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    title: {
        textTransform: "capitalize",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "600",
    },
    contentContainer: {
        flex: 1,
        justifyContent: "space-between",
        marginTop: 50,
    },
    wordContainer: {
        marginVertical: 30,
    },
    clueText: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "600",
    },
    arrayContainer: {
        marginVertical: 30,
    },
    submitButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#FF327F",
        marginBottom: 20,
        marginHorizontal: 20,
    },
    submitButtonText: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "600",
        color: "#fff",
    },
});

export default GameScreen;
