import { useState } from 'react';
import { Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ReviewList from '../../Reviews/List/ReviewList';
import RestaurantList from '../../Restaurant/List/RestaurantList';
import UserBio from '../UserBio';
import Icons from '../../../UI/Icons';

const initialLayout = { width: Dimensions.get('window').width };

const UserProfileTabs = () => {
	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{ key: 'bio', title: 'Bio', icon: () => <Icons.Person /> },
		{ key: 'reviews', title: 'Reviews', icon: () => <Icons.Reviews /> },
		{ key: 'favourites', title: 'Favourites', icon: () => <Icons.Favorite /> },
	]);

	const renderScene = SceneMap({
		bio: UserBio,
		reviews: ReviewList,
		favourites: RestaurantList,
	});

	const renderTabBar = (props) => (
		<TabBar
			{...props}
			renderIcon={({ route, focused, color }) => route.icon()}
			indicatorStyle={{ backgroundColor: 'black' }}
			style={{ backgroundColor: 'white' }}
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
