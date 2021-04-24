import React from "react";

export default function Final({ quizData, restartHandler, score }) {
  return (
    <div>
      <h1>Final score is {score} point(s)</h1>
      <p>The correct Answers for the quiz are</p>

      {quizData.map((item) => (
        <p key={item.id} style={{ textAlign: "left", marginLeft: "35%" }}>
          {item.id + 1}) {item.answer}
        </p>
      ))}

      <button onClick={restartHandler}>Restart</button>
    </div>
  );
}
