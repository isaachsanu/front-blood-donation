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
        {props.withAppBarSpace && <div className="h-12 md:h-16">&nbsp;</div>}
        <div className="relative p-4">{props.children}</div>
        <BottomNavbar />
      </div>
    </NavigationProvider>
  );
}
