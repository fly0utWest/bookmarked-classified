import { useState, useEffect } from 'react';
import { debounce } from '../utils/debounce';

export function useDesktopInterface(): boolean {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const breakpoint: number = 767.99;

  useEffect(() => {
    const handleWidth = debounce(() => {
      setWidth(window.innerWidth);
    }, 250);
    window.addEventListener('resize', handleWidth);

    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, []);

  return width > breakpoint;
}
