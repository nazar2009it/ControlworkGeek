import { useState } from "react";

function Quiz(props) {
  const [message, setMessage] = useState("");

  const checkAnswer = (index) => {
    if (index === props.correctIndex) {
      setMessage("ПРАВИЛЬНО!");
    }
  };

  return (
    <div>
      <h3>{props.question}</h3>

      <ul>
        {props.options.map((item, index) => (
          <li key={index}>
            <button onClick={() => checkAnswer(index)}>
              {item}
            </button>
          </li>
        ))}
      </ul>

      <p>{message}</p>
    </div>
  );
}

export default Quiz;
