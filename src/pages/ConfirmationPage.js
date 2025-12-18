import React from "react";

export default function ConfirmationPage({ summary, reset }) {
  if (!summary) {
    return <h2 style={{ textAlign: "center" }}>No booking found</h2>;
  }

  return (
    <div className="confirmation-page">
      <h2>🎉 Booking Confirmed</h2>

      <div className="confirm-card">
        <p><b>Movie:</b> {summary.movieTitle}</p>
        <p><b>Date:</b> {summary.date}</p>
        <p><b>Time:</b> {summary.time}</p>
        <p><b>Seats:</b> {summary.seats}</p>
        <p><b>Total Amount:</b> ₹ {summary.amount}</p>
        <p><b>Email:</b> {summary.email}</p>
      </div>

      <button className="primary-btn" onClick={reset}>
        Book Another Movie 🎬
      </button>
    </div>
  );
}
