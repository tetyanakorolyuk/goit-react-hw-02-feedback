import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics ({good, neutral, bad, total, positivePercentage}) {
  return (
    <div >
    <ul className={s.list}>
      <li className={s.type}>Good: {good}</li>
      <li className={s.type}>Neutral: {neutral}</li>
      <li className={s.type}>Bad: {bad}</li>
      <li className={s.type}>Total: {total}</li>
      <li className={s.type}>Positive Feedback: {positivePercentage}%</li>
    </ul>
    </div>
    );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
