import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import useLoad from '../../API/useLoad';
import ReviewCard from '../Reviews/Card/ReviewCard';
import { ButtonTray, Button, IconButton } from '../../UI/Button';
import Icons from '../../UI/Icons';
import API from '../../API/API';
import useStore from '../../store/useStore';
const userFavouritesEndpoint = '/userfavourites/';

const RestaurantView = ({ RestaurantRestaurantID, ReviewCreationRedirect }) => {
	const [restaurant, setRestaurant] = useState(null);
	const [loggedInUser, setLoggedInUser] = useStore('user', null);
	const [
		restaurantData,
		setRestaurantData,
		isRestaurantLoading,
		loadRestaurantData,
	] = useLoad(`/restaurants/${RestaurantRestaurantID}`);

	const [reviews, setReviews, isReviewsLoading, loadReviewsData] = useLoad(
		`/userreviews/restaurant/${RestaurantRestaurantID}`
	);

	useEffect(() => {
		loadRestaurantData(`/restaurants/${RestaurantRestaurantID}`);
		loadReviewsData(`/userreviews/restaurant/${RestaurantRestaurantID}`);
	}, [RestaurantRestaurantID]);

	useEffect(() => {
		if (restaurantData && restaurantData.length > 0) {
			setRestaurant(restaurantData[0]);
		}
	}, [restaurantData]);
	//Handler
	const saveRestaurant = async (userID, RestaurantRestaurantID) => {
		const data = {
			UserUserID: userID,
			RestaurantRestaurantID: RestaurantRestaurantID,
		};

		const result = await API.post(userFavouritesEndpoint, data);

		if (result.isSuccess) {
			console.log('Added to favourites');
		} else {
		}
	};
	//View
	if (isRestaurantLoading || isReviewsLoading) {
		return <Text>Loading...</Text>;
	}

	if (!restaurant) {
		return <Text>Restaurant data not available</Text>;
	}

	const renderHeader = () => (
		<View style={styles.detailsContainer}>
			<Image
				source={{
					uri:
						restaurant.RestaurantRestaurantImage ||
						'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/56/71/59/atmosphere.jpg',
				}}
				style={styles.image}
			/>
			<Text style={styles.restaurantTitle}>
				{restaurant.RestaurantName || 'Failed to load'}
			</Text>
			<Text style={styles.address}>
				{restaurant.RestaurantRestaurantAddress || 'Address not available'}
			</Text>
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
				<IconButton
					icon={<Icons.Favorite />}
					onClick={() => {
						saveRestaurant(loggedInUser.UserUserID, RestaurantRestaurantID);
					}}
				/>
			</ButtonTray>
		</View>
	);

	const renderReview = ({ item }) => (
		<View style={styles.reviewCardWrapper}>
			<ReviewCard review={item} />
		</View>
	);

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
		borderRadius: 10,
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
	reviewCardWrapper: {
		paddingHorizontal: 15,
	},
});

export default RestaurantView;
