import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour, updateTours }) => {
  const [readMore, setReadMore] = useState(false);

  return (


    <article className="mb-8 mt-8 pt-8 bg-white rounded-lg shadow-md transition duration-300 flex flex-col items-center">
      {/* Image hero */}
      <img src={image} alt={name} className="h-40 sm:h-48 object-cover" />

      {/* Text description- footer */}
      <footer className="pt-4 p-8">
        <div className="flex items-center mt-8 mb-8 justify-between">
          <h4 className="text-lg font-bold">{name}</h4>
          <h4 className="text-lg font-bold bg-blue-500 text-white px-2 py-0.5 rounded">{price}</h4>
        </div>

        <p className="mb-2 mb-5 text-blue-500 text-blue-900 px-6">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="inline-block bg-transparent border-transparent capitalize text-primary-500 text-lg font-normal cursor-pointer pl-1 ml-2 px-6"
            onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : ' read more'}
          </button>
        </p>

        {/* Remove button */}
        <button
          className="block w-48 mx-auto mt-4 text-red-700 text-lg font-semibold bg-transparent border-2 border-red-700 py-1 px-2 rounded"
          onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>




  );
};

export default Tour;
