import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const DownArrowIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {isVisible && (
        <FaArrowDown
          onClick={() => window.scrollTo({ top: 0 })}
        />
      )}
    </div>
  );
};

export default DownArrowIcon;