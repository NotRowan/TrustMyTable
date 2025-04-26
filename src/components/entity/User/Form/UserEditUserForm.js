import Form from '../../../UI/Form';
import { useState } from 'react';
import API from '../../../API/API';
import { Alert } from 'react-native';
import useStore from '../../../store/useStore';
import { Text } from 'react-native';
import { useEffect } from 'react';
const UserEndpoint = '/users/';

const UserEditUserForm = ({ navigation }) => {
	// Initialisation ---------------
	const defaultUser = {
		UserFirstName: '',
		UserLastName: '',
		UserEmail: '',
		UserProfileImage: '',
	};
	// State ------------------------
	const [loggedInUser, setLoggedInUser] = useStore('user', null);
	const [User, setUser] = useState(loggedInUser || defaultUser);

	useEffect(() => {
		if (loggedInUser) {
			setUser(loggedInUser);
		}
	}, [loggedInUser]);

	// Handlers ---------------------
	const handleChange = (field, value) => {
		setUser({ ...User, [field]: value });
	};

	const handleCancelRedirect = () => {
		navigation.goBack();
	};

	const handleEdit = async () => {
		const result = await API.put(UserEndpoint + User.UserUserID, User);
		if (result.isSuccess) {
			setLoggedInUser({ ...User });
			handleEditRedirect();
		} else {
			Alert.alert('Failed to edit user');
		}
	};
	const handleEditRedirect = () => {
		navigation.goBack();
	};
	// View -------------------------
	return loggedInUser ? (
		<Form
			buttons={[
				{ label: 'Cancel', icon: null, onClick: () => handleCancelRedirect() },
				{ label: 'Edit', icon: null, onClick: () => handleEdit() },
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
				label="Profile Image:"
				value={User.UserProfileImage}
				onChange={(value) => handleChange('UserProfileImage', value)}
			/>
		</Form>
	) : (
		<Text>Loading User</Text>
	);
};
export default UserEditUserForm;
