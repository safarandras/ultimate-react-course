import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((o) => !o)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div
              className={step >= 1 ? "active" : ""}
              onClick={(e) => setStep(1)}
            >
              1
            </div>
            <div
              className={step >= 2 ? "active" : ""}
              onClick={(e) => setStep(2)}
            >
              2
            </div>
            <div
              className={step >= 3 ? "active" : ""}
              onClick={(e) => setStep(3)}
            >
              3
            </div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              // disabled={step <= 1}
              onClick={handlePrevious}
              style={{
                backgroundColor: step <= 1 ? "#e7e7e7" : "#7950f2",
                color: "#FFF",
              }}
            >
              Previous
            </button>
            <button
              // disabled={step >= 3}
              onClick={handleNext}
              style={{
                backgroundColor: step >= 3 ? "#e7e7e7" : "#7950f2",
                color: "#FFF",
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
