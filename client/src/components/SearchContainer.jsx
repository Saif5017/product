import React, { Component } from 'react';
// import ShowContainers from './ShowContainers';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: '',
      items: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:4000/name/' + this.state.product_name)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ items: res });
      })
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    this.setState({ product_name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.product_name);
    this.componentDidMount();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type='text'
              value={this.state.product_name}
              onChange={this.handleChange}
            />
          </label>
          <button type='submit'>Search</button>
        </form>
        {this.state.items.map((item) => {
          return (
            //need to arrange this data in a tabular format - design style must be similar to tables in material ui
            <div key={item.id}>
              <hr />
              <p>Name: {item.product_name}</p>
              <p>Price: {item.price} </p>
              <p>Quantity : {item.qty}</p>
              <p>Container_Location : {item.container_id}</p>
            </div>
          );
          //need to arrange this data in a tabular format
        })}
      </div>
    );
  }
}
