import React from 'react';

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = e => {
    e.preventDefault();
    const fish = {
      name: this.nameRef.value.value,
      price: Number(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value,
    };
    this.props.addFish(fish);
    // refresh the form
    e.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" name="name" ref={this.nameRef} placeholder="Имя" />
        <input
          type="text"
          name="price"
          ref={this.priceRef}
          placeholder="Цена"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Свежая!</option>
          <option value="unavailable">Распродано!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Описание" />
        <input
          type="text"
          name="image"
          ref={this.imageRef}
          placeholder="Картинка"
        />
        <button type="submit">+Добавить рыбу</button>
      </form>
    );
  }
}

export default AddFishForm;
