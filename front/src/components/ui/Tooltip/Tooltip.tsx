import React, { useState } from 'react';
import { TooltipProps } from '../../../types';

const Tooltip: React.FC<TooltipProps> = ({ message, children }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const onMouseEnter = () => setIsHovered(true);

  const onMouseLeave = () => setIsHovered(false);

  return (
    <div
      className='tooltip-container'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      {isHovered && <div className='tooltip'>{message}</div>}
    </div>
  );
};

export default Tooltip;
