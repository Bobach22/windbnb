import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { GlobalContext } from '../../context/GlobalContext';

const styles = {
  content: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 'auto',
  },
};

Modal.setAppElement('#root');

const Form = () => {
  const [open, setOpen] = React.useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const [location, setLocation] = React.useState('');
  const [guest, setGuest] = React.useState({
    adults: 0,
    children: 0,
  });

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const Increment = (id) => {
    const key = id;
    setGuest((prevState) => ({ ...prevState, [key]: prevState[key] + 1 }));
  };

  const Decrement = (id) => {
    const key = id;
    setGuest((prevState) => ({
      ...prevState,
      [key]: prevState[key] > 0 ? prevState[key] - 1 : 0,
    }));
  };

  const [activeTab, setActiveTab] = React.useState({
    location: false,
    guests: false,
  });

  const Toggle = (id) => {
    const key = id;
    setActiveTab((prevState) => {
      for (const item in prevState) {
        prevState[item] = false;
      }
      return {
        ...prevState,
        [key]: true,
      };
    });
    console.log(activeTab);
  };

  const ref = React.useRef();

  const { filter } = React.useContext(GlobalContext);

  const setFilter = (numOfBeds, loc) => {
    const query = { beds: numOfBeds, location: loc };
    filter(query);
    console.log(query);
  };

  const locations = [
    'Helsinki, Finland',
    'Turku, Finland',
    'Oulu, Finland',
    'Vaasa, Finland',
  ];

  return (
    <div className="bg-white">
      <div
        onClick={openModal}
        className="flex rounded-xl shadow-md sm:ml-auto sm:mr-0 items-center cursor-pointer mx-auto"
      >
        <div className="p-4 text-sm">{location || 'Where do you travel?'}</div>

        <div className="border-l border-r p-4 text-sm text-gray-500">
          <div className="font-light">
            {guest.adults + guest.children ? (
              <span>
                {guest.adults + guest.children}{' '}
                {guest.children + guest.adults > 1 ? 'guests' : 'guest'}
              </span>
            ) : (
              <span>Add guests</span>
            )}
          </div>
        </div>
        <div>
          <div className="p-4 py-3">
            <svg
              className="w-4 h-4 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <Modal
        isOpen={open}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={styles}
        contentLabel="Example Modal"
      >
        <div
          className="flex flex-col h-full"
          onClick={() => {
            setActiveTab({ guests: false, location: false });
          }}
        >
          <button
            className="mb-6 ml-auto inline-block focus:outline-none"
            onClick={() => setOpen(false)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            className="flex flex-col sm:flex-row rounded-xl shadow-md sm:ml-auto sm:mr-0 items-center mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex-1 w-full sm:w-auto"
              onClick={() => Toggle('location')}
            >
              <div
                className="flex flex-col border border-white focus-within:border-gray-900 px-4 py-2 rounded-xl"
                onClick={() => {
                  ref.current.focus();
                }}
              >
                <label className="text-sm">Location</label>
                <input
                  value={location}
                  ref={ref}
                  onChange={handleChange}
                  className="text-sm focus:outline-none w-full"
                  placeholder="Where do you travel?"
                />
              </div>
            </div>

            <div className="border-l border-r border-white sm:border-gray-200 text-sm text-gray-500 flex-1 w-full sm:w-auto">
              <button
                onClick={() => Toggle('guests')}
                className={`w-full py-2 px-4 ${
                  activeTab.guests ? 'cursor-text' : ''
                } flex flex-col rounded-xl border border-white focus:outline-none focus:border-gray-900 h-full`}
              >
                <span className="text-sm text-black">Guests</span>
                <div className="font-light">
                  {guest.adults + guest.children ? (
                    <span>
                      {guest.adults + guest.children}{' '}
                      {guest.children + guest.adults > 1 ? 'guests' : 'guest'}
                    </span>
                  ) : (
                    <span>Add guests</span>
                  )}
                </div>
              </button>
            </div>

            <div className="flex-1 sm:flex  items-center justify-center hidden">
              <div className="flex">
                <button
                  onClick={() =>
                    setFilter(guest.children + guest.adults, location)
                  }
                  className="p-4 py-3 flex shadow focus:outline-none text-white items-center justify-center rounded-xl px-6 bg-red-500"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <span className="px-2 text-sm">Search</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex text-sm my-4">
            <div
              className={`${
                activeTab.location ? 'sm:w-auto w-full' : 'h-0'
              } sm:flex-1`}
            >
              {activeTab.location && (
                <div
                  className=""
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <ul className="flex flex-col py-4 rounded-lg border shadow-md">
                    {locations.slice(0, 5).map((city) => (
                      <li
                        key={city}
                        onClick={() => setLocation(city)}
                        className="py-2 mb-1 px-2 hover:bg-gray-200 rounded-lg cursor-pointer"
                      >
                        <div className="flex">
                          <span className="px-2">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeLidth="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </span>
                          {city}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div
              className={`flex-1 ${activeTab.guests ? '' : 'h-0'}`}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {activeTab.guests && (
                <div className={`${activeTab.guests ? '' : 'h-0'}`}>
                  <div className="flex flex-col px-4 rounded-lg shadow-md border divide-y">
                    <div className="flex flex-col py-4">
                      <div className="flex flex-col">
                        <h2 className="font-medium text-sm">Adults</h2>
                        <span className="font-light text-gray-500">
                          Ages 13 or above
                        </span>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => {
                            Decrement('adults');
                          }}
                          className="w-5 h-5 flex items-center justify-center focus:outline-none rounded border border-gray-500"
                        >
                          -
                        </button>{' '}
                        <span className="flex items-center justify-center w-6 text-black font-medium">
                          {guest.adults}
                        </span>
                        <button
                          onClick={() => {
                            Increment('adults');
                          }}
                          className="w-5 h-5 flex items-center justify-center focus:outline-none rounded border border-gray-500"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col py-4">
                      <div className="flex flex-col">
                        <h2 className="font-medium text-sm">Children</h2>
                        <span className="font-light text-gray-500">
                          Ages 2-12
                        </span>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => Decrement('children')}
                          className="w-5 h-5 flex items-center justify-center focus:outline-none rounded border border-gray-500"
                        >
                          -
                        </button>{' '}
                        <span className="flex items-center justify-center w-6 text-black font-medium">
                          {guest.children}
                        </span>
                        <button
                          onClick={() => Increment('children')}
                          className="w-5 h-5 flex items-center justify-center focus:outline-none rounded border border-gray-500"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="sm:flex-1 h-0" />
          </div>
          <div className="flex sm:hidden justify-center">
            <div className="flex items-center justify-center">
              <button
                onClick={() =>
                  setFilter(guest.children + guest.adults, location)
                }
                className="p-4 py-3 flex shadow focus:outline-none text-white items-center justify-center rounded-xl px-6 bg-red-500"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="px-2 text-sm">Search</span>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Form;
