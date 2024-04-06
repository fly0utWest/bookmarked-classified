import React, { useEffect } from 'react';
import { HideInterfaceProps } from '../types';

const HideInterface: React.FC<HideInterfaceProps> = ({ children }) => {
  const originalMargin: string = document.body.style.margin;

  useEffect(() => {
    document.body.style.margin = '0';

    return (): void => {
      document.body.style.margin = originalMargin;
    };
  }, []);

  return <>{children}</>;
};

export default HideInterface;
