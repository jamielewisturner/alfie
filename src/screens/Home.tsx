import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList, Routes } from '../routes';


//You can design how each component looks using styles, very similar to css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
});

//Don't worry too much about this just do something similar for each page
//It just tells typescript the types of the parameters being passes into each page
type HomeProps = NativeStackScreenProps<
  RootStackParamList,
  Routes.HOME
>;

const HomeScreen: React.FC<HomeProps> = ({
  navigation,
}: HomeProps) => (
  //All the components of the page go here
  <View style={styles.container}>
    <Text style={styles.title}>Welcome to the App!</Text>
    <Button title='My Messages' onPress={() => navigation.navigate(Routes.MESSAGES)}></Button>
  </View>
);
export default HomeScreen;