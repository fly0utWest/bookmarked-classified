import React from 'react'
import { DropdownMenuProps } from '../../../types';

const DropdownMenu: React.FC<DropdownMenuProps> = ({placeholder, children}) => {
  return (
    <div className='dropdown-menu'>
        <span className='dropdown-menu__placeholder'>{placeholder}</span>
    </div>
  );
}

export default DropdownMenu