import PropTypes from "prop-types";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function ScheduleCard(props) {
  return (
    <div className="flex flex-row bg-red-200 rounded-2xl overflow-hidden mt-4 md:mt-8">
      <div className="flex-1 flex flex-col p-4">
        <span className="text-lg md:text-xl">{props.location}</span>
        <span className="text-xs md:text-sm">{props.time}</span>
      </div>
      <div className="flex items-center bg-red-400 p-4">
        <ArrowRightIcon className="text-white h-6 w-6 md:h-8 md:w-8" />
      </div>
    </div>
  );
}

ScheduleCard.propTypes = {
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
