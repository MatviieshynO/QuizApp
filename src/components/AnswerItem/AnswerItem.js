import React from 'react';
import '../../components/AnswerItem/AnswerItem.css';

const AnswerItem = (props) => {
  const classes = ['answeritem'];
  if (props.state) {
    classes.push(props.state);
  }
  return (
    <li
      className={classes.join(' ')}
      onClick={() => props.onAnswerCkick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};

export default AnswerItem;
