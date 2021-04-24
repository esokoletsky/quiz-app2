import React from "react";

export default function Options({ options }) {
  return (
    <div>
      {options.map((option, idx) => (
        <p
          key={idx}
          className={`options ${userAnswer === option ? "selected" : null}`}
          onClick={() => this.checkAnswer(option)}
        >
          {option}
        </p>
      ))}
    </div>
  );
}
