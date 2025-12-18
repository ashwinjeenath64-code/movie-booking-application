import React, { useMemo, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function MoviesPage({ movies, onSelect }) {
  const [search, setSearch] = useState("");
  const [langFilter, setLangFilter] = useState("All");

  const languages = useMemo(
    () => ["All", ...new Set(movies.map((m) => m.language))],
    [movies]
  );

  const filteredMovies = movies.filter((m) => {
    const matchesSearch = m.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesLang = langFilter === "All" || m.language === langFilter;
    return matchesSearch && matchesLang;
  });

  return (
    <section>
      <div className="section-header">
        <h2>Now Showing</h2>
      </div>

      <div className="filters">
        <input
          className="search-box"
          type="text"
          placeholder="Search by movie name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="select-filter"
          value={langFilter}
          onChange={(e) => setLangFilter(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      <div className="movies-grid">
        {filteredMovies.length ? (
          filteredMovies.map((m) => (
            <MovieCard key={m.id} movie={m} onSelect={onSelect} />
          ))
        ) : (
          <p className="empty-text">No movies found.</p>
        )}
      </div>
    </section>
  );
}
