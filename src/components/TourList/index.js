import React, { Component } from 'react';
import './TourList.scss';
import { tourData } from '../tourData';
import Tour from '../Tour/Tour';

export default class TourList extends Component {
  state = {
    tours: tourData,
  };

  removeTour = (id) => {
    const { tours } = this.state;
    const filterdTours = tours.filter((tour) => tour.id !== id);

    this.setState({
      tours: filterdTours,
    });
  };
  render() {
    const { tours } = this.state;
    return (
      <main>
        <section className='tourlist'>
          {tours.map((tour) => {
            return (
              <Tour
                key={tour.id}
                tour={tour}
                removeTour={this.removeTour}
              ></Tour>
            );
          })}
        </section>
      </main>
    );
  }
}
