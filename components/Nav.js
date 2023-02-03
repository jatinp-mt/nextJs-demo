import requests from "../utils/requests";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <nav>
      <div className="flex px-10 justify-center sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-auto scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`movies/?genre=${key}`)}
            className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
            style={
              router.query.genre &&
              router.query.genre.includes(title.split(" ").join(""))
                ? { fontWeight: 700, color: "red" }
                : { fontWeight: 400 }
            }
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
