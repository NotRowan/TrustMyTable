import Screen from '../../../layout/Screen';
import { Text, View } from 'react-native';
import { Pressable } from 'react-native';
import useStore from '../../../store/useStore';
import { useFocusEffect } from '@react-navigation/native';
import { useEffect } from 'react';
import { useCallback } from 'react';
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
					<UserProfile
						key={loggedInUser?.UserUserID || 'no-user'}
						navigation={navigation}
						user={loggedInUser}
						logoutUser={handleLogout}
					/>
				) : (
					<Text>Loading Profile</Text>
				)}
			</View>
		</Screen>
	);
};
export default UserProfileScreen;
