import Form from '../../../UI/Form';
import { useState } from 'react';
import useStore from '../../../store/useStore';
import { useEffect } from 'react';
import { Text } from 'react-native';
import API from '../../../API/API';

const reviewsEndpoint = '/userreviews';
const ReviewCreateForm = ({
	RestaurantRestaurantID,
	handleGoBack,
	userReview,
}) => {
	// Initialisation ---------------
	const [loggedInUser, setLoggedInUser] = useStore('user', null);

	const defaultReview = {
		UserUserID: '',
		RestaurantRestaurantID: RestaurantRestaurantID,
		UserReviewContent: '',
		UserReviewRating: 0,
	};
	// State ------------------------
	const [review, setReview] = useState(userReview || defaultReview);

	useEffect(() => {
		if (loggedInUser) {
			setReview({ ...review, UserUserID: loggedInUser.UserUserID });
		}
	}, [loggedInUser]);
	// Handlers ---------------------
	const handleChange = (field, value) => {
		setReview({ ...review, [field]: value });
	};

	const handleSubmitNewReview = async () => {
		const result = await API.post(reviewsEndpoint, review);
		if (result.isSuccess) {
			handleGoBack();
		} else {
			console.log('Failed to add review');
		}
	};

	const handleSubmitEditReview = async () => {
		const result = await API.put(reviewsEndpoint, review);
		if (result.isSuccess) {
			handleGoBack();
		} else {
			console.log('Failed to edit review');
		}
	};

	// View -------------------------
	return loggedInUser ? (
		<Form
			buttons={[
				{ label: 'Cancel', icon: null, onClick: () => handleGoBack() },
				{ label: 'Submit', icon: null, onClick: () => handleSubmitNewReview() },
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
