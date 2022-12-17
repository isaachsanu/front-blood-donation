import PropTypes from "prop-types";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function ArticleCard(props) {
  return (
    <div className="flex flex-col gap-2 bg-red-200 rounded-2xl overflow-hidden p-4 mt-4 md:mt-8">
      <span className="text-lg md:text-xl">{props.title}</span>
      <span className="text-xs md:text-sm">{props.desc}</span>
      <button className="flex flex-row gap-1.5 justify-center text-white bg-red-400 p-2 rounded-lg mt-2">
        <span className="text-xs md:text-sm">Read More</span>
        <ArrowRightIcon className="h-4 w-4 md:h-6 md:w-6" />
      </button>
    </div>
  );
}

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
