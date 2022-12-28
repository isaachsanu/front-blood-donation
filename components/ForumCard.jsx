import PropTypes from "prop-types";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { ChatBubbleBottomCenterTextIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";

export default function ForumCard(props) {
  return (
    <div className="flex flex-col border-red-400 border-2 rounded-2xl overflow-hidden mt-4 md:mt-8">
      <div className="p-4 border-red-400 border-b-2">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-1 md:gap-2 items-center">
            <img
              className="object-cover w-4 h-4 md:w-6 md:h-6 rounded-full"
              src={props.author_photo}
            />
            <span className="text-xs md:text-sm">{props.author}</span>
          </div>
          <span className="text-gray-500 text-xs md:text-sm">{props.author_time_posted}</span>
        </div>
        <div className="text-xl md:text-2xl mt-2">{props.author_post}</div>
        <div className="flex flex-row mt-2">
          <div className="basis-1/2 flex flex-row gap-1 md:gap-2 justify-center items-center">
            <ChatBubbleBottomCenterTextIcon className="text-gray-500 h-4 w-4" />
            <span className="text-gray-500 text-lg">2</span>
          </div>
          <div className="basis-1/2 flex flex-row gap-1 md:gap-2 justify-center items-center">
            <HandThumbUpIcon className="text-gray-500 h-4 w-4" />
            <span className="text-gray-500 text-lg">125</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-1 md:gap-2 items-center">
            <img
              className="object-cover w-4 h-4 md:w-6 md:h-6 rounded-full"
              src={props.best_answer_photo}
            />
            <span className="text-xs md:text-sm">{props.best_answer}</span>
          </div>
          <span className="text-gray-500 text-xs md:text-sm">
            {props.best_answer_time_posted}
          </span>
        </div>
        <div className="text-base md:text-lg mt-2">
          {props.best_answer_post}
        </div>
        <span className="text-gray-500 text-xs md:text-sm">187 People Approved</span>
      </div>
    </div>
  );
}

ForumCard.propTypes = {
  author: PropTypes.string.isRequired,
  author_photo: PropTypes.string.isRequired,
  author_time_posted: PropTypes.string.isRequired,
  author_post: PropTypes.string.isRequired,
  best_answer: PropTypes.string.isRequired,
  best_answer_photo: PropTypes.string.isRequired,
  best_answer_time_posted: PropTypes.string.isRequired,
  best_answer_post: PropTypes.string.isRequired,
};
