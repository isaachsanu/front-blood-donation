import PropTypes from "prop-types";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { ClockIcon } from "@heroicons/react/24/outline";

export default function ArticleCard(props) {
  return (
    <div className="flex flex-col gap-2 overflow-hidden mb-4 md:mb-6">
      <span className="text-xs md:text-sm text-red-400">Pengumuman</span>
      <div className="flex flex-row gap-2 justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-lg md:text-xl">{props.title}</span>
          <div className="flex flex-row gap-1 md:gap-2 text-gray-400">
            <ClockIcon className="h-4 w-4" />
            <span className="text-xs">24 hours ago</span>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-36 h-20 rounded-xl"
            src="/xx5z7tz9.bmp"
          />
        </div>
      </div>
    </div>
  );
}

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
