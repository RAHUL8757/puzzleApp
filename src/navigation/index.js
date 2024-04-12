import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategorySelectionScreen from '../screens/categorySelectionScreen/CategorySelectionScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LeaderboardScreen from '../screens/leaderboardScreen/LeaderboardScreen';
import ResultScreen from '../screens/resultScreen/ResultScreen';
import GameScreen from '../screens/gameScreen/GameScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="CategorySelection"
                component={CategorySelectionScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Game"
                component={GameScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Leaderboard"
                component={LeaderboardScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Result"
                component={ResultScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
  );
}
