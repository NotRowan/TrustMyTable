import Screen from '../../../layout/Screen';
import AllergyForm from '../../../entity/Allergy/Form/AllergyForm';
import { ScrollView } from 'react-native';
import useStore from '../../../store/useStore';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

const AllergyProfileScreen = ({ navigation }) => {
	const [loggedInUser, setLoggedInUser] = useStore('user', null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, [loggedInUser]);

	const goBackAllergyProfile = () => {
		navigation.pop(1);
	};
	if (isLoading || !loggedInUser) {
		return (
			<Screen>
				<View
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
				>
					<ActivityIndicator size="large" />
				</View>
			</Screen>
		);
	}

	return (
		<Screen>
			<ScrollView style={{ flex: 1 }}>
				<AllergyForm
					loggedInUser={loggedInUser}
					goBackAllergyProfile={goBackAllergyProfile}
				/>
			</ScrollView>
		</Screen>
	);
};

export default AllergyProfileScreen;
