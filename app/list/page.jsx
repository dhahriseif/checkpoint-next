"use client";
import { useSelector } from "react-redux";
import CardItem from "../components/Card";

function page() {
  const store = useSelector((store) => store.movies);
  return (
    <div>
      This is Movie list page
      {store.map((movie) => (
        <CardItem
          id={movie.id}
          image={movie.image}
          title={movie.title}
          rating={movie.rating}
          year={movie.year}
        />
      ))}
    </div>
  );
}

export default page;