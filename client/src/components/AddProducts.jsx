import React, { Component } from 'react'

//this is a comment

export default class AddProducts extends Component {

  state = {
    product_name : '',
    price :'' ,
    qty : '',
    container_id : ''
  }


  handleChange = e => {
    this.setState({[e.target.name] : e.target.value})
    console.log(e.target.name)
  }

  handleSubmit = () => {
    fetch('http://localhost:4000/add', {
      method:"POST",
      headers: {'Content-Type':'application/json'},
      body :JSON.stringify(this.state)
    })
      .then(data => console.log(data) )
      .catch(err => console.log(err))
  }

  render() {
    return(
      <div>
	<h1>Add Products</h1>
	<form onSubmit = {this.handleSubmit}>
	  <label>Product_name:
	    <input name="product_name" placeholder='product_name' value={this.state.product_name} onChange={this.handleChange} />
	  </label>
	  <label>Price
	    <input name="price" placeholder='price' value={this.state.price} onChange={this.handleChange} />
	  </label>
	  <label>Quantity
	    <input name="qty" placeholder='quantity' value={this.state.qty} onChange={this.handleChange} />
	  </label>
	  <label>Container_id
	    <input name="container_id" placeholder='container_id' value={this.state.container_id} onChange={this.handleChange} />
	  </label>
	  <button type="submit">Add</button>
	</form>
	{/*need to add a completed notification here showing the name of the product added and the qty of it
the next added product should be appended to the previous one instead of overwriting the last*/}



	{/*need to add a completed notification here showing the name of the product added and the qty of it
the next added product should be appended to the previous one instead of overwriting the last*/}
      </div>
    )
  }
}
