
import React, { useState, useRef } from 'react';
import { FixedSizeList as List } from 'react-window';
import './Dropdown.css';

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option, index) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
    setHighlightedIndex(index);
  };

  const handleBlur = (e) => {
    if (!dropdownRef.current.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex((prev) => (prev + 1) % options.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((prev) => (prev - 1 + options.length) % options.length);
        break;
      case 'Enter':
        if (highlightedIndex >= 0) {
          handleOptionClick(options[highlightedIndex], highlightedIndex);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="dropdown"
      ref={dropdownRef}
      tabIndex={0}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <div className="dropdown-selected" onClick={handleToggle} tabIndex={0}>
        {selectedOption ? selectedOption.title : 'Select a movie'}
      </div>
      {isOpen && (
        <List
          className="dropdown-options"
          height={250} // Висота списку
          itemCount={options.length} // Кількість опцій
          itemSize={50} // Висота одного елемента
          width="100%"
        >
          {({ index, style }) => (
            <div
              key={options[index].id}
              style={style}
              className={`dropdown-option ${
                index === highlightedIndex ? 'highlighted' : ''
              }`}
              onClick={() => handleOptionClick(options[index], index)}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {options[index].title}
            </div>
          )}
        </List>
      )}
    </div>
  );
};

export default Dropdown;