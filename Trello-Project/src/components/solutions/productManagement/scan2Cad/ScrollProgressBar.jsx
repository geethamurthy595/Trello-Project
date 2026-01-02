import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  let [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    let calculateScrollProgress = () => {
      let { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      let totalScrollableDistance = scrollHeight - clientHeight;

      if (totalScrollableDistance === 0) {
        setScrollPercentage(100);
        return;
      }
      let percentage = (scrollTop / totalScrollableDistance) * 100;
      setScrollPercentage(Math.min(100, Math.max(0, percentage)));
    };
    window.addEventListener('scroll', calculateScrollProgress);
    calculateScrollProgress();
    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
    };
  }, []);

  const colorClass = scrollPercentage >= 99.5 ? 'bg-green-500' : 'bg-[#16BFDE]';

  return (
    <div
      id="scroll-progress-bar"
      className={`fixed top-0 left-0 h-1 z-50 transition-all duration-300 ease-out ${colorClass}`}
      style={{
        width: `${scrollPercentage}%`,
      }}
    />
  );
};

export default ScrollProgressBar;