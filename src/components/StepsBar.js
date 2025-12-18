import React from "react";

export default function StepsBar({ step }) {
  const steps = [
    { id: "movies", label: "Movies" },
    { id: "seats", label: "Seats" },
    { id: "payment", label: "Payment" },
    { id: "confirm", label: "Confirmation" },
  ];

  return (
    <div className="steps-bar">
      {steps.map((s, index) => (
        <div
          key={s.id}
          className={`step ${step === s.id ? "step-active" : ""}`}
        >
          <div className="step-index">{index + 1}</div>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
