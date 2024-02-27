import React, { useEffect } from 'react';

type HideInterfaceProps = {
  children: React.ReactNode;
};

const HideInterface: React.FC<HideInterfaceProps> = ({ children }) => {
  useEffect(() => {
    const originalMargin: string = document.body.style.margin;
    document.body.style.margin = '0';
    
    return (): void => {
      document.body.style.margin = originalMargin;
    };
  }, []);

  return <>{children}</>;
};

export default HideInterface;
