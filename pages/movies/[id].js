import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";

const getSingleBlog = ({ results }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      <div className={styles.singularMovie}>
        <h2>{results.title}</h2>
        <Image
          width={720}
          height={400}
          objectFit={"cover"}
          objectPosition={"center"}
          src={
            results.backdrop_path !== null
              ? `${BASE_URL}${results.backdrop_path}`
              : "https://dummyimage.com/16:9x1080/"
          }
        />
        <p>{results.overview}</p>
      </div>
    </>
  );
};

export default getSingleBlog;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: "436270" } }], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getStaticProps(context) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params.id}?api_key=d23733c91a9106574b9918ff7136e96c`
  ).then((res) => {
    return res.json();
  });

  return {
    props: {
      results: response,
    },
  };
}
