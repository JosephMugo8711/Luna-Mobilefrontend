import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SignUp } from './src/components/LandingPage/SignUp';
import { Login } from './src/components/LandingPage/Login';
import { Profile } from './src/components/LandingPage/Profile';

export default function App() {
  return (
    <View style={styles.container}>
      <Profile /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
