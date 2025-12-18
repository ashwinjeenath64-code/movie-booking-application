import React, { useMemo, useState } from "react";
import "./App.css";
import { INITIAL_MOVIES, SHOW_TIMES } from "./data";

import LoginForm from "./components/LoginForm";
import StepsBar from "./components/StepsBar";

import MoviesPage from "./pages/MoviesPage";
import SeatsPage from "./pages/SeatsPage";
import PaymentPage from "./pages/PaymentPage";
import ConfirmationPage from "./pages/ConfirmationPage";

export default function App() {
  const [user, setUser] = useState(null);

  const [movies] = useState(INITIAL_MOVIES);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [step, setStep] = useState("movies");

  const [bookedSeats, setBookedSeats] = useState({}); 
  const [paymentData, setPaymentData] = useState({});
  const [summary, setSummary] = useState(null);

  const handleLogin = (email, password) => {
    if (!email || !password) {
      alert("Enter email and password");
      return;
    }
    setUser({ email });
  };

  const handleLogout = () => {
    setUser(null);
    resetFlow();
  };

  const resetFlow = () => {
    setStep("movies");
    setSelectedMovie(null);
    setSelectedSeats([]);
    setSelectedDate("");
    setSelectedTime("");
    setPaymentData({});
  };

  const showKey = useMemo(() => {
    if (!selectedMovie || !selectedDate || !selectedTime) return null;
    return `${selectedMovie.id}-${selectedDate}-${selectedTime}`;
  }, [selectedMovie, selectedDate, selectedTime]);

  const bookedForShow = bookedSeats[showKey] || [];

  if (!user) {
    return (
      <div className="app-root">
        <LoginForm onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="app-root">
      <header className="app-header">
        <div className="brand">
          <span className="brand-icon">🎬</span>
          <span className="brand-title">MovieZone</span>
        </div>

        <div className="header-right">
          <span className="user-email">{user.email}</span>
          <button className="outline-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <main className="app-main">
        <StepsBar step={step} />

        {step === "movies" && (
          <MoviesPage
            movies={movies}
            onSelect={(movie) => {
              setSelectedMovie(movie);
              setSelectedSeats([]);
              setSelectedDate("");
              setSelectedTime("");
              setStep("seats");
            }}
          />
        )}

        {step === "seats" && selectedMovie && (
          <SeatsPage
            movie={selectedMovie}
            showTimes={SHOW_TIMES}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            bookedSeats={bookedForShow}
            goBack={() => setStep("movies")}
            continueNext={() => setStep("payment")}
          />
        )}

        {step === "payment" && selectedMovie && (
          <PaymentPage
            movie={selectedMovie}
            selectedSeats={selectedSeats}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            paymentData={paymentData}
            setPaymentData={setPaymentData}
            complete={(sum) => {
              setSummary({ ...sum, email: user.email });

              if (showKey) {
                setBookedSeats((prev) => ({
                  ...prev,
                  [showKey]: [...(prev[showKey] || []), ...selectedSeats],
                }));
              }

              setStep("confirm");
            }}
            goBack={() => setStep("seats")}
          />
        )}

        {step === "confirm" && summary && (
          <ConfirmationPage
            summary={summary}
            reset={() => resetFlow()}
          />
        )}
      </main>
    </div>
  );
}
