import { useEffect } from "react";

const usePageChangeOnTop = (dependencyList) => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
};
export default usePageChangeOnTop;
