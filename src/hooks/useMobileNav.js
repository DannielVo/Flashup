import { useState } from "react";

const useMobileNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return {
    isMobileNavOpen,
    toggleMobileNav,
    closeMobileNav,
  };
};

export default useMobileNav;
