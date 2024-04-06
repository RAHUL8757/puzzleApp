// screens/LeaderboardScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import { leaderboardData } from '../../customData/CustomJson';
import { ScrollView } from 'react-native-gesture-handler';
import ColoredBetweenAsterisk from '../../components/ColoredBetweenAsterisk';

const storage = new MMKV();

const LeaderboardScreen = ({ navigation }) => {
    const [leaderBoard, setLeaderBoard] = useState([]);

    useEffect(() => {
        getHandleDetailPoint();
    }, []);

    // Retrieve leaderboard data from storage and update the state
    const getHandleDetailPoint = () => {
        const jsonTitleDiscription = storage.getString('numberOfPoint');

        if (!!jsonTitleDiscription) {
            const pointStore = JSON.parse(jsonTitleDiscription);
            const mydata = [{
                name: "*Your*",
                earnPoint: pointStore
            }];
            const array3 = mydata.concat(leaderboardData);
            array3.sort((a, b) => b.earnPoint - a.earnPoint);
            setLeaderBoard(array3);
        }
    };

    // Handle navigation to the CategorySelectionScreen
    const handleTryAgain = () => {
        navigation.navigate('CategorySelection');
    };
    console.log(leaderBoard)
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>Leaderboard</Text>
                <ScrollView>
                {leaderBoard.map((player, index) => (
                    <View key={index} style={styles.playerContainer}>
                        <ColoredBetweenAsterisk text={player?.name} />
                        <ColoredBetweenAsterisk text={player?.earnPoint} />
                    </View>
                ))}
                </ScrollView>
                <Pressable style={styles.tryAgainButton} onPress={handleTryAgain}>
                    <Text style={styles.tryAgainButtonText}>You Went Play Again</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10
    },
    mainContainer: {
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flex: 1
    },
    title: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold"
    },
    playerContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignContent: "space-between",
    },
    tryAgainButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#FF327F",
        marginBottom: 20,
    },
    tryAgainButtonText: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "600",
        color: "#fff"
    }
});

export default LeaderboardScreen;
