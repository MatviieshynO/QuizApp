import React from 'react';
import AnswersList from '../../components/AnswersList/AnswersList';
import '../ActiveQuiz/ActiveQuiz.css';

const ActiveQuiz = (props) => {
  return (
    <div className="active-quiz">
      <p className="question">
        <span>
          <strong>{props.answerNumber}.</strong>&nbsp;
          {props.question}
        </span>
        <small>
          {props.answerNumber} in {props.quizLength}
        </small>
      </p>

      <AnswersList
        answers={props.answers}
        onAnswerCkick={props.onAnswerCkick}
        state={props.state}
      />
    </div>
  );
};

export default ActiveQuiz;
