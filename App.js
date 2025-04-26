import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from './src/components/UI/Icons';

//Screens IMPORTS
import LoginLoginScreen from './src/components/screens/Login/LoginLoginScreen';
import UserProfileScreen from './src/components/screens/Main/Users/UserProfileScreen';
import HomeScreen from './src/components/screens/Main/HomeScreen';
import UserReviewsScreen from './src/components/screens/Main/Users/UserReviewsScreen';

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
					name="MainAppTabs"
					component={TabGroup}
				/>
			</Stack.Navigator>
		);
	}

	function TabGroup() {
		return (
			<Tab.Navigator
				screenOptions={{
					headerShown: false,
					unmountOnBlur: true,
				}}
			>
				<Tab.Screen
					name="HomeScreen"
					component={HomeScreen}
					options={{
						tabBarLabel: 'Home',
						tabBarIcon: () => <Icons.Restaurant />,
					}}
				/>
				<Tab.Screen
					name="UserReviewsScreen"
					component={UserReviewsScreen}
					options={{
						tabBarLabel: 'Feed',
						tabBarIcon: () => <Icons.Reviews />,
					}}
				/>
				<Tab.Screen
					name="UserProfileScreen"
					component={UserProfileScreen}
					options={{
						tabBarLabel: 'Profile',
						tabBarIcon: () => <Icons.Face />,
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
