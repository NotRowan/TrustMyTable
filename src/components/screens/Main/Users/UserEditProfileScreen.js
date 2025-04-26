import UserEditUserForm from '../../../entity/User/Form/UserEditUserForm';
import Screen from '../../../layout/Screen';
import { Text, View } from 'react-native';
import useStore from '../../../store/useStore';

const UserEditProfileScreen = ({ navigation }) => {
	// Initialisation ---------------
	const [loggedInUser, setLoggedInUser] = useStore('user', null);
	// State ------------------------
	// Handlers ---------------------
	// View -------------------------
	return (
		<Screen>
			<View>
				{loggedInUser ? (
					<UserEditUserForm navigation={navigation} />
				) : (
					<Text>Loading Profile</Text>
				)}
			</View>
		</Screen>
	);
};
export default UserEditProfileScreen;
