import Form from '../../../UI/Form';
import { useState, useEffect } from 'react';
import useLoad from '../../../API/useLoad';
import { Alert, View, ActivityIndicator } from 'react-native';
import API from '../../../API/API';

const allergyEndpoint = '/allergies';
const allergyProfileEndpoint = '/allergyprofiles';

const AllergyForm = ({ loggedInUser, goBackAllergyProfile }) => {
	// State initialization
	const [fetchedAllergies, , isLoadingAllergies] = useLoad(allergyEndpoint);
	const [fetchedAllergyProfiles, , isLoadingProfiles, loadAllergyProfiles] =
		useLoad(`${allergyProfileEndpoint}/user/${loggedInUser?.UserUserID || ''}`);
	const [selectedAllergies, setSelectedAllergies] = useState([]);

	// Update selected allergies when profiles load
	useEffect(() => {
		if (fetchedAllergyProfiles.length > 0) {
			const currentAllergyIDs = fetchedAllergyProfiles.map(
				(profile) => profile.AllergyAllergyID
			);
			setSelectedAllergies(currentAllergyIDs);
		}
	}, [fetchedAllergyProfiles]);

	// Reload when user changes
	useEffect(() => {
		if (loggedInUser?.UserUserID) {
			loadAllergyProfiles(
				`${allergyProfileEndpoint}/user/${loggedInUser.UserUserID}`
			);
		}
	}, [loggedInUser]);

	const submitAllergies = async () => {
		if (!loggedInUser?.UserUserID) {
			Alert.alert('Error', 'User not logged in');
			return;
		}

		try {
			// Delete existing allergy profiles
			const deleteResponse = await API.delete(
				`${allergyProfileEndpoint}/user/${loggedInUser.UserUserID}`
			);

			if (!deleteResponse.isSuccess) {
				throw new Error(
					deleteResponse.error?.message || 'Failed to delete existing allergies'
				);
			}

			// If no allergies are selected, just finish
			if (!selectedAllergies || selectedAllergies.length === 0) {
				Alert.alert('Success', 'All allergies removed successfully');
				goBackAllergyProfile();
				return;
			}

			// Post new allergy profiles
			const postResponse = await API.post(allergyProfileEndpoint, {
				UserUserID: loggedInUser.UserUserID,
				allergies: selectedAllergies,
				severity: null,
			});

			if (postResponse.isSuccess) {
				goBackAllergyProfile();
			} else {
				throw new Error(
					postResponse.error?.message || 'Failed to save new allergens'
				);
			}
		} catch (error) {
			Alert.alert(
				'Error',
				error.message || 'An unexpected error occurred while updating allergies'
			);
		}
	};

	if (isLoadingAllergies || isLoadingProfiles) {
		return (
			<Form>
				<View style={{ padding: 20, alignItems: 'center' }}>
					<ActivityIndicator size="large" />
				</View>
			</Form>
		);
	}

	return (
		<Form
			buttons={[
				{
					label: 'Save allergies',
					icon: null,
					onClick: submitAllergies,
				},
			]}
		>
			<Form.InputCheckboxGroup
				label="Select allergies"
				options={fetchedAllergies.map((allergy) => ({
					label: allergy.AllergyName,
					value: allergy.AllergyAllergyID,
				}))}
				selectedValues={selectedAllergies}
				onChange={setSelectedAllergies}
			/>
		</Form>
	);
};

export default AllergyForm;
