import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View} from 'react-native';
import Countdown from './src/components/CountDown';
import Focus from './src/modules/Focus';
import { colors } from './src/utils/colors';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null)

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject? <Focus addSubject={setCurrentSubject} />:<Countdown minutes={15} />
      // : <View style={styles.timerWrapper}>
      //    <Text style={styles.timerText}>hello, i want to {currentSubject}</Text>
      //   </View>
      }
      <StatusBar style='auto'/>
    </SafeAreaView>
  );
}
//============ styles ============
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  timerWrapper:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText:{
    color: colors.white,
    fontSize: 24,
  }
});
