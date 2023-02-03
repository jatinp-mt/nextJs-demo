import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import styles from "../styles/Home.module.css";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <>
      <Results results={results} />
    </>
  );
}

Home.getInitialProps = async (context) => {
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
