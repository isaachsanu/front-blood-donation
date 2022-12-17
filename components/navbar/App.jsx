import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useNavigation } from "../../store/navigation";

export default function AppNavbar() {
  const [nav, dispatch] = useNavigation();

  return (
    <div
      className={
        "transition-all sticky my-container mx-auto w-full flex flex-row p-4 bg-white " +
        (nav.isShowNavigation ? "top-0" : "-top-24")
      }
    >
      <div className="flex-1 flex flex-row items-center">
        <MagnifyingGlassIcon className="text-red-600 h-6 w-6 md:h-8 md:w-8" />
        <span className="text-md md:text-lg ml-4 text-red-600">Search</span>
      </div>
      <div className="flex-none flex flex-row">
        <UserCircleIcon className="text-red-600 h-6 w-6 md:h-8 md:w-8" />
      </div>
    </div>
  );
}
