import React, { Fragment } from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <form action="" className="store-selector">
        <h2>Пожалуйста введите имя магазина</h2>
        <input type="text" required olaceholder="Store Name"/>
        <button type="submit">Посетить магазин </button>
      </form>
    )
  }
}

export default StorePicker;