import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="max-h-sm card">
      <div className="flex flex-col">
        <div className="relative pb-2/3">
          <img
            className="absolute w-full h-full object-cover rounded-2xl"
            src={data.image}
            alt={data.name}
          />
        </div>
        <div className="flex text-sm py-3">
          {data.type && (
            <div className="whitespace-no-wrap uppercase text-gray-700 border border-gray-700 text-xs font-medium rounded-xl px-2 leading-5 mr-2">
              {data.type}
            </div>
          )}
          <span className="text-gray-700 truncate">{data.rooms} </span>
          <div className="flex ml-auto">
            <div className="flex text-red-500  justify-self-end  ml-3">
              <svg
                className="w-5 h-5 mx-2"
                fill="currentColor"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>

              <span className="text-gray-700 text-sm">{data.rating}</span>
            </div>
          </div>
        </div>

        <p className="text-sm leading-4">{data.description}</p>
      </div>
    </div>
  );
};

export default Card;
