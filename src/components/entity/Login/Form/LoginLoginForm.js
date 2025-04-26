import Form from '../../../UI/Form';
import { useState } from 'react';
import API from '../../../API/API';

const LoginLoginForm = ({ handleLogin }) => {
	// Initialisation ---------------
	const defaultLogin = {
		Username: null,
		Password: null,
	};
	// State ------------------------
	const [login, setLogin] = useState(defaultLogin);
	// Handlers ---------------------
	const handleChange = (field, value) => {
		setLogin({ ...login, [field]: value });
	};

	const clickLogin = () => {
		handleLogin();
	};

	const checkLogin = async () => {
		const usernameEndpoint = `/users/username/${login.Username}`;
		console.log(usernameEndpoint);
		const result = await API.get(usernameEndpoint);

		if (result.isSuccess) {
			console.log(result);
		} else {
			console.log('User Does Not Exist');
		}
	};
	// View -------------------------

	return (
		<Form
			buttons={[{ label: 'Log in', icon: null, onClick: () => clickLogin() }]}
		>
			<Form.InputText
				label="Username:"
				value={login.Username}
				onChange={(value) => handleChange('Username', value)}
			/>
			<Form.InputPassword
				label="Password:"
				value={login.Password}
				onChange={(value) => handleChange('Password', value)}
			/>
		</Form>
	);
};
export default LoginLoginForm;
