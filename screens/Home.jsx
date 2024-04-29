import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeHero from '../components/molecule/HomeHero';
import BreakingNews from '../components/molecule/BreakingNews';

export default function Home() {
  return (
    <View>
      <HomeHero/>
      <BreakingNews/>
      <StatusBar style="auto" />
    </View>
  );
}
