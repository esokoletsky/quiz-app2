import React, { Component } from "react";
import "./styles.css";
import { quizData } from "./quizData";

export class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userAnswer: null,
      currentIndex: 0,
      options: [],
      quizEnd: false,
      score: 0,
      disabled: true,
    };
  }

  loadQuiz = () => {
    const { currentIndex } = this.state;

    this.setState(() => {
      return {
        question: quizData[currentIndex].question,
        options: quizData[currentIndex].options,
        answer: quizData[currentIndex].answer,
      };
    });
  };

  nextQuestionHandler = () => {
    const { userAnswer, answer, score } = this.state;

    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }

    this.setState({
      currentIndex: this.state.currentIndex + 1,
      userAnswer: null,
    });
  };

  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
      disabled: false,
    });
  };

  finishHandler = () => {
    if (this.state.currentIndex === quizData.length - 1) {
      this.setState({
        quizEnd: true,
      });
    }
  };

  restartHandler = () => {
    this.setState({
      userAnswer: null,
      currentIndex: 0,
      options: [],
      quizEnd: false,
      score: 0,
      disabled: true,
    });
  };

  componentDidMount() {
    this.loadQuiz();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentIndex } = this.state;

    if (currentIndex !== prevState.currentIndex) {
      this.setState(() => {
        return {
          question: quizData[currentIndex].question,
          options: quizData[currentIndex].options,
          answer: quizData[currentIndex].answer,
        };
      });
    }
  }

  render() {
    const { question, options, currentIndex, userAnswer, quizEnd } = this.state;

    if (quizEnd) {
      return (
        <div>
          <h1>Final score is {this.state.score} points</h1>
          <p>The correct Answers for the quiz are</p>
          <ul>
            {quizData.map((item) => (
              <li>{item.answer}</li>
            ))}
          </ul>
          <button onClick={this.restartHandler}>Restart</button>
        </div>
      );
    }

    return (
      <div>
        <h2>{question}</h2>
        <span>{`Question ${currentIndex + 1} of ${quizData.length}`}</span>
        {options.map((option) => (
          <p
            key={option.id}
            className={`options ${userAnswer === option ? "selected" : null}`}
            onClick={() => this.checkAnswer(option)}
          >
            {option}
          </p>
        ))}

        {currentIndex < quizData.length - 1 && (
          <button
            disabled={this.state.disabled}
            onClick={this.nextQuestionHandler}
          >
            Next Question
          </button>
        )}
        {currentIndex === quizData.length - 1 && (
          <button onClick={this.finishHandler} disabled={this.state.disabled}>
            Finish
          </button>
        )}
      </div>
    );
  }
}

export default Quiz;
