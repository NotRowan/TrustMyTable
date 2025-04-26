import Form from '../../../UI/Form';
import { useState } from 'react';
import API from '../../../API/API';
import { Alert } from 'react-native';

const UserEndpoint = '/users';

const LoginSignUpForm = ({ navigation }) => {
	// Initialisation ---------------
	const defaultUser = {
		UserFirstName: '',
		UserLastName: '',
		UserEmail: '',
		UserUserName: '',
		UserPassword: '',
	};

	// State ------------------------
	const [User, setUser] = useState(defaultUser);
	// Handlers ---------------------
	const handleChange = (field, value) => {
		setUser({ ...User, [field]: value });
	};

	const handleCancelRedirect = () => {
		navigation.replace('LoginLoginScreen');
	};

	const handleSignUp = async (newUser) => {
		const result = await API.post(UserEndpoint, newUser);

		if (result.isSuccess) {
			Alert.alert('Welcome to Trust My Table!');
			handleSignUpRedirect();
		} else {
			Alert.alert('Failed to sign up');
		}
	};
	const handleSignUpRedirect = () => {
		navigation.replace('LoginLoginScreen');
	};
	// View -------------------------
	return (
		<Form
			buttons={[
				{ label: 'Cancel', icon: null, onClick: () => handleCancelRedirect() },
				{ label: 'Sign Up', icon: null, onClick: () => handleSignUp(User) },
			]}
		>
			<Form.InputText
				label="First Name:"
				value={User.UserFirstName}
				onChange={(value) => handleChange('UserFirstName', value)}
			/>
			<Form.InputText
				label="Last Name:"
				value={User.UserLastName}
				onChange={(value) => handleChange('UserLastName', value)}
			/>
			<Form.InputText
				label="Email:"
				value={User.UserEmail}
				onChange={(value) => handleChange('UserEmail', value)}
			/>
			<Form.InputText
				label="Username:"
				value={User.UserUserName}
				onChange={(value) => handleChange('UserUserName', value)}
			/>
			<Form.InputPassword
				label="Password:"
				value={User.UserPassword}
				onChange={(value) => handleChange('UserPassword', value)}
			/>
		</Form>
	);
};
export default LoginSignUpForm;
