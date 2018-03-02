import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = e => {
    // 1. stop the form from submitting
    e.preventDefault();
    // 2. get the text form input
    const storeName = this.myInput.value.value;
    // 3. change the page
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Пожалуйста введите имя магазина</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Посетить магазин </button>
      </form>
    );
  }
}

export default StorePicker;
