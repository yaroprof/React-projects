import React, { useState, useRef } from 'react';
import { FixedSizeList as List } from 'react-window';
import './Dropdown.css';

const Dropdown = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0); // Початково 0
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);
    const listRef = useRef(null);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
        setHighlightedIndex(0);
    };

    const handleBlur = (e) => {
        if (!dropdownRef.current.contains(e.relatedTarget)) {
            setIsOpen(false);
        }
    };

    const handleKeyDown = (e) => {
        if (!isOpen) {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                setIsOpen(true);
            }
            return;
        }

        switch (e.key) {
            case 'ArrowDown': {
                e.preventDefault();
                const nextIndex = (highlightedIndex + 1) % options.length; // Циклічний перехід
                setHighlightedIndex(nextIndex);
                listRef.current.scrollToItem(nextIndex); // Примусова прокрутка
                break;
            }
            case 'ArrowUp': {
                e.preventDefault();
                const prevIndex = (highlightedIndex - 1 + options.length) % options.length; // Циклічний перехід
                setHighlightedIndex(prevIndex);
                listRef.current.scrollToItem(prevIndex); // Примусова прокрутка
                break;
            }
            case 'Enter': {
                if (highlightedIndex >= 0 && highlightedIndex < options.length) {
                    handleOptionSelect(options[highlightedIndex]);
                }
                break;
            }
            case 'Escape': {
                setIsOpen(false);
                break;
            }
            default:
                break;
        }
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div
            className="dropdown"
            ref={dropdownRef}
            tabIndex={0}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
        >
            <div className="dropdown-selected" onClick={handleToggle}>
                {selectedOption ? selectedOption.title : 'Select a movie'}
            </div>
            {isOpen && (
                <List
                    ref={listRef}
                    className="dropdown-options"
                    height={250}
                    itemCount={options.length}
                    itemSize={50}
                    width="100%"
                >
                    {({ index, style }) => (
                        <div
                            style={style}
                            className={`dropdown-option ${highlightedIndex === index ? 'highlighted' : ''}`}
                            onClick={() => handleOptionSelect(options[index])}
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
