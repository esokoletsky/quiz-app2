import React from "react";
import Button from "@material-ui/core/Button";

const Final = ({ quizData, restartHandler, score }) => {
  return (
    <div>
      <h1>
        Final score is {score} point{score > 1 ? "s" : score === 0 ? "s" : ""}
      </h1>
      <p>The correct Answers for the quiz are</p>
      <ol>
        {quizData.map((item) => (
          <li className='answers' key={item.id}>
            {item.answer}
          </li>
        ))}
      </ol>
      <Button onClick={restartHandler} variant='contained' color='primary'>
        Restart
      </Button>
    </div>
  );
};

export default Final;
