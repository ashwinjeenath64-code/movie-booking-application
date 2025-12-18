import React from "react";

export default function MovieCard({ movie, onSelect }) {
  return (
    <div className="movie-card">
      <div className="movie-poster-wrap">
        <img className="movie-poster" src={movie.poster} alt={movie.title} />
      </div>

      <div className="movie-body">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-meta">
          {movie.language} • {movie.rating} • {movie.duration}
        </p>
        <p className="movie-tags">{movie.genres.join(" • ")}</p>

        <button
          className="primary-btn full-width"
          onClick={() => onSelect(movie)}
        >
          Book Tickets
        </button>
      </div>
    </div>
  );
}
