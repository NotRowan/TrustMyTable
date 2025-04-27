import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import useLoad from '../../API/useLoad';
import ReviewCard from '../Reviews/Card/ReviewCard';
import { ButtonTray, Button } from '../../UI/Button';

const RestaurantView = ({ RestaurantRestaurantID, ReviewCreationRedirect }) => {
	// State to store restaurant data
	const [restaurant, setRestaurant] = useState(null);

	// Fetch restaurant data
	const [
		restaurantData,
		setRestaurantData,
		isRestaurantLoading,
		loadRestaurantData,
	] = useLoad(`/restaurants/${RestaurantRestaurantID}`);

	// Fetch reviews data
	const [reviews, setReviews, isReviewsLoading, loadReviewsData] = useLoad(
		`/userreviews/restaurant/${RestaurantRestaurantID}`
	);

	// Load data when the component mounts
	useEffect(() => {
		loadRestaurantData(`/restaurants/${RestaurantRestaurantID}`);
		loadReviewsData(`/userreviews/restaurant/${RestaurantRestaurantID}`);
	}, [RestaurantRestaurantID]);

	// Handle restaurant data after it loads
	useEffect(() => {
		if (restaurantData && restaurantData.length > 0) {
			setRestaurant(restaurantData[0]); // Set the first restaurant from the array
		}
	}, [restaurantData]);

	// Loading states
	if (isRestaurantLoading || isReviewsLoading) {
		return <Text>Loading...</Text>;
	}

	// Check if restaurant data is available
	if (!restaurant) {
		return <Text>Restaurant data not available</Text>;
	}

	// Header component for the FlatList
	const renderHeader = () => (
		<View style={styles.detailsContainer}>
			{/* Restaurant Image */}
			<Image
				source={{
					uri:
						restaurant.RestaurantRestaurantImage ||
						'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/56/71/59/atmosphere.jpg',
				}}
				style={styles.image}
			/>
			{/* Restaurant Details */}
			<Text style={styles.restaurantTitle}>
				{restaurant.RestaurantName || 'Failed to load'}
			</Text>
			<Text style={styles.address}>
				{restaurant.RestaurantRestaurantAddress || 'Address not available'}
			</Text>
			{/* Display opening times if available */}
			{restaurant.RestaurantAllergenMenu ? (
				<Text style={styles.openingTimes}>Opening Times:</Text>
			) : null}
			<ButtonTray>
				<Button
					label="Leave a review"
					onClick={() => {
						ReviewCreationRedirect();
					}}
				/>
			</ButtonTray>
		</View>
	);

	// Render each review as a ReviewCard component
	const renderReview = ({ item }) => <ReviewCard review={item} />;

	return (
		<FlatList
			data={reviews}
			keyExtractor={(item) => item.UserReviewID.toString()}
			renderItem={renderReview}
			ListHeaderComponent={renderHeader}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	image: {
		width: '100%',
		height: 200,
		resizeMode: 'cover',
	},
	detailsContainer: {
		padding: 15,
		flex: 1,
	},
	restaurantTitle: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	address: {
		fontSize: 16,
		marginVertical: 5,
	},
	openingTimes: {
		fontSize: 14,
		color: 'gray',
	},
});

export default RestaurantView;
