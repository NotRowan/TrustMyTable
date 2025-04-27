import { useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ReviewList from '../../Reviews/List/ReviewList';
import RestaurantList from '../../Restaurant/List/RestaurantList';
import UserBio from '../UserBio';
import Icons from '../../../UI/Icons';
const initialLayout = { width: Dimensions.get('window').width };

const UserProfileTabs = () => {
	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{ key: 'bio', title: 'Bio' },
		{
			key: 'reviews',
			title: 'Reviews',
		},
		{
			key: 'favourites',
			title: 'Favourites',
		},
	]);

	const renderScene = SceneMap({
		bio: UserBio,
		reviews: ReviewList,
		favourites: RestaurantList,
	});

	const renderTabBar = (props) => (
		<TabBar
			{...props}
			renderIcon={({ route, focused, color }) => {
				return React.cloneElement(route.icon, {
					color: focused ? 'blue' : 'gray',
					style: [styles.icon, { color: focused ? 'blue' : 'gray' }],
				});
			}}
			indicatorStyle={{ backgroundColor: 'black' }}
			style={{
				backgroundColor: 'black',
				elevation: 4,
			}}
			showLabel={false}
		/>
	);

	return (
		<TabView
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={initialLayout}
			renderTabBar={renderTabBar}
		/>
	);
};

export default UserProfileTabs;
