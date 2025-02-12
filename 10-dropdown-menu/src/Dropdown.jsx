import React, { useState, useRef } from 'react';
import { FixedSizeList as List } from 'react-window'; // бібліотека для віртуалізації списків
import InfiniteLoader from 'react-window-infinite-loader'; // завантаження даних "на ходу"
import './Dropdown.css';

const Dropdown = ({ options, onLoadMore, hasMore, loading, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0); // вказуємо, який елемент підсвічено
  const [selectedOption, setSelectedOption] = useState(null); // збереження обраного елементу
  const dropdownRef = useRef(null); // ref для контейнера
  const listRef = useRef(null); // ref для списку

  // відкрити-закрити спсиок
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    setHighlightedIndex(0);
  };

  // закрити список, якщо вийшли за межі
  const handleBlur = (e) => {
    if (!dropdownRef.current.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };
// обробка клавіш у випадаючому списку
  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') setIsOpen(true);
      return;
    }

    switch (e.key) {
      case 'ArrowDown': // переміщення вниз
        e.preventDefault();
        setHighlightedIndex((prev) => {
          const nextIndex = (prev + 1) % options.length; // наступний елемент
          if (listRef.current && nextIndex < options.length) {
            listRef.current.scrollToItem(nextIndex); // Прокрутка тільки для завантажених елементів
          }
          return nextIndex;
        });
        break;
      case 'ArrowUp': // Переміщення вгору
        e.preventDefault();
        setHighlightedIndex((prev) => {
          const prevIndex = (prev - 1 + options.length) % options.length;
          if (listRef.current && prevIndex >= 0) {
            listRef.current.scrollToItem(prevIndex);
          }
          return prevIndex;
        });
        break;
      case 'Enter': // Вибір елемента
        e.preventDefault();
        if (options[highlightedIndex]) handleOptionSelect(options[highlightedIndex]);
        break;
      case 'Escape': // закриваємо список
        e.preventDefault();
        setIsOpen(false);
        break;
      default:
        break;
    }
  };
// клік на елемент
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  // перевіряємо, чи елемент вже завантажено
  const isItemLoaded = (index) => !hasMore || index < options.length;

  return (
    <div
      className="dropdown"
      ref={dropdownRef}
      tabIndex={0} // робимо доступним для клавіатури
      onBlur={handleBlur} // закриваємо списк, якщо втрачаємо фокус
      onKeyDown={handleKeyDown} // реагуємо на натискання клавіш
    >
      <div className="dropdown-selected" onClick={handleToggle}>
        {selectedOption ? selectedOption.title : 'Select a movie'}
        {/* відображаємо в title обраний елемент  */}
      </div>
      {isOpen && (
        <InfiniteLoader
          isItemLoaded={isItemLoaded}
          // скільки елементів у списку
          itemCount={hasMore ? options.length + 1 : options.length}
          loadMoreItems={loading ? () => {} : onLoadMore} // завант. нові елементи
        >
          {/* створення віртуалізованого списку */}
          {/* обробник onItemsRendered відстежує, які елементи зараз видимі в списку- для оптимізації та завантаження нових даних, якщо користувач дійде до кінця списку. */}
          {({ onItemsRendered, ref }) => (
            <List
              className="dropdown-options"
              height={250} // висота випадаючого списку
              itemCount={options.length} // кількіст елементі
              itemSize={50} // висота 1 елемента
              width="100%"
              onItemsRendered={onItemsRendered} // обробляємо рендер елементів
              style={{ overflowX: 'hidden' }} // сховаємо горизонт. скролл
              ref={(list) => {
                ref(list); // прив'язує список до внутрішнього референсу бібліотеки InfiniteLoader, щоб вона могла з ним працювати.
                listRef.current = list; //зберігає посилання на сам список у listRef - потрібно, щоб мати доступ до методів списку, наприклад, для прокрутки до певного елемента.
              }}
            >
              {({ index, style }) => (
                <div
                  style={style}
                  className={`dropdown-option ${highlightedIndex === index ? 'highlighted' : ''}`} // виділяємо підсвічений елемент
                  onClick={() => handleOptionSelect(options[index])}
                > 
                  {options[index]?.title || (loading && index === options.length ? 'Loading...' : '')} 
                  {/*  текст елемента*/}
                </div>
              )}
            </List>
          )}
        </InfiniteLoader>
      )}
    </div>
  );
};

export default Dropdown;
