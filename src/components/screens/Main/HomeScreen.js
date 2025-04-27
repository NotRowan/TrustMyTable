import Screen from '../../layout/Screen';
import { Text, View } from 'react-native';
import RestaurantList from '../../entity/Restaurant/List/RestaurantList';
const HomeScreen = ({}) => {
	// Initialisation ---------------
	// State ------------------------
	// Handlers ---------------------
	// View -------------------------
	return (
		<Screen>
			<View>
				<RestaurantList />
			</View>
		</Screen>
	);
};
export default HomeScreen;
