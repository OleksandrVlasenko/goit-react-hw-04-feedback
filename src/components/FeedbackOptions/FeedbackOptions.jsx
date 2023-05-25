import React from 'react';
import css from "./FeedbackOptions.module.css"
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const feedbackKeys = Object.keys(options);

  return (
    <div className={css.container}>
      {feedbackKeys.map(option => {
        return (
          <button key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
