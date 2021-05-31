import React, { Component } from 'react'

export default class ShowContainers extends Component {

  state = {
    container_id:[]
  }

  componentDidMount(){
    fetch('http://localhost:4000/container/list')
      .then(res => res.json())
      .then(data=>{
	console.log(data);
	this.setState({container_id:data})
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
	{this.state.container_id.map(container => {
	  return(
	    <div>
	      <h1>{container.container_id}</h1>
	    </div>
	  )
	})}
      </div>
    )
  }
}
