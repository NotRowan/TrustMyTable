import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const StarRating = ({ value, onChange, size = 30 }) => {
	const handleStarPress = (rating) => {
		onChange(rating);
	};

	return (
		<View style={styles.starContainer}>
			{[1, 2, 3, 4, 5].map((star) => (
				<TouchableOpacity
					key={star}
					onPress={() => handleStarPress(star)}
				>
					<FontAwesome
						name={star <= value ? 'star' : 'star-o'}
						size={size}
						color={star <= value ? '#FFD700' : '#d3d3d3'}
					/>
				</TouchableOpacity>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	starContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});

export default StarRating;
