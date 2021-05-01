import React from 'react';
import '../FinishedQuiz/FinishedQuiz.css';

const FinishedQuiz = (props) => {
  return (
    <div className="finished-quiz">
      <ul>
        <li>
          <strong>1.</strong> Not correct
          <i className="fa fa-times error "></i>
        </li>
        <li>
          <strong>2.</strong> Rightly
          <i className="fa fa-check success"></i>
        </li>
      </ul>
      <p>4 in 10</p>
      <div>
        <button>Repiet</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
