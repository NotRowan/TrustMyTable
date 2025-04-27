import Screen from '../../../layout/Screen';
import RestaurantView from '../../../entity/Restaurant/RestaurantView';

const RestaurantViewScreen = ({ navigation, route }) => {
	// Initialisation ---------------
	const { RestaurantRestaurantID } = route.params;
	// State ------------------------
	// Handlers ---------------------
	const ReviewCreationRedirect = () => {
		navigation.navigate('ReviewCreateScreen', {
			RestaurantRestaurantID: RestaurantRestaurantID,
		});
	};
	// View -------------------------
	return (
		<Screen>
			<RestaurantView
				RestaurantRestaurantID={RestaurantRestaurantID}
				ReviewCreationRedirect={ReviewCreationRedirect}
			/>
		</Screen>
	);
};
export default RestaurantViewScreen;
