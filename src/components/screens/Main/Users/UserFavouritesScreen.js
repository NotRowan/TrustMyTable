import RestaurantList from '../../../entity/Restaurant/List/RestaurantList';
import Screen from '../../../layout/Screen';
import useStore from '../../../store/useStore';
import { Text } from 'react-native';
const UserFavouritesScreen = ({}) => {
	// Initialisation ---------------
	const [loggedInUser, setLoggedInUser] = useStore('user', null);
	// State ------------------------
	// Handlers ---------------------
	// View -------------------------
	return (
		<Screen>
			{loggedInUser ? (
				<RestaurantList user={loggedInUser} />
			) : (
				<Text>Loading Profile</Text>
			)}
		</Screen>
	);
};
export default UserFavouritesScreen;
