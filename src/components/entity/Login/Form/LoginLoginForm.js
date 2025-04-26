import Form from '../../../UI/Form';
import { useState } from 'react';
import API from '../../../API/API';
import { Alert } from 'react-native';

const userLoginEndpoint = '/users/login';

const LoginLoginForm = ({ handleLoginSuccess }) => {
	// Initialisation ---------------
	const defaultLogin = {
		UserUserName: null,
		UserPassword: null,
	};
	// State ------------------------
	const [login, setLogin] = useState(defaultLogin);
	// Handlers ---------------------
	const handleChange = (field, value) => {
		setLogin({ ...login, [field]: value });
	};

	const checkLogin = async (userLogin) => {
		const result = await API.post(userLoginEndpoint, userLogin);

		if (result.isSuccess) {
			Alert.alert('Welcome back to Trust My Table!');
			handleLoginSuccess(result.result);
		} else {
			Alert.alert('Failed to sign in');
		}
	};
	// View -------------------------

	return (
		<Form
			buttons={[
				{ label: 'Log in', icon: null, onClick: () => checkLogin(login) },
			]}
		>
			<Form.InputText
				label="Username:"
				value={login.UserUserName}
				onChange={(value) => handleChange('UserUserName', value)}
			/>
			<Form.InputPassword
				label="Password:"
				value={login.UserPassword}
				onChange={(value) => handleChange('UserPassword', value)}
			/>
		</Form>
	);
};
export default LoginLoginForm;
