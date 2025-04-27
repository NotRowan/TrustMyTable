import Form from '../../../UI/Form';
import { useState, useEffect } from 'react';
import useLoad from '../../../API/useLoad';
import { Alert, View, ActivityIndicator } from 'react-native';
import API from '../../../API/API';

const allergyEndpoint = '/allergies';
const allergyProfileEndpoint = '/allergyprofiles';

const AllergyForm = ({ loggedInUser }) => {
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
			console.log('Starting allergy update process...');
			console.log('User ID:', loggedInUser.UserUserID);
			console.log('Allergies to add:', selectedAllergies);

			// 1. First delete existing allergies
			console.log('Making DELETE request...');
			const deleteResponse = await API.delete(
				`${allergyProfileEndpoint}/user/${loggedInUser.UserUserID}`
			);

			console.log('DELETE response:', deleteResponse);

			if (!deleteResponse.isSuccess) {
				throw new Error(
					deleteResponse.error?.message || 'Failed to delete existing allergies'
				);
			}

			// 2. Then add new allergies (only if selectedAllergies has items)
			if (!selectedAllergies || selectedAllergies.length === 0) {
				console.log('No allergies selected, skipping POST');
				Alert.alert('Success', 'All allergies removed successfully');
				return;
			}

			console.log('Making POST request...');
			const postResponse = await API.post(allergyProfileEndpoint, {
				UserUserID: loggedInUser.UserUserID,
				allergies: selectedAllergies,
				severity: null,
			});

			console.log('POST response:', postResponse);

			if (postResponse.isSuccess) {
				Alert.alert('Success', 'Allergies updated successfully');
			} else {
				throw new Error(
					postResponse.error?.message || 'Failed to save new allergens'
				);
			}
		} catch (error) {
			console.error('Error in submitAllergies:', error);
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
