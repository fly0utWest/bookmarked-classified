import React, { useEffect, useState } from 'react';
import { DropdownMenuProps } from '../../../types';
import { DropdownOption } from '../../../types';
import { useRef } from 'react';

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  placeholder,
  options,
  onOptionSelect,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const customSelectRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        customSelectRef.current &&
        !customSelectRef?.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [customSelectRef]);

  const onOptionClicked = (event: React.MouseEvent<HTMLLIElement>) => {
    const optionValue = event.currentTarget.getAttribute('data-value');
    const option = options?.find((opt) => opt.value === optionValue)!;
    if (option) {
      onOptionSelect(option);
      setIsOpen(false);
    }
  };

  return (
    <div
      className={`dropdown-menu ${isOpen ? 'dropdown-menu_active' : ''}`}
      tabIndex={0}
      onClick={toggleDropdown}
      ref={customSelectRef}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setIsOpen(false);
        }
      }}
    >
      <span className='dropdown-menu__placeholder'>{placeholder}</span>
      {isOpen ? (
        <ul className='option-list'>
          {options?.map((option) => (
            <li
              key={option.value}
              data-value={option.value}
              className='option-list__element'
              onClick={onOptionClicked}
            >
              {option.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default DropdownMenu;
