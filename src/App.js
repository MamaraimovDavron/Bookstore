import React, { Component } from 'react';
import Card from './Card';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='App--container'>
        <Card
          image="https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/the_great_gatsby_key_art.jpg"
          author="F. Scott Fitzgerald"
          publishYear="April 10, 1925"
          description="Lorem ipsum dolor sit amet."
          price="35" />

        <Card
          image="https://upload.wikimedia.org/wikipedia/commons/6/6f/Beloved_%281987_1st_ed_dust_jacket_cover%29.jpg"
          author="Toni Morrison"
          publishYear="September 1987"
          description="Lorem ipsum dolor sit amet."
          price="25" />

        <Card
          image="https://upload.wikimedia.org/wikipedia/commons/6/6f/Beloved_%281987_1st_ed_dust_jacket_cover%29.jpg"
          author="Toni Morrison"
          publishYear="September 1987"
          description="Lorem ipsum dolor sit amet."
          price="25" />

        <Card
          image="https://upload.wikimedia.org/wikipedia/commons/6/6f/Beloved_%281987_1st_ed_dust_jacket_cover%29.jpg"
          author="Toni Morrison"
          publishYear="September 1987"
          description="Lorem ipsum dolor sit amet."
          price="25" />
      </div>
    )
  }
}
