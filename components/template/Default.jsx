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
          appbarLeft={props.appBarLeft}
          appbarRight={props.appBarRight}
        />
        {props.withAppBarSpace ? (
          <div className="h-12 md:h-16 bg-white">&nbsp;</div>
        ) : (
          <div className="absolute z-10 top-0 w-full h-12 md:h-16 bg-gradient-to-b from-white via-[rgba(255,255,255,0.7)] to-[rgba(255,255,255,0.05)]">&nbsp;</div>
        )}
        <div className="p-4">{props.children}</div>
        <BottomNavbar />
      </div>
    </NavigationProvider>
  );
}
