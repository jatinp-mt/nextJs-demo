import Link from "next/link";

const HeadeItem = ({ title, Icon, goToUrl }) => {
  return (
    <div className="group flex flex-col items-center w-12 sm:w-20 hover:text-white">
      <Link href={goToUrl}>
        <a>
          <Icon className="h-6 mb-1 group-hover:animate-bounce" />
        </a>
      </Link>
      <span className="tracking-widest group-hover:opacity-100 opacity-0 text-xs">
        {title}
      </span>
    </div>
  );
};

export default HeadeItem;
