import Form from '../../../UI/Form';
import { useState } from 'react';
import useStore from '../../../store/useStore';
import { useEffect } from 'react';
import { Text } from 'react-native';
import API from '../../../API/API';
const ReviewCreateForm = ({ RestaurantRestaurantID }) => {
	// Initialisation ---------------
	const [loggedInUser, setLoggedInUser] = useStore('user', null);

	const defaultReview = {
		UserUserID: '',
		RestaurantRestaurantID: RestaurantRestaurantID,
		UserReviewContent: '',
		UserReviewRating: 0,
	};
	// State ------------------------
	const [review, setReview] = useState(defaultReview);

	useEffect(() => {
		if (loggedInUser) {
			setReview({ ...review, UserUserID: loggedInUser.UserUserID });
		}
	}, [loggedInUser]);
	// Handlers ---------------------
	const handleChange = (field, value) => {
		setReview({ ...review, [field]: value });
	};

	const handleSubmitReview = async () => {};
	// View -------------------------
	return loggedInUser ? (
		<Form
			buttons={[
				{ label: 'Cancel', icon: null, onClick: () => handleCancelRedirect() },
				{ label: 'Submit', icon: null, onClick: () => handleEdit() },
			]}
		>
			<Form.StarRatingInput
				label="Rating:"
				value={review.UserReviewRating}
				onChange={(value) => handleChange('UserReviewRating', value)}
			/>
			<Form.InputDescription
				label="Review"
				value={review.UserReviewContent}
				onChange={(value) => handleChange('UserReviewContent', value)}
			/>
		</Form>
	) : (
		<Text>Loading User</Text>
	);
};
export default ReviewCreateForm;
