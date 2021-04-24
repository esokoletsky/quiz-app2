import React from "react";

export default function Final({ quizData, restartHandler, score }) {
  return (
    <div>
      <h1>Final score is {score} points</h1>
      <p>The correct Answers for the quiz are</p>
      <ul>
        {quizData.map((item) => (
          <li key={item.id}>{item.answer}</li>
        ))}
      </ul>
      <button onClick={restartHandler}>Restart</button>
    </div>
  );
}
