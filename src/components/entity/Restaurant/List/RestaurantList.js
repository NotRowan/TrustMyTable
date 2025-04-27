import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import useLoad from '../../../API/useLoad';
import { useEffect, useState } from 'react';
import { defaultStyles } from '../../../UI/Stylesheet';
import RestaurantCard from '../Card/RestaurantCard';
const restaurantEndpoint = '/restaurants';

const RestaurantList = ({}) => {
	// Initialisation ---------------
	const [fetchedRestaurants, , isLoadingRestaurants, loadRestaurants] =
		useLoad(restaurantEndpoint);
	// State ------------------------
	const [restaurants, setRestaurants] = useState([]);

	useEffect(() => {
		setRestaurants(fetchedRestaurants || []);
	}, [fetchedRestaurants]);
	// Handlers ---------------------
	console.log(restaurants);
	// View -------------------------
	return (
		<View style={defaultStyles.container}>
			{isLoadingRestaurants ? (
				<ActivityIndicator
					size="large"
					color="#007AFF"
				/>
			) : restaurants.length > 0 ? (
				<FlatList
					data={restaurants}
					keyExtractor={(item) => item.RestaurantRestaurantID.toString()}
					renderItem={({ item }) => (
						<View style={defaultStyles.cardContainer}>
							<RestaurantCard
								RestaurantName={item.RestaurantName}
								RestaurantRestaurantImage={item.RestaurantRestaurantImage}
							/>
						</View>
					)}
				/>
			) : (
				<Text>No restaurants found.</Text>
			)}
		</View>
	);
};

export default RestaurantList;
