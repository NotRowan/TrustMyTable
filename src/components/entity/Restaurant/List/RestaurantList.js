import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import useLoad from '../../../API/useLoad';
import { useEffect, useState } from 'react';
import { defaultStyles } from '../../../UI/Stylesheet';
import RestaurantCard from '../Card/RestaurantCard';

const RestaurantList = ({ user }) => {
	// Initialisation ---------------
	const favoritesEndpoint = `/userfavourites/user/${user.UserUserID}`;
	const [fetchedFavorites, , isLoadingFavorites, loadFavorites] =
		useLoad(favoritesEndpoint);

	// State ------------------------
	const [favoriteRestaurants, setFavoriteRestaurants] = useState([]);

	useEffect(() => {
		if (fetchedFavorites) {
			const uniqueFavorites = fetchedFavorites.reduce((acc, current) => {
				const x = acc.find(
					(item) =>
						item.RestaurantRestaurantID === current.RestaurantRestaurantID
				);
				if (!x) {
					return acc.concat([current]);
				} else {
					return acc;
				}
			}, []);
			setFavoriteRestaurants(uniqueFavorites);
		}
	}, [fetchedFavorites]);

	// Handlers ---------------------
	// View -------------------------
	return (
		<View style={defaultStyles.container}>
			{isLoadingFavorites ? (
				<ActivityIndicator
					size="large"
					color="#007AFF"
				/>
			) : favoriteRestaurants.length > 0 ? (
				<FlatList
					data={favoriteRestaurants}
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
				<Text>No favorite restaurants found.</Text>
			)}
		</View>
	);
};

export default RestaurantList;
