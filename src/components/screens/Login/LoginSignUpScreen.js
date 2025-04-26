import Screen from '../../layout/Screen';
import { Text, View } from 'react-native';
import LoginSignUpForm from '../../entity/Login/Form/LoginSignUpForm';
const LoginSignUpScreen = ({ navigation }) => {
	// Initialisation ---------------
	// State ------------------------
	// Handlers ---------------------
	// View -------------------------
	return (
		<Screen>
			<View>
				<LoginSignUpForm navigation={navigation} />
			</View>
		</Screen>
	);
};
export default LoginSignUpScreen;
