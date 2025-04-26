import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ReviewList from '../../Reviews/List/ReviewList';
import RestaurantList from '../../Restaurant/List/RestaurantList';
import UserBio from '../UserBio';
import Icons from '../../../UI/Icons';
const Tab = createMaterialTopTabNavigator();

function UserProfileTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Bio"
				component={UserBio}
			/>
			<Tab.Screen
				name="Favourites"
				component={RestaurantList}
			/>
			<Tab.Screen
				name="Reviews"
				component={ReviewList}
			/>
		</Tab.Navigator>
	);
}
export default UserProfileTabs;
