import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  HomeIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid";
import { useNavigation } from "../../store/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function BottomNavbar() {
  const [nav, dispatch] = useNavigation();
  const router = useRouter();

  return (
    <div
      className={
        "transition-all duration-300 fixed my-container mx-auto w-full flex flex-row bg-red-500 rounded-t-2xl " +
        (nav.isShowNavigation ? "bottom-0" : "-bottom-24")
      }
    >
      <Link href="/" className="basis-1/4 p-4">
        <div className={"flex flex-col items-center " + (router.pathname=="/" ? "text-white" : "text-red-300")}>
          <HomeIcon className="h-6 w-6 md:h-8 md:w-8" />
          <div className="text-xs md:text-sm font-bold">Home</div>
        </div>
      </Link>
      <Link href="/schedules" className="basis-1/4 p-4">
        <div className={"flex flex-col items-center " + (router.pathname=="/schedules" ? "text-white" : "text-red-300")}>
          <CalendarDaysIcon className="h-6 w-6 md:h-8 md:w-8" />
          <div className="text-xs md:text-sm font-bold">Schedules</div>
        </div>
      </Link>
      <Link href="/articles" className="basis-1/4 p-4">
        <div className={"flex flex-col items-center " + (router.pathname=="/articles" ? "text-white" : "text-red-300")}>
          <NewspaperIcon className="h-6 w-6 md:h-8 md:w-8" />
          <div className="text-xs md:text-sm font-bold">Articles</div>
        </div>
      </Link>
      <Link href="/forums" className="basis-1/4 p-4">
        <div className={"flex flex-col items-center " + (router.pathname=="/forums" ? "text-white" : "text-red-300")}>
          <ChatBubbleLeftRightIcon className="h-6 w-6 md:h-8 md:w-8" />
          <div className="text-xs md:text-sm font-bold">Forums</div>
        </div>
      </Link>
    </div>
  );
}
