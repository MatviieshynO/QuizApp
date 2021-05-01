import React, { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import '../Quiz/Quiz.css';

export default class Quis extends Component {
  state = {
    results: {},
    activeQuestion: 0,
    answerState: null,
    inFinished: false,
    quiz: [
      {
        question: 'What color is the sky?',
        rightAnswer: 2,
        id: 1,
        answers: [
          { text: 'Black', id: 1 },
          { text: 'Blue ', id: 2 },
          { text: 'Yellow ', id: 3 },
          { text: 'Orange ', id: 4 },
        ],
      },
      {
        question:
          'What was the name of the first president of the United States of America __ Washington?',
        rightAnswer: 1,
        id: 2,
        answers: [
          { text: 'George', id: 1 },
          { text: 'John ', id: 2 },
          { text: 'Thomas ', id: 3 },
          { text: 'James ', id: 4 },
        ],
      },
    ],
  };

  onAnswerCkickHandker = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === 'success') {
        return;
      }
    }
    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;
    if (question.rightAnswer === answerId) {
      if (!results[answerId]) {
        results[answerId] = 'success';
      }
      this.setState({
        answerState: { [answerId]: 'success' },
        results,
      });
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            inFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }
        window.clearTimeout(timeout);
      }, 800);
    } else {
      results[answerId] = 'error';
      this.setState({
        answerState: { [answerId]: 'error' },
        results,
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <div className="quiz">
        <div className="wrapper">
          <h1>Answer our questions</h1>
          {this.state.inFinished ? (
            <FinishedQuiz results={this.state.results} quiz={this.state.quiz} />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerCkick={this.onAnswerCkickHandker}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}
