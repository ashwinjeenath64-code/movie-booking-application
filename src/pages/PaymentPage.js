import React, { useState } from "react";

export default function PaymentPage({
  movie,
  selectedSeats,
  selectedDate,
  selectedTime,
  complete,
  goBack,
}) {
  const [method, setMethod] = useState("CARD");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [upiId, setUpiId] = useState("");

  const amount = selectedSeats.length * 250;

  const handlePay = () => {
    if (method === "CARD") {
      if (!cardName || !cardNumber) {
        alert("Please enter card details");
        return;
      }
    }

    if (method === "UPI") {
      if (!upiId || !upiId.includes("@")) {
        alert("Please enter a valid UPI ID");
        return;
      }
    }

    complete({
      movieTitle: movie.title,
      date: selectedDate,
      time: selectedTime,
      seats: selectedSeats.join(", "),
      amount,
      paymentMethod: method === "CARD" ? "Card" : "UPI",
    });
  };

  return (
    <div className="payment-page">
      <h2>Payment</h2>

      {/* Booking Summary */}
      <div className="payment-summary">
        <p><b>Movie:</b> {movie.title}</p>
        <p><b>Date:</b> {selectedDate}</p>
        <p><b>Time:</b> {selectedTime}</p>
        <p><b>Seats:</b> {selectedSeats.join(", ")}</p>
        <p><b>Total:</b> ₹ {amount}</p>
      </div>

      <h3>Select Payment Method</h3>

      <div className="payment-methods">
        <label>
          <input
            type="radio"
            checked={method === "CARD"}
            onChange={() => setMethod("CARD")}
          />
          Card
        </label>

        <label>
          <input
            type="radio"
            checked={method === "UPI"}
            onChange={() => setMethod("UPI")}
          />
          UPI
        </label>
      </div>

      {/* Card Payment */}
      {method === "CARD" && (
        <div className="payment-form">
          <input
            type="text"
            placeholder="Card Holder Name"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
      )}

      {/* UPI Payment */}
      {method === "UPI" && (
        <div className="payment-form">
          <input
            type="text"
            placeholder="Enter UPI ID (eg: name@upi)"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
        </div>
      )}

      <div className="actions-row">
        <button className="outline-btn" onClick={goBack}>
          ← Back
        </button>

        <button className="primary-btn" onClick={handlePay}>
          Pay ₹ {amount}
        </button>
      </div>
    </div>
  );
}
