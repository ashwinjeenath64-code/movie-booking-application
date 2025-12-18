// src/pages/SeatsPage.js
import React from "react";

export default function SeatsPage({
  movie,
  showTimes,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  selectedSeats,
  setSelectedSeats,
  bookedSeats,
  goBack,
  continueNext,
}) {
  
  const rows = ["A", "B", "C", "D", "E", "F"];
  const seatsPerSide = 8;

  const leftSeats = [];
  const rightSeats = [];

  rows.forEach((row) => {
    for (let i = 1; i <= seatsPerSide; i++) {
      leftSeats.push(`${row}${i}`);
      rightSeats.push(`${row}${i + seatsPerSide}`);
    }
  });

  const toggleSeatSelection = (seat) => {
    if (bookedSeats.includes(seat)) return; 

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const nextDays = [...Array(5)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      value: d.toISOString().split("T")[0],
      label: d.toDateString(),
    };
  });

  const handleContinue = () => {
    if (!selectedDate) return alert("Please select a date");
    if (!selectedTime) return alert("Please select show time");
    if (!selectedSeats.length) return alert("Please select at least one seat");

    continueNext();
  };

  return (
    <section className="two-column">
      <div className="card">
        <h2>Select Seats</h2>
        <p className="sub-text">
          {movie.title} • {movie.language} • {movie.rating}
        </p>

        <p className="field-label">DATE</p>
        <div className="chip-row">
          {nextDays.map((d) => (
            <button
              key={d.value}
              className={`chip ${selectedDate === d.value ? "chip-active" : ""}`}
              onClick={() => setSelectedDate(d.value)}
            >
              {d.label}
            </button>
          ))}
        </div>

        <p className="field-label">SHOW TIME</p>
        <div className="chip-row">
          {showTimes.map((t) => (
            <button
              key={t}
              className={`chip ${selectedTime === t ? "chip-active" : ""}`}
              onClick={() => setSelectedTime(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="legend">
          <span><span className="legend-box box-available" /> Available</span>
          <span><span className="legend-box box-selected" /> Selected</span>
          <span><span className="legend-box box-booked" /> Booked</span>
        </div>

        <div className="screen">SCREEN THIS SIDE</div>

        <div className="seat-wrapper">
          
          <div className="seat-left">
            {leftSeats.map((seat) => (
              <button
                key={seat}
                className={`seat-btn ${
                  bookedSeats.includes(seat)
                    ? "seat-booked"
                    : selectedSeats.includes(seat)
                    ? "selected"
                    : ""
                }`}
                onClick={() => toggleSeatSelection(seat)}
                disabled={bookedSeats.includes(seat)}
              >
                {seat}
              </button>
            ))}
          </div>

          <div className="seat-right">
            {rightSeats.map((seat) => (
              <button
                key={seat}
                className={`seat-btn ${
                  bookedSeats.includes(seat)
                    ? "seat-booked"
                    : selectedSeats.includes(seat)
                    ? "selected"
                    : ""
                }`}
                onClick={() => toggleSeatSelection(seat)}
                disabled={bookedSeats.includes(seat)}
              >
                {seat}
              </button>
            ))}
          </div>
        </div>

        <div className="seat-footer">
          <div>
            <p className="field-label">Selected Seats</p>
            <p className="value">
              {selectedSeats.length ? selectedSeats.join(", ") : "None"}
            </p>
          </div>

          <div>
            <p className="field-label">Amount</p>
            <p className="value">
              ₹ {selectedSeats.length * 250} /-
              <span className="value-sub"> (₹250 per ticket)</span>
            </p>
          </div>
        </div>

        <div className="actions-row">
          <button className="outline-btn" onClick={goBack}>
            ← Back
          </button>
          <button className="primary-btn" onClick={handleContinue}>
            Continue →
          </button>
        </div>
      </div>

      <div className="card side-card">
        <h3>Booking Summary</h3>

        <p className="field-label">Movie</p>
        <p className="value">{movie.title}</p>

        <p className="field-label">Date</p>
        <p className="value">{selectedDate || "Not selected"}</p>

        <p className="field-label">Time</p>
        <p className="value">{selectedTime || "Not selected"}</p>

        <p className="field-label">Seats</p>
        <p className="value">
          {selectedSeats.length ? selectedSeats.join(", ") : "Not selected"}
        </p>

        <p className="field-label">Total</p>
        <p className="value bold">₹ {selectedSeats.length * 250} /-</p>
      </div>
    </section>
  );
}
