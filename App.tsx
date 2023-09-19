import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList, Routes } from './src/routes';
import HomeScreen from './src/screens/Home';
import MessagesScreen from './src/screens/Messages';
import ConversationScreen from './src/screens/Conversation';

//Defines the differnce pages in app allowing you to navigate between them
//If you do not add each page to the navigator, you will not be able to navigate between them

export default function App() {
  //This just stores a stack of pages
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={Routes.HOME}
      >
      <RootStack.Screen
        name={Routes.HOME}
        component={HomeScreen}
      />
       <RootStack.Screen
        name={Routes.MESSAGES}
        component={MessagesScreen}
      />
       <RootStack.Screen
        name={Routes.CONVERSATION}
        component={ConversationScreen}
      />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
