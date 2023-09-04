import React, { useState } from 'react';
import { BsFillCalendarHeartFill } from 'react-icons/bs';
import Datetime from 'react-datetime';

const DateSelection = () => {
  const [date, setDate] = useState('');
  const [open, setOpen] = useState(false);
  const format = 'YYYY-MM-DD';

  const getSeparator = () => {
    const regex = /[^0-9a-zA-Z]+/;
    const match = format.match(regex);
    console.log(match);

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

  const handleChangeDate = (e) => {
    let currentDate = e.target.value;

    if (separator.symbol && separator.indexes.length > 0) {
      separator.indexes.forEach((index) => {
        if (currentDate.length > index && date[index] !== separator.symbol) {
          currentDate =
            currentDate.slice(0, index) +
            separator.symbol +
            currentDate.slice(index);
        }
      });
    }

    setDate(currentDate);
  };

  const handleClickButton = () => {
    setOpen(!open);
  };

  const handleChangeCalendar = (selected) => {
    const formattedDate = selected.format(format);
    console.log(formattedDate);
    setDate(formattedDate);
    setOpen(false);
  };

  return (
    <section>
      <input
        type='text'
        value={date}
        placeholder={format}
        onChange={handleChangeDate}
        maxLength={format.length}
        minLength={format.length}
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
