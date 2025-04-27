import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReviewCard = ({ review }) => {
	return (
		<View style={styles.reviewCard}>
			<Text style={styles.reviewRating}>Rating: {review.UserReviewRating}</Text>
			<Text style={styles.reviewContent}>{review.UserReviewContent}</Text>
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
	reviewRating: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	reviewContent: {
		fontSize: 14,
		marginTop: 5,
	},
});

export default ReviewCard;
