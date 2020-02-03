import { useState, useEffect } from 'react';

export const useElementDimension = ({ id = '' }) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const getDimension = () => {
    const element = document.getElementById(id);
    if (element) {
      setHeight(element.clientHeight);
      setWidth(element.clientWidth);
    }
  };

  useEffect(() => {
    getDimension();
    window.addEventListener('resize', getDimension);
    return () => {
      window.removeEventListener('resize', getDimension);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [{ height, width }];
};
