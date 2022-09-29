import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div className='book--container'>
        <div className='wrapper'>
        <div className='container'>
          <img src={this.props.image} alt="Gatsby" />
          <h3>Author: <i>{this.props.author}</i></h3>
          <h4>Published: <i>{this.props.publishYear}</i></h4>
          <p><b>Description: </b>{this.props.description}</p>
          <h3>Price: $ {this.props.price}</h3>
          <button>Buy</button>
        </div>
      </div>
      </div>
    )
  }
}
