import Screen from '../../layout/Screen';
import { Text, View } from 'react-native';
import RestaurantList from '../../entity/Restaurant/List/RestaurantList';
import { FloatingButton } from '../../UI/Button';
import Icons from '../../UI/Icons';
import Map from '../../entity/Map/Map';
const HomeScreen = ({ navigation }) => {
	// Initialisation ---------------
	// State ------------------------
	// Handlers ---------------------
	const handleRestautantRedirect = (RestaurantRestaurantID) => {
		navigation.navigate('RestaurantViewScreen', {
			RestaurantRestaurantID: RestaurantRestaurantID,
		});
	};
	// View -------------------------
	return (
		<Screen>
			<Map handleRestautantRedirect={handleRestautantRedirect} />
		</Screen>
	);
};
export default HomeScreen;
