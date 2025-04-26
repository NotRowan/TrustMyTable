import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
const RestaurantList = ({}) => {
	// Initialisation ---------------
	// State ------------------------
	// Handlers ---------------------
	// View -------------------------
	return (
		<View style={styles.container}>
			<Text>Restaurants List</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center', // optional: center the text vertically
		alignItems: 'center', // optional: center the text horizontally
	},
});
export default RestaurantList;
