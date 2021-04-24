import React from "react";

export default function Options({ options, userAnswer, checkAnswer }) {
  return (
    <div>
      {options.map((option, idx) => (
        <p
          key={idx}
          className={`options ${userAnswer === option ? "selected" : null}`}
          onClick={() => checkAnswer(option)}
        >
          {option}
        </p>
      ))}
    </div>
  );
}
