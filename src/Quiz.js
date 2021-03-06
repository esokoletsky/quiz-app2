import React, { Component } from "react";
import "./styles.css";
import { quizData } from "./quizData";
import Final from "./Final";
import Options from "./Options";
import Button from "@material-ui/core/Button";

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
      disabled: true,
    });
  };

  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
      disabled: false,
    });
  };

  finishHandler = () => {
    const { userAnswer, answer, score } = this.state;
    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }

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
        <Final
          quizData={quizData}
          restartHandler={this.restartHandler}
          score={this.state.score}
        />
      );
    }

    return (
      <div>
        <h2>{question}</h2>
        <span>{`Question ${currentIndex + 1} of ${quizData.length}`}</span>
        <Options
          options={options}
          userAnswer={userAnswer}
          checkAnswer={this.checkAnswer}
        />

        {currentIndex < quizData.length - 1 && (
          <Button
            disabled={this.state.disabled}
            onClick={this.nextQuestionHandler}
            variant='contained'
            color='primary'
          >
            Next Question
          </Button>
        )}

        {currentIndex === quizData.length - 1 && (
          <Button
            onClick={this.finishHandler}
            disabled={this.state.disabled}
            variant='contained'
            color='primary'
          >
            Finish
          </Button>
        )}
        {this.state.disabled ? (
          <p style={{ color: "#f44336" }}>Please select an answer</p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Quiz;
