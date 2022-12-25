import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useNavigation } from "../../store/navigation";

export default function AppNavbar(props) {
  const [nav, dispatch] = useNavigation();

  return (
    <div
      className={
        "transition-all duration-300 z-50 bg-white my-container mx-auto fixed w-full flex flex-row p-4 " +
        (nav.isShowNavigation ? "top-0" : "-top-24")
      }
    >
      <div className="flex-1 flex flex-row items-center">
        {props.appbarLeft}
      </div>
      <div className="flex-none flex flex-row">
        {props.appbarRight}
      </div>
    </div>
  );
}
