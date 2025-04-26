import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ReviewList from '../../Reviews/List/ReviewList';
import RestaurantList from '../../Restaurant/List/RestaurantList';
import UserBio from '../UserBio';
import Icons from '../../../UI/Icons';
const Tab = createMaterialTopTabNavigator();

function UserProfileTabs() {
	return (
		<Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
			<Tab.Screen
				name="Bio"
				component={UserBio}
				options={{ tabBarIcon: () => <Icons.Person /> }}
			/>
			<Tab.Screen
				name="Reviews"
				component={ReviewList}
				options={{ tabBarIcon: () => <Icons.Reviews /> }}
			/>
			<Tab.Screen
				name="Favourites"
				component={RestaurantList}
				options={{ tabBarIcon: () => <Icons.Favorite /> }}
			/>
		</Tab.Navigator>
	);
}
export default UserProfileTabs;
