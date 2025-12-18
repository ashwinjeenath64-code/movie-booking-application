// src/data.js
import Leo from "./leo.jpg";
import Master from "./master.jpg";
import GBU from "./gbu.jpg";
import Coolie from "./coolie.jpg";
import Vikram from "./vikram.jpg";
import Ghilli from "./ghilli.jpg";
import Premam from "./premam.jpg";
import Mersal from "./mersal.jpg";
import Jersey from "./jersey.jpg";
import Dragon from "./dragon.jpg";
import Pokkiri from "./pokkiri.jpg";
import Maharaja from "./maharaja.jpg";

export const INITIAL_MOVIES = [
  {
    id: 1,
    title: "Leo",
    language: "Tamil",
    genres: ["Action"],
    poster:
      Leo,
    rating: "U/A",
    duration: "2h 48m",
  },
  {
    id: 2,
    title: "Master",
    language: "Tamil",
    genres: ["Action", "Drama"],
    poster:
      Master,
    rating: "U/A",
    duration: "2h 36m",
  },
  {
    id: 3,
    title: "Good Bad Ugly",
    language: "Tamil",
    genres: ["Action"],
    poster:
      GBU,
    rating: "U",
    duration: "2h 50m",
  },
  {
    id: 4,
    title: "Vikram",
    language: "Tamil",
    genres: ["Action"],
    poster:
      Vikram,
    rating: "U/A",
    duration: "2h 55m",
  },
  {
    id: 5,
    title: "Coolie",
    language: "Tamil",
    genres: ["Action"],
    poster:
      Coolie,
    rating: "U/A",
    duration: "2h 55m",
  },
  {
    id: 6,
    title: "Ghilli",
    language: "Tamil",
    genres: ["Action", "Comedy"],
    poster:
      Ghilli,
    rating: "U/A",
    duration: "2h 31m",
  },
  {
    id: 7,
    title: "Jersey",
    language: "Telugu",
    genres: ["Family", "Drama"],
    poster:
      Jersey,
    rating: "U",
    duration: "2h 59m",
  },
  {
    id: 8,
    title: "Premam",
    language: "Malayalam",
    genres: ["Action"],
    poster:
      Premam,
    rating: "U",
    duration: "2h 50m",
  },
  {
    id: 9,
    title: "Mersal",
    language: "Tamil",
    genres: ["Action"],
    poster:
      Mersal,
    rating: "U/A",
    duration: "2h 40m",
  },
  {
    id: 10,
    title: "Dragon",
    language: "Tamil",
    genres: ["Comedy", "Drama"],
    poster:
      Dragon,
    rating: "U/A",
    duration: "2h 25m",
  },
  {
    id: 11,
    title: "Pokkiri",
    language: "Tamil",
    genres: ["Action", "Comedy"],
    poster:
      Pokkiri,
    rating: "U/A",
    duration: "2h 29m",
  },
  {
    id: 12,
    title: "Maharaja",
    language: "Tamil",
    genres: ["Action", "Emotional"],
    poster:
      Maharaja,
    rating: "U/A",
    duration: "2h 31m",
  },
];

export const SHOW_TIMES = ["10:00 AM", "01:30 PM", "05:00 PM", "09:00 PM"];

export function generateDefaultSeats() {
  const rows = ["A", "B", "C", "D", "E"];
  const result = [];
  rows.forEach((r) => {
    for (let i = 1; i <= 10; i++) {
      result.push(`${r}${i}`);
    }
  });
  return result;
}

export const DEFAULT_SEATS = generateDefaultSeats();
