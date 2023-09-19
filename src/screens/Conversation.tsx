import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList, Routes } from '../routes';

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

type ConversationProps = NativeStackScreenProps<
  RootStackParamList,
  Routes.CONVERSATION
>;

const ConversationScreen: React.FC<ConversationProps> = ({
  navigation,
  route
}: ConversationProps) => (
  <View style={styles.container}>
    {/* Using route.params you can access data you have sent between pages */}
    <Text style={styles.title}>{`This is your conversation with ${route.params.name}`}</Text>
    <Text>Messages and stuff goes here</Text>
    <Button title='Back' onPress={() => navigation.goBack()}></Button>
  </View>
);
export default ConversationScreen;