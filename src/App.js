import React, { Component } from 'react';
import Card from './Card';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Card
          image="https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/the_great_gatsby_key_art.jpg"
          author="F. Scott Fitzgerald"
          publishYear="April 10, 1925"
          description="Lorem ipsum dolor sit amet."
          price="35" />

        <Card
          image="https://kbimages1-a.akamaihd.net/e1baca56-0d4e-441f-bd3d-4abe2391d082/353/569/90/False/beloved-26.jpg"
          author="Toni Morrison"
          publishYear="September 1987"
          description="Lorem ipsum dolor sit amet."
          price="25" />

        <Card
          image="https://m.media-amazon.com/images/I/51Ul1Wg3nBL.jpg"
          author="George Orwell"
          publishYear="8 June 1949"
          description="Lorem ipsum dolor sit amet."
          price="45" />

        <Card
          image="https://static.tvtropes.org/pmwiki/pub/images/selindjer_nad_propastyu_vo_rji.jpg"
          author="J. D. Salinger"
          publishYear="July 16, 1951"
          description="Lorem ipsum dolor sit amet."
          price="55" />

      </div>
    )
  }
}
