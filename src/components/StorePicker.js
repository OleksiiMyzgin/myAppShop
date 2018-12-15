import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };
  myInput = React.createRef();
  goToStore = e => {
    // 1. stop the form from submitting
    e.preventDefault();
    // 2. get the text form input
    const storeName = this.myInput.current.value;
    // 3. change the page
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -> </button>
      </form>
    );
  }
}

export default StorePicker;
