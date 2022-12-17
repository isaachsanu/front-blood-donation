import { useEffect } from "react";
import { useNavigation } from "../../store/navigation";

export default function ScrollHandler() {
  const [nav, dispatch] = useNavigation();
  var prevScrollpos = 0;
  var currentScrollPos = 0;

  const handleScroll = (event) => {
    currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      dispatch({ type: "SHOW_NAVIGATION" });
    } else {
      dispatch({ type: "HIDE_NAVIGATION" });
    }
    prevScrollpos = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    prevScrollpos = window.pageYOffset;

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
