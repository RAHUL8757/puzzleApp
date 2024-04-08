import React from 'react';
import { FirebaseAppProvider } from '@react-native-firebase/app';
import App from './App';



const Main = () => (
  <FirebaseAppProvider config={firebaseConfig}>
    <App />
  </FirebaseAppProvider>
);

export default Main;
