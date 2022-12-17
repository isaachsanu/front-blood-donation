import AppNavbar from "../navbar/App";
import BottomNavbar from "../navbar/Bottom";
import { NavigationProvider } from "../../store/navigation";
import ScrollHandler from "./ScrollHandler";

export default function TemplateDefault(props) {
  return (
    <NavigationProvider>
      <ScrollHandler />
      <div className="relative min-h-screen my-container mx-auto bg-white">
        <AppNavbar />
        <div className="p-4">{props.children}</div>
        <BottomNavbar />
      </div>
    </NavigationProvider>
  );
}
