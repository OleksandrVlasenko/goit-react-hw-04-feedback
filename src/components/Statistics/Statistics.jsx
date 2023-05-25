import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li className={css.item}>
        <p>Good:</p>
        <p>{good}</p>
      </li>
      <li className={css.item}>
        <p>Neutral:</p>
        <p>{neutral}</p>
      </li>
      <li className={css.item}>
        <p>Bad:</p>
        <p>{bad}</p>
      </li>
      <li className={css.item}>
        <p>Total:</p>
        <p>{total}</p>
      </li>
      <li className={css.item}>
        <p>Positive feedback:</p>
        <p>{positivePercentage}%</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
