import { View, Text, Image, StyleSheet } from 'react-native';
import UserProfileTabs from './Tabs/UserProfileTabs';
import { NavigationIndependentTree } from '@react-navigation/native';
import { ButtonTray, Button } from '../../UI/Button';
const UserProfile = ({ user }) => {
	// Initialisation ---------------
	console.log(user);
	// State ------------------------
	// Handlers ---------------------
	// View -------------------------
	return (
		<View style={{ paddingTop: 80, flexDirection: 'column' }}>
			<View style={{ flexDirection: 'row', padding: 15 }}>
				<Image
					source={{
						uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
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
							console.log('Edit Profile clicked');
						}}
						styleButton={{ padding: 12 }}
					/>
					<Button
						label="Logout"
						onClick={() => {
							console.log('Logout clicked');
						}}
						styleButton={{ height: 5, padding: 12, backgroundColor: 'blue' }} // Optional: make logout button red
						styleLabel={{ color: 'white' }}
					/>
				</ButtonTray>
			</View>
			<View style={{ flex: 1 }}>
				<NavigationIndependentTree>
					<UserProfileTabs />
				</NavigationIndependentTree>
			</View>
		</View>
	);
};

export default UserProfile;
