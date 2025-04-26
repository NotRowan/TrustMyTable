import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
const Screen = ({ children }) => {
	// Initialisation ---------------
	// State ------------------------
	// Handlers ---------------------
	// View -------------------------
	return (
		<SafeAreaView style={styles.screen}>
			{children}
			<StatusBar style="auto" />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 10,
	},
});

export default Screen;
