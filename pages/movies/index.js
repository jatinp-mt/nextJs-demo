import React from "react";
import Nav from "../../components/Nav";
import Results from "../../components/Results";
// import styles from "../../styles/Home.module.css";
import requests from "../../utils/requests";

const Movies = ({ results }) => {
  return (
    <div>
      <Nav />
      <Results results={results} />
    </div>
  );
};

Movies.getInitialProps = async (context) => {
  console.log(context.query, "moviecontext");
  const genre = context?.query?.genre;
  const response = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    results: response.results,
  };
};

export default Movies;
