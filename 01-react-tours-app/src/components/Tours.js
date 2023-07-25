import React from 'react';
import Title from './Title';
import Tour from './Tour';
import {tours} from '../data.js';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">

      <Title title='featured' subTitle='tours' />
      </div>

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour {...tour} key={tour.id} />
        })}

      </div>
    </section>
  );
};

export default Tours;
