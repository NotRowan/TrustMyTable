import { View, Text, Image, StyleSheet } from 'react-native';
import UserProfileTabs from './Tabs/UserProfileTabs';
import { ButtonTray, Button, IconButton } from '../../UI/Button';
import Icons from '../../UI/Icons';
const UserProfile = ({ navigation, user, logoutUser }) => {
	// Initialisation ---------------
	// State ------------------------

	// Handlers ---------------------
	const onClickEditRedirect = () => {
		navigation.navigate('UserEditProfileScreen');
	};
	// View -------------------------
	return (
		<View style={{ flexDirection: 'column' }}>
			<View style={{ flexDirection: 'row', padding: 15 }}>
				<Image
					source={{
						uri:
							user.UserProfileImage ||
							'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
					}}
					style={{
						width: 80,
						height: 80,
						borderRadius: 40,
						backgroundColor: '#ccc',
					}}
				/>
				<View style={{ marginLeft: 16 }}>
					<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
						{user.UserUserName}
					</Text>
					<Text style={{ fontSize: 16, color: '#555' }}>
						{user.UserFirstName} {user.UserLastName}
					</Text>
				</View>
			</View>
			<View>
				<ButtonTray>
					<Button
						label="Edit Profile"
						onClick={() => {
							onClickEditRedirect();
						}}
					/>
					<Button
						label="Logout"
						onClick={() => {
							logoutUser();
						}}
					/>
				</ButtonTray>
			</View>
			<View style={{ height: 580 }}>
				<UserProfileTabs />
			</View>
		</View>
	);
};

export default UserProfile;
