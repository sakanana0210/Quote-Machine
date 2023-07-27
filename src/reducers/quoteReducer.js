//quoteReducers.js
import { ADD_QUOTE } from '../actions/quoteActions';

const quoteReducer = (state = '', action) => {
    switch (action.type) {
        case ADD_QUOTE:
            return {
                quote: action.quote,
                author: action.author
            };
        default:
            return state;
    }
};

export default quoteReducer;