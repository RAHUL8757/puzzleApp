import { View, StyleSheet } from 'react-native';
import NavigationComponent from './src/navigation/index'

export default function App() {
  return (
    <View style={styles.container}>
     <NavigationComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
