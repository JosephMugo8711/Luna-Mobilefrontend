// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SignUp } from './src/components/LandingPage/SignUp';
import { Login } from './src/components/LandingPage/Login';
import { Profile } from './src/components/LandingPage/Profile';
import { ProfilePage } from './src/components/LandingPage/ProfilePage';
import { Review } from './src/components/LandingPage/Review';
import { ProfileIcons } from './src/components/LandingPage/ProfileIcons';

export default function App() {
  return (
    <View style={styles.container}>
      <ProfilePage /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
