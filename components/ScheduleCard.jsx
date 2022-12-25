import PropTypes from "prop-types";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export default function ScheduleCard(props) {
  return (
    <div className="flex flex-row border-red-400 border-2 rounded-2xl overflow-hidden mt-4 md:mt-8">
      <div className="relative flex flex-col items-center p-4">
        <span className="text-base md:text-lg">{props.month}</span>
        <span className="text-2xl md:text-2xl">{props.date}</span>
        <div className="absolute top-0 bottom-0 h-2/4 md:h-3/5 my-auto left-full border-l-2 border-red-400"></div>
      </div>
      <div className="flex-1 flex flex-col justify-center bg-white p-4">
        <span className="text-xs md:text-base">{props.time}</span>
        <span className="text-lg md:text-2xl">{props.location}</span>
      </div>
      <div className="flex flex-row items-center p-4">
        <ArrowRightCircleIcon className="text-red-600 h-8 w-8" />
      </div>
    </div>
  );
}

ScheduleCard.propTypes = {
  location: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
