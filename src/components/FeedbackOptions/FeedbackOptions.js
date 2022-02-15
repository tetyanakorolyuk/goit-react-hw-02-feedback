import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions ({options, onLeaveFeedback}) {
  return (
    <ul className={s.listBtn}>
      {options.map(option => (
        <li className={s.item} key={option}>
        <button className={s.button} type="button" onClick={() => onLeaveFeedback(option)}>{option}</button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
