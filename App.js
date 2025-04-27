import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from './src/components/UI/Icons';
import useStore from './src/components/store/useStore';
import { Image } from 'react-native';
//Screens IMPORTS
//LOGIN
import LoginLoginScreen from './src/components/screens/Login/LoginLoginScreen';
import LoginSignUpScreen from './src/components/screens/Login/LoginSignUpScreen';
//MAIN
import UserProfileScreen from './src/components/screens/Main/Users/UserProfileScreen';
import HomeScreen from './src/components/screens/Main/HomeScreen';
import UserReviewsScreen from './src/components/screens/Main/Users/UserReviewsScreen';

//USER
import UserEditProfileScreen from './src/components/screens/Main/Users/UserEditProfileScreen';
export default function App() {
	// Initialisation ---------------

	const Stack = createNativeStackNavigator();
	const Tab = createBottomTabNavigator();

	function AppNavigator() {
		return (
			<Stack.Navigator
				initialRouteName="LoginLoginScreen"
				screenOptions={{
					headerStyle: { backgroundColor: 'black' },
					headerTintColor: 'white',
					headerShown: false,
				}}
			>
				<Stack.Screen
					name="LoginLoginScreen"
					component={LoginLoginScreen}
				/>
				<Stack.Screen
					name="LoginSignUpScreen"
					component={LoginSignUpScreen}
				/>
				<Stack.Screen
					name="UserEditProfileScreen"
					component={UserEditProfileScreen}
				/>
				<Stack.Screen
					name="MainAppTabs"
					component={TabGroup}
				/>
			</Stack.Navigator>
		);
	}

	function TabGroup() {
		return (
			<Tab.Navigator
				initialRouteName="HomeScreen"
				screenOptions={{
					headerShown: false,
					unmountOnBlur: true,
				}}
			>
				<Tab.Screen
					name="UserReviewsScreen"
					component={UserReviewsScreen}
					options={{
						tabBarLabel: 'Feed',
						tabBarIcon: () => <Icons.Reviews />,
					}}
				/>
				<Tab.Screen
					name="HomeScreen"
					component={HomeScreen}
					options={{
						tabBarLabel: 'Home',
						tabBarIcon: () => <Icons.Restaurant />,
					}}
				/>
				<Tab.Screen
					name="UserProfileScreen"
					component={UserProfileScreen}
					options={{
						tabBarLabel: 'Profile',
						tabBarIcon: () => {
							const [user] = useStore('user', null);
							if (user && user.UserProfileImage) {
								return (
									<Image
										source={{ uri: user.UserProfileImage }}
										style={{
											width: 30,
											height: 30,
											borderRadius: 12,
										}}
									/>
								);
							} else {
								return <Icons.Restaurant />;
							}
						},
					}}
				/>
			</Tab.Navigator>
		);
	}
	// State ------------------------
	// Handlers ---------------------
	// View -------------------------

	return (
		<NavigationContainer>
			<AppNavigator />
		</NavigationContainer>
	);
}
