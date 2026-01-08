import Quiz from "./components/Quiz";

function App() {
  return (
    <Quiz
      question="Сколько будет 3 + 3?"
      options={["5", "6", "7", "8"]}
      correctIndex={1}
    />
  );
}

export default App;
