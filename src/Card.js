import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div className='book--container'>
        <div className='container'>
          <img src={this.props.image} alt="Gatsby" />
          <h4>Author: <i>{this.props.author}</i></h4>
          <h4>Published: <i>{this.props.publishYear}</i></h4>
          <p><b>Description: </b>{this.props.description}</p>
          <h4>Price: $ {this.props.price}</h4>
          <button>Buy</button>
        </div>
      </div>
    )
  }
}
