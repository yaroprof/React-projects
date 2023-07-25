import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
  return (
    <section className="flex flex-col items-center ">
      <div className="text-center mt-8 mb-8">
        <h2 className="text-3xl font-bold">Out Tours</h2>
        <div className="h-1 bg-blue-500 w-20 mx-auto mt-2"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
