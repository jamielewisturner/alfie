import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Pressable, StyleSheet, Text, Touchable, View } from 'react-native';
import { RootStackParamList, Routes } from '../routes';

type MessagesProps = NativeStackScreenProps<
  RootStackParamList,
  Routes.MESSAGES
>;

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
  listItem: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

const MessagesScreen: React.FC<MessagesProps> = ({
  navigation,
}: MessagesProps) => {

  const convos = [
    {name: "Hattie", language: 'German'},
    {name: "Bella", language: 'French'},
    {name: "Maisie", language: 'Russian'},
    {name: "Sophie", language: 'Spanish'},
  ];

  return (
    <View style={styles.container}>
    {/* Flatlist will display all of the elements that are given to it as data */}
    <FlatList
        data={convos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          //Render item takes needs a function which takes an item in the data and returns how to display it
          <View style={styles.listItem}>
            <Pressable onPress={() => navigation.navigate(Routes.CONVERSATION, {name: item.name})}>
              <Text>Name: {item.name}</Text>
              <Text>Language: {item.language}</Text>
            </Pressable >
          </View>
        )}
      />
      {/* Back button */}
      <Button title='Back' onPress={() => navigation.goBack()}></Button>
  </View>
);
  }
export default MessagesScreen;