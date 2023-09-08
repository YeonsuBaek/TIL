import React, { useState } from 'react';
import { BsFillCalendarHeartFill } from 'react-icons/bs';
import Datetime from 'react-datetime';
import moment from 'moment';

const DateSelection = ({ format = 'YYYY-MM-DD', autoFormatting = true }) => {
  const [date, setDate] = useState('');
  const [open, setOpen] = useState(false);

  const getSeparator = () => {
    const regex = /[^0-9a-zA-Z]+/;
    const match = format.match(regex);

    if (match) {
      const symbol = match[0];
      const indexes = [];

      for (let i = 0; i < format.length; i++) {
        if (format[i] === symbol) {
          indexes.push(i);
        }
      }

      return { symbol, indexes };
    }
    return { symbol: undefined, indexes: [] };
  };

  const separator = getSeparator();

  const handleCursorPosition = (target) => {
    const { value, selectionStart } = target;
    let cursorPosition = selectionStart || value.length;

    // if (cursorPosition === value.length) {
    //   cursorPosition += 1;
    // }

    setTimeout(() => {
      target.setSelectionRange(cursorPosition, cursorPosition);
    });
  };

  const handleChangeDate = (e) => {
    const { target } = e;
    const { value } = target;

    if (autoFormatting) {
      handleCursorPosition(target);

      let currentDate = [...value]
        .filter((str) => str !== separator.symbol)
        .join('');

      if (separator.symbol && separator.indexes.length > 0) {
        separator.indexes.forEach((index) => {
          if (currentDate.length > index) {
            currentDate =
              currentDate.slice(0, index) +
              separator.symbol +
              currentDate.slice(index);
          }
        });
      }
      setDate(currentDate);
    } else {
      setDate(value);
    }
  };

  const handleClickButton = () => {
    setOpen(!open);
  };

  const handleChangeCalendar = (selected) => {
    const formattedDate = selected.format(format);
    setDate(formattedDate);
    setOpen(false);
  };

  const checkValidDate = (e) => {
    const { value } = e.target;
    const selectedDate = moment(value, format, true);
    console.log(selectedDate);
    const isValid = selectedDate.isValid();

    if (!isValid) {
      setDate('');
    }
  };

  return (
    <section>
      <input
        type='text'
        value={date}
        placeholder={format}
        onChange={handleChangeDate}
        onBlur={checkValidDate}
      />
      <button type='button' onClick={handleClickButton}>
        <BsFillCalendarHeartFill />
      </button>
      {open && (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '13px',
          }}
        >
          <Datetime
            input={false}
            timeFormat={false}
            dateFormat={format}
            value={date}
            onChange={handleChangeCalendar}
          />
        </div>
      )}
    </section>
  );
};

export default DateSelection;
