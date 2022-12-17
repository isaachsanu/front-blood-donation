import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid";
import { useNavigation } from "../../store/navigation";
import { useEffect } from "react";

export default function BottomNavbar() {
  const [nav, dispatch] = useNavigation();

  return (
    <div
      className={
        "transition-all fixed my-container mx-auto w-full flex flex-row bg-red-500 rounded-t-2xl " +
        (nav.isShowNavigation ? "bottom-0" : "-bottom-24")
      }
    >
      <div className="basis-1/3 p-4">
        <div className="flex flex-col items-center text-white">
          <CalendarDaysIcon className="h-6 w-6 md:h-8 md:w-8" />
          <div className="text-xs md:text-sm font-bold">Schedules</div>
        </div>
      </div>
      <div className="basis-1/3 p-4">
        <div className="flex flex-col items-center text-red-300">
          <NewspaperIcon className="h-6 w-6 md:h-8 md:w-8" />
          <div className="text-xs md:text-sm font-bold">Articles</div>
        </div>
      </div>
      <div className="basis-1/3 p-4">
        <div className="flex flex-col items-center text-red-300">
          <ChatBubbleLeftRightIcon className="h-6 w-6 md:h-8 md:w-8" />
          <div className="text-xs md:text-sm font-bold">Forums</div>
        </div>
      </div>
    </div>
  );
}
