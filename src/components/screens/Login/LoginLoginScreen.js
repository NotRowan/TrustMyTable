import Screen from '../../layout/Screen';
import { Text, View } from 'react-native';
import LoginLoginForm from '../../entity/Login/Form/LoginLoginForm';
const LoginLoginScreen = ({ navigation }) => {
	// Initialisation ---------------
	// State ------------------------
	// Handlers ---------------------
	const handleLogInRedirect = () => {
		navigation.replace('MainAppTabs');
	};
	// View -------------------------

	return (
		<Screen>
			<View>
				<LoginLoginForm handleLogin={handleLogInRedirect} />
			</View>
		</Screen>
	);
};
export default LoginLoginScreen;
