import AppNavbar from "../navbar/App";
import BottomNavbar from "../navbar/Bottom";
import { NavigationProvider } from "../../store/navigation";
import ScrollHandler from "./ScrollHandler";
import { Bars2Icon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function TemplateDefault(props) {
  return (
    <NavigationProvider>
      <ScrollHandler />
      <div className="relative min-h-screen my-container mx-auto bg-white">
        <AppNavbar
          appbarLeft={
            <>
              <Bars2Icon className="text-red-600 h-6 w-6 md:h-8 md:w-8" />
              {/* <span className="text-md md:text-lg ml-4 text-red-600">
                Search
              </span> */}
            </>
          }
          appbarRight={
            <UserCircleIcon className="text-red-600 h-6 w-6 md:h-8 md:w-8" />
          }
        />
        <div className="relative top-12 md:top-16 p-4">{props.children}</div>
        <BottomNavbar />
      </div>
    </NavigationProvider>
  );
}
