import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import StarRating from '../../../UI/StarRating';

const ReviewCard = ({ review }) => {
	const {
		UserUserName,
		UserProfileImage,
		UserReviewRating,
		UserReviewContent,
	} = review;

	return (
		<View style={styles.reviewCard}>
			<View style={styles.userSection}>
				<Image
					source={{
						uri:
							UserProfileImage ||
							'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
					}}
					style={styles.profileImage}
				/>

				<View style={styles.userInfo}>
					<Text style={styles.username}>{UserUserName || 'Unknown User'}</Text>

					<View style={styles.starRatingContainer}>
						<StarRating
							value={UserReviewRating}
							size={20}
							onChange={() => {}}
						/>
					</View>
				</View>
			</View>

			<Text style={styles.reviewContent}>{UserReviewContent}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	reviewCard: {
		marginVertical: 10,
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 8,
		backgroundColor: '#f9f9f9',
	},
	userSection: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	profileImage: {
		width: 40,
		height: 40,
		borderRadius: 20,
		marginRight: 10,
	},
	userInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		flex: 1,
	},
	username: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	starRatingContainer: {
		marginLeft: 10,
	},
	reviewContent: {
		fontSize: 14,
		marginTop: 5,
	},
});

export default ReviewCard;
