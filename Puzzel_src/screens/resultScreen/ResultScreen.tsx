import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

const ResultScreen = ({ navigation, route }) => {
  const { point } = route.params;

  const handleLeadersBoard = () => {
    const jsonTitleDiscription = storage.getString('numberOfPoint');
    let pointStore = 0;

    if (!!jsonTitleDiscription) {
      pointStore = JSON.parse(jsonTitleDiscription);
    }

    const addPoint = Number(pointStore) + Number(point);
    storage.set('numberOfPoint', JSON.stringify(addPoint));
    navigation.navigate('Leaderboard');
  };

  const handleTryAgain = () => {
    navigation.navigate('CategorySelection');
  };

  return (
    <View style={styles.container}>
      {point === 0 ? (
        <View>
          <Text style={styles.text}>Sorry, you did not solve the puzzle successfully.</Text>
          <Text style={styles.text}>Try new puzzle</Text>
          <Text style={styles.text}>You earned {point} points</Text>
          <Pressable style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: "#FF327F",
                top: 20,
            }} onPress={handleTryAgain}>
                <Text style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "600",
                    color:"#fff"
                }}>Try</Text>
            </Pressable>
        </View>
      ) : (
        <View>
          <Text style={styles.text}>Correct!</Text>
          <Text style={styles.text}>Congratulations</Text>
          <Text style={styles.text}>You earned {point} points</Text>
          <Pressable style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: "#FF327F",
                top: 20,
            }} onPress={handleLeadersBoard}>
                <Text style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "600",
                    color:"#fff"
                }}>Next</Text>
            </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal:20,
    paddingTop:30
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    textAlign:"center"
  },
});

export default ResultScreen;
