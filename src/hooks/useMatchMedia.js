import React from "react";

const useMatchMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      const checked = window.matchMedia(media).matches;
      setMatch(checked);
    }

    changeMatch();
    window.addEventListener("resize", changeMatch);

    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, []);

  return match;
};

export default useMatchMedia;