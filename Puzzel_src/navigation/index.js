import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategorySelectionScreen from './Puzzel_src/screens/categorySelectionScreen/CategorySelectionScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LeaderboardScreen from './Puzzel_src/screens/leaderboardScreen/LeaderboardScreen';
import ResultScreen from './Puzzel_src/screens/resultScreen/ResultScreen';
import GameScreen from './Puzzel_src/screens/gameScreen/GameScreen';
import ChatRoomScreen from './Puzzel_src/screens/chatsScreen/chatRoom';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './Puzzel_src/api/reducers';
import rootSaga from './Puzzel_src/api/sagas';
import createSagaMiddleware from 'redux-saga';

const Stack = createNativeStackNavigator();
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
const firebaseConfig = {
  apiKey: 'AIzaSyCIfIvlstUYD0fUjjn-lTOk0fFUB0pM5hg',
  authDomain: '<your-auth-domain>',
  projectId: 'puzzle-adcad',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '1014210961202',
  appId: '1:1014210961202:android:fb2598ae2c08c181ed412b',
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
              <Stack.Screen
                name='ChatsRoom'
                component={ChatRoomScreen}
                options={{ title: "Real Time Chat" }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}
