import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import addQuote from './actions/quoteActions';
import './index.css';

const QuoteApp = ({ quote, author, addQuote }) => {
  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);
  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        addQuote(data.content, data.author);
      })
      .catch((error) => console.error('Error fetching quote:', error));
  };

  return (
  <div className="container d-flex justify-content-center " id="quote-box">
    <div className="col-md-6">
          <div className="quote-card ">
            <blockquote className="blockquote text-center">
              <h1>Random Quote Generator</h1>
              <hr></hr>
              <p id="text">{quote}</p>
              <p id="author">── {author}</p>
            </blockquote>
              <div className="d-flex justify-content-center">
                <button id="new-quote" className="btn btn-primary " onClick={fetchQuote}>
                  New Quote
                </button></div>
              <a className="d-flex justify-content-end" id="tweet-quote" target="_blank" href="twitter.com/intent/tweet"> Share on Twitter</a>
              
          </div>
        </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quote: state.quoteReducer.quote,
    author: state.quoteReducer.author
  };
};

export default connect(mapStateToProps, { addQuote })(QuoteApp);
