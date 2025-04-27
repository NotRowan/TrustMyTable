import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ButtonTray, IconButton } from '../../../UI/Button';
import Icons from '../../../UI/Icons';

const RestaurantCard = ({ RestaurantName, RestaurantRestaurantImage }) => {
	return (
		<View style={styles.card}>
			{/* Restaurant Image */}
			<Image
				source={{
					uri:
						RestaurantRestaurantImage ||
						'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/56/71/59/atmosphere.jpg',
				}}
				style={styles.image}
			/>

			{/* Restaurant Info */}
			<View style={styles.infoContainer}>
				<Text style={styles.name}>{RestaurantName}</Text>
				<View style={styles.ratingContainer}>
					<Text style={styles.ratingText}>reviews</Text>
				</View>
			</View>

			{/* Right Buttons */}
			<View style={styles.buttonContainer}>
				<ButtonTray>
					<IconButton icon={<Icons.Reviews />} />
					<IconButton icon={<Icons.Favorite />} />
				</ButtonTray>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 90,
		backgroundColor: 'white',
		borderRadius: 10,
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginVertical: 6,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		marginHorizontal: 12,
		shadowRadius: 6,
		elevation: 3,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 8,
		marginRight: 10,
		backgroundColor: '#ccc',
	},
	infoContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	name: {
		fontSize: 14,
		fontWeight: 'bold',
		marginBottom: 2,
	},
	ratingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	ratingText: {
		fontSize: 10,
		color: 'gray',
	},
	buttonContainer: {
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		height: '100%',
		marginLeft: 8,
	},
	button: {
		backgroundColor: '#eee',
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 6,
		marginBottom: 2,
	},
	buttonText: {
		fontSize: 10,
		color: '#333',
	},
});

export default RestaurantCard;
