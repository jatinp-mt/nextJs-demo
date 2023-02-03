import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="group cursor-pointer p-2">
      <Link href={`/movies/${result.id}`}>
        <a>
          <Image
            src={`${BASE_URL}${result.backdrop_path}`}
            layout="responsive"
            width={1920}
            height={1080}
            className="group-hover:scale-110 transition-all duration-300 rounded-lg"
          />
          <div className="py-2">
            <p className="truncate max-w-md">{result.overview}</p>
            <h2 className="text-xl font-bold mt-1">
              {result.title || result.original_name}
            </h2>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Thumbnail;
