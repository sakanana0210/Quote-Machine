//quoteActions.js

export const ADD_QUOTE = 'ADD_QUOTE';
const addQuote = (quote, author) => {
    return {
        type: ADD_QUOTE,
        quote: quote,
        author: author
    };
};
export default addQuote;