import React from 'react';
import AnswerItem from '../../components/AnswerItem/AnswerItem';
import '../AnswersList/AnswersList.css';

const AnswersList = (props) => {
  return (
    <ul className="answers-list">
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            answer={answer}
            key={index}
            onAnswerCkick={props.onAnswerCkick}
            state={props.state ? props.state[answer.id] : null}
          />
        );
      })}
    </ul>
  );
};
export default AnswersList;
