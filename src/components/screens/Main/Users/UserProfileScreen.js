import Screen from '../../../layout/Screen';
import { Text, View } from 'react-native';
import { Pressable } from 'react-native';
import useStore from '../../../store/useStore';
import UserProfile from '../../../entity/User/UserProfile';
const UserProfileScreen = ({ navigation }) => {
	// Initialisation ---------------
	// State ------------------------
	const [loggedInUser, setLoggedInUser] = useStore('user', null);
	// Handlers ---------------------
	const handleLogout = () => {
		setLoggedInUser(null);
		navigation.replace('LoginLoginScreen');
	};
	// View -------------------------
	return (
		<Screen>
			<View>
				{loggedInUser ? (
					<UserProfile user={loggedInUser} />
				) : (
					<Text>Loading Profile</Text>
				)}
			</View>
		</Screen>
	);
};
export default UserProfileScreen;
