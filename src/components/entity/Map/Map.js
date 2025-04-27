import React, { useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import useLoad from '../../API/useLoad';

const Map = ({ handleRestautantRedirect }) => {
	const [restaurants, , isLoading] = useLoad('/restaurants');
	const mapRef = useRef(null);
	const markerRefs = useRef({});

	return (
		<View style={styles.mapContainer}>
			<MapView
				ref={mapRef}
				style={styles.map}
				initialRegion={{
					latitude: 51.5074,
					longitude: -0.1278,
					latitudeDelta: 0.04,
					longitudeDelta: 0.05,
				}}
				scrollEnabled={true}
				zoomEnabled={true}
			>
				{!isLoading &&
					restaurants.map((restaurant) => (
						<Marker
							key={restaurant.RestaurantRestaurantID}
							coordinate={{
								latitude: restaurant.RestaurantLat,
								longitude: restaurant.RestaurantLong,
							}}
							title={restaurant.RestaurantName}
							ref={(ref) => {
								markerRefs.current[restaurant.RestaurantRestaurantID] = ref;
							}}
							onPress={() => {
								handleRestautantRedirect(restaurant.RestaurantRestaurantID);
							}}
						></Marker>
					))}
			</MapView>
		</View>
	);
};

const styles = StyleSheet.create({
	mapContainer: {
		flex: 1,
		borderRadius: 20,
		overflow: 'hidden',
		borderWidth: 2,
		borderColor: '#ccc',
		margin: 10,
	},
	map: {
		flex: 1,
	},
});

export default Map;
