import React, { useState, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Pressable
} from 'react-native';
import { CustomJsonData } from '../customData/CustomJson'

const CategorySelectionScreen = ({ navigation }) => {
    // State variables
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [data, setData] = useState([]);
    // Function to navigate to the Leaderboard screen
    const handleLeadersBoard = () => {
        navigation.navigate('Leaderboard')
    }

    // Function to select a category and set its data
    const onSelectCategory = useCallback(() => {
          // Select a random animal from the data
        const randomAnimal = data[Math.floor(Math.random() * data.length)];
        // Navigate to the Game screen with selected data
        navigation.navigate('Game', {
            category: selectedCategory,
            clue: randomAnimal?.clue,
            data: randomAnimal?.name,
            point: randomAnimal?.point,
        });
    }, [data, selectedCategory, navigation]);
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View>
                    {/* Title */}
                    <Text style={styles.title}>Words Puzzle</Text>
                    {/* Category Buttons */}
                    <View style={styles.buttonContainer}>
                        {CustomJsonData?.map((ele, index) => (
                            <Button
                                key={index}
                                title={ele?.title}
                                onPress={() => {
                                    setSelectedCategory(ele?.title)
                                    setData(ele?.data)
                                }
                                }
                                color={selectedCategory === ele?.title ? 'red' : undefined} // Change background color if selected
                            />
                        ))}
                    </View>
                </View>
                <View style={styles.buttonWithLeadersContainer}>
                    <Pressable style={styles.categoryBottom} onPress={onSelectCategory}>
                        <Text style={styles.startButtonText}>Start</Text>
                    </Pressable>
                    <Pressable onPress={handleLeadersBoard}>
                        <Text style={styles.leadersBoardText}>Leaders Board</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 30
    },
    mainContainer: {
        justifyContent: "space-between",
        alignContent: "space-between",
        flex: 1
    },
    title: {
        textAlign: "center",
        color: "#000",
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        columnGap: 20
    },
    startButton: {
        padding: 20,
        backgroundColor: "#FF327F",
        marginBottom: 10,
    },
    startButtonText: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
    },
    buttonWithLeadersContainer: {
        bottom: 20,
    },
    leadersBoardText: {
        textAlign: "center",
        color: "#000",
        fontWeight: "bold",
        textDecorationLine: 'underline',
    },
    categoryBottom: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#FF327F",
    }
});

export default CategorySelectionScreen;
