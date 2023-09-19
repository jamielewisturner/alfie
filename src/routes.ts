import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

//Don't worry about this, its just used to do the types correctly 
export type ScreenNavigationProps<T extends keyof RootStackParamList> = {
    navigation: NativeStackNavigationProp<RootStackParamList, T>;
    route: RouteProp<RootStackParamList, T>;
};

//Defines the names of each route, just better practice to use an enum, don't worry too much about this either
export enum Routes {
    HOME = 'Home',
    MESSAGES = 'Messages',
    CONVERSATION = 'Conversation'
}

//This defines the parameters that you can pass to each screen
//so for convesation you can pass the name of who you are talking to from the messages screen
export type RootStackParamList = {
    Home: undefined;
    Messages: undefined;
    Conversation: {name: string}
};

