import { View, Text } from 'react-native';
import useLoad from '../../../API/useLoad';
import ReviewCard from '../Card/ReviewCard';
import { FlatList } from 'react-native';
const userreviewsEndpoint = '/userreviews/user/';

const ReviewListUser = ({ user }) => {
	// Initialisation ---------------
	const [reviews, , isLoadingReviews, LoadReviews] = useLoad(
		userreviewsEndpoint + user.UserUserID
	);
	// State ------------------------
	// Handlers ---------------------
	// View -------------------------

	const renderReview = ({ item }) => <ReviewCard review={item} />;

	return (
		<FlatList
			data={reviews}
			keyExtractor={(item) => item.UserReviewID.toString()}
			renderItem={renderReview}
		/>
	);
};
export default ReviewListUser;
