import React, { useState } from 'react';
import { DropdownMenuProps } from '../../../types';
import { DropdownOption } from '../../../types';

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  placeholder,
  options,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null,
  );
  const openDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`dropdown-menu ${isOpen ? 'dropdown-menu_active' : ''}`}
      onClick={openDropdown}
      data-value=''
    >
      <span className='dropdown-menu__placeholder'>{placeholder}</span>
      {isOpen ? (
        <ul className='option-list'></ul>
      ) : null}
    </div>
  );
};

export default DropdownMenu;
