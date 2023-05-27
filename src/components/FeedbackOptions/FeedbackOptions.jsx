import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ good, neutral, bad }) => {
  return (
    <div className={css.container}>
      <button onClick={() => good(prevState => prevState + 1)}>Good</button>
      <button onClick={() => neutral(prevState => prevState + 1)}>
        Neutral
      </button>
      <button onClick={() => bad(prevState => prevState + 1)}>Bad</button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};
