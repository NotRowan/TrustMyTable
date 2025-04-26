import Screen from '../../layout/Screen';
import { Text, View } from 'react-native';
import { Pressable } from 'react-native';
import LoginLoginForm from '../../entity/Login/Form/LoginLoginForm';
import { useEffect } from 'react';
import useStore from '../../store/useStore';

const LoginLoginScreen = ({ navigation }) => {
	// Initialisation ---------------
	// State ------------------------
	const [loggedInUser, setLoggedInUser] = useStore('user', null);

	useEffect(() => {
		if (loggedInUser) {
			handleLogInRedirect();
		}
	}, [loggedInUser]);

	// Handlers ---------------------
	const handleLogInRedirect = () => {
		navigation.replace('MainAppTabs');
	};
	const handleLoginSuccess = (user) => {
		setLoggedInUser(user);
		handleLogInRedirect();
	};
	const onClickSignUp = () => {
		navigation.replace('LoginSignUpScreen');
	};
	// View -------------------------
	return (
		<Screen>
			<View>
				<LoginLoginForm handleLoginSuccess={handleLoginSuccess} />
			</View>
			<View>
				<Pressable onPress={onClickSignUp}>
					<View>
						<Text>Not a registered user? Click here to sign up</Text>
					</View>
				</Pressable>
			</View>
		</Screen>
	);
};
export default LoginLoginScreen;
