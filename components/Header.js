import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import HeadeItem from "./HeadeItem";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeadeItem title="HOME" Icon={HomeIcon} goToUrl="/" />
        <HeadeItem
          title="TRENDIND"
          Icon={LightningBoltIcon}
          goToUrl="/movies"
        />
        <HeadeItem title="VERIFIED" Icon={BadgeCheckIcon} goToUrl="/movies" />
        <HeadeItem
          title="COLLECTIONS"
          Icon={CollectionIcon}
          goToUrl="/movies"
        />
        <HeadeItem title="SEARCH" Icon={SearchIcon} goToUrl="/movies" />
        <HeadeItem title="ACCOUNT" Icon={UserIcon} goToUrl="/movies" />
      </div>
      <Link href={"/"}>
        <a>
          <Image
            className="object-contain"
            src="https://links.papareact.com/ua6"
            width={200}
            height={70}
          />
        </a>
      </Link>
    </header>
  );
};

export default Header;
