
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
    console.log("action: ", action);

    switch (action.type) {
        case 'ADD_RESTAURANT':
            
            const newRest = {
                id: cuid(),
                text: action.text
            }

            return { ...state, restaurants: state.restaurants.concat(newRest) }
        
        case 'DELETE_RESTAURANT':

            return { ...state, restaurants: state.restaurants.filter(rest => rest.id !== action.id) }
        

        case 'ADD_REVIEW':
            const newReview = {
                id: cuid(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }

            return { ...state, reviews: state.reviews.concat(newReview) }
                
        case 'DELETE_REVIEW':
            return { ...state, reviews: state.reviews.filter(review => review.id !== action.id) }

        default:

            return state;
    }
}
