import { StyleSheet } from 'react-native';

export const defaultStyles = StyleSheet.create({
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		padding: 10,
		textAlign: 'center',
	},

	container: {
		flex: 1,
		width: '100%',
	},

	card: {
		flexDirection: 'row',
		backgroundColor: '#d5eefd',
		padding: 10,
		width: '100%',
		marginBottom: 10,
		borderRadius: 8,
		elevation: 3,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
		alignItems: 'center',
	},

	cardContainer: {
		paddingHorizontal: 10,
	},

	itemTextInput: {
		height: 50,
		paddingLeft: 10,
		fontSize: 16,
		backgroundColor: 'white',
		borderRadius: 7,
		borderWidth: 1,
		borderColor: 'lightgray',
		marginHorizontal: 10,
	},
});

export const formStyles = StyleSheet.create({
	form: {
		padding: 10,
	},

	formContainer: {
		gap: 10,
		padding: 10,
	},

	formItems: {
		gap: 5,
	},

	itemlabel: {
		color: 'grey',
		fontSize: 16,
		marginBottom: 5,
	},

	itemTextInput: {
		height: 50,
		paddingLeft: 10,
		fontSize: 16,
		backgroundColor: 'white',
		borderRadius: 7,
		borderWidth: 1,
		borderColor: 'lightgray',
	},

	itemPicker: {
		minHeight: 50,
	},
});

export const loginScreenStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
	},

	loginContainer: {
		width: '100%',
	},

	text: {
		textAlign: 'center',
		marginBottom: 5,
	},

	signUpContainer: {
		padding: 10,
		alignItems: 'center',
	},

	blueText: {
		color: 'blue',
		fontWeight: 'bold',
	},

	pressedText: {
		color: 'lightblue',
		opacity: 0.8,
	},
});

export const activityStyles = StyleSheet.create({
	profileImage: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 15,
	},

	activitydetailscontainer: {
		flex: 1,
	},

	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 4,
		width: '100%',
	},

	activityname: {
		fontSize: 18,
		fontWeight: 'bold',
		flex: 1,
	},

	status: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#666',
		textAlign: 'right',
	},

	activityInfo: {
		gap: 4,
	},

	detail: {
		fontSize: 14,
		color: '#333',
	},

	bold: {
		fontWeight: 'bold',
	},
});

export const buttonStyles = StyleSheet.create({
	buttonTray: {
		flexDirection: 'row',
		gap: 1,
		padding: 10,
	},

	button: {
		minHeight: 30,
		borderWidth: 1,
		borderRadius: 7,
		borderColor: 'grey',
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 3,
		flex: 1,
		flexDirection: 'row',
		gap: 5,
	},

	label: {
		fontSize: 15,
		fontWeight: 'bold',
	},

	addFriendButton: {
		position: 'absolute',
		right: 20,
		bottom: 20,
		width: 56,
		height: 56,
		borderRadius: 28,
		backgroundColor: '#0091ff',
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 4,
	},
	iconButton: {
		padding: 10,
		margin: 5,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export const locationCardStyles = StyleSheet.create({
	card: {
		flexDirection: 'column',
		backgroundColor: '#fff',
		padding: 15,
		marginBottom: 10,
		borderRadius: 8,
		elevation: 3,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
	},
	locationName: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	locationDetail: {
		fontSize: 14,
		color: '#666',
	},
	editButton: {
		marginTop: 10,
		padding: 10,
		backgroundColor: '#007AFF',
		borderRadius: 5,
		alignItems: 'center',
	},
});

export const locationListStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	itemTextInput: {
		height: 40,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 8,
		paddingHorizontal: 16,
		marginBottom: 16,
	},
});

export const userCardStyles = StyleSheet.create({
	profileImage: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 15,
	},
	userDetails: {
		flex: 1,
		flexDirection: 'column',
	},
	username: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	userDetail: {
		fontSize: 14,
		color: '#666',
	},
});

export const userProfileStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
		backgroundColor: '#fff',
	},
	profileContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		paddingBottom: 15,
	},
	userInfo: {
		flexDirection: 'column',
	},
	username: {
		fontSize: 22,
		fontWeight: 'bold',
	},
	fullName: {
		fontSize: 16,
		color: '#666',
	},
	profileImage: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	divider: {
		height: 1,
		backgroundColor: '#ccc',
		marginVertical: 10,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		width: '100%',
	},
	button: {
		backgroundColor: '#007AFF',
		padding: 10,
		borderRadius: 5,
		marginLeft: 10,
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
	},
});

export const activityViewStyles = StyleSheet.create({
	buttonTrayContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20,
	},
	profileSection: {
		alignItems: 'center',
		marginTop: 20,
		marginBottom: 20,
	},
	profileImage: {
		width: 80,
		height: 80,
		borderRadius: 40,
		marginBottom: 10,
	},
	activityName: {
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	activityInfo: {
		paddingHorizontal: 20,
	},
	detail: {
		fontSize: 16,
		marginBottom: 10,
	},
	bold: {
		fontWeight: 'bold',
	},
});
