import { View, Text, Image, StyleSheet } from 'react-native';
import { ButtonTray, Button, FloatingButton } from '../../UI/Button';
import ReviewListUser from '../Reviews/List/ReviewListUser';
import Icons from '../../UI/Icons';
const UserProfile = ({ navigation, user, logoutUser }) => {
	// Handlers ---------------------
	const onClickEditRedirect = () => {
		navigation.navigate('UserEditProfileScreen');
	};

	const onClickAllergyProfileRedirect = () => {
		navigation.navigate('AllergyProfileScreen');
	};

	// View -------------------------
	return (
		<View style={styles.container}>
			<View style={styles.userInfoSection}>
				<Image
					source={{
						uri:
							user.UserProfileImage ||
							'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
					}}
					style={styles.profileImage}
				/>
				<View style={styles.userDetails}>
					<Text style={styles.username}>{user.UserUserName}</Text>
					<Text style={styles.fullName}>
						{user.UserFirstName} {user.UserLastName}
					</Text>
				</View>
			</View>

			<View>
				<ButtonTray>
					<Button
						label="Edit Profile"
						onClick={onClickEditRedirect}
					/>
					<Button
						label="Logout"
						onClick={() => logoutUser()}
					/>
				</ButtonTray>
			</View>

			<View style={styles.divider} />

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Bio</Text>
				<Text style={styles.bioText}>
					{user.UserUserBio ? user.UserUserBio : 'No bio available.'}
				</Text>
			</View>

			<View style={styles.divider} />
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Reviews</Text>
				<ReviewListUser user={user} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		padding: 15,
	},
	userInfoSection: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 15,
	},
	profileImage: {
		width: 80,
		height: 80,
		borderRadius: 40,
		backgroundColor: '#ccc',
	},
	userDetails: {
		marginLeft: 16,
	},
	username: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	fullName: {
		fontSize: 16,
		color: '#555',
	},
	divider: {
		height: 1,
		backgroundColor: '#ccc',
		marginVertical: 15,
	},
	section: {
		marginBottom: 20,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 8,
	},
	bioText: {
		fontSize: 14,
		color: '#333',
	},
});

export default UserProfile;
