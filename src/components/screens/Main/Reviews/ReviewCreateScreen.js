import Screen from '../../../layout/Screen';
import ReviewCreateForm from '../../../entity/Reviews/Form/ReviewCreateForm';
import useStore from '../../../store/useStore';
import { View, Text } from 'react-native';
const ReviewCreateScreen = ({ route, navigation }) => {
	const { RestaurantRestaurantID } = route.params;
	// Initialisation ---------------
	const [loggedInUser, setLoggedInUser] = useStore('user', null);
	// State ------------------------
	// Handlers ---------------------
	// View -------------------------
	return (
		<Screen>
			<View>
				{loggedInUser ? (
					<ReviewCreateForm RestaurantRestaurantID={RestaurantRestaurantID} />
				) : (
					<Text>Loading Profile</Text>
				)}
			</View>
		</Screen>
	);
};
export default ReviewCreateScreen;
