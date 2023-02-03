import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Results = ({ results }) => {
  return (
    <FlipMove
      enterAnimation="fade"
      className="px-1 sm:px-3 my-5 sm:grid md:grid-cols-2 xl:grid-cols-3 "
    >
      {results?.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;
