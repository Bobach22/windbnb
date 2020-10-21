import React from 'react';

const initialState = {
  cities: [
    {
      city: 'Helsinki, Finland',
      rooms: 'Entire apartment. 3 beds',
      rating: '4.40',
      image: 'https://source.unsplash.com/554x444/?home',
      type: 'super host',
      beds: 3,
      description: 'Stylist apartment in the center of the city',
    },
    {
      city: 'Helsinki, Finland',
      rooms: 'Entire apartment. 4 beds',
      rating: '4.85',
      image: 'https://source.unsplash.com/553x443/?home',
      type: 'super host',
      beds: 4,
      description: 'Stylist room in design district',
    },
    {
      city: 'Helsinki, Finland',
      rooms: 'Private room',
      rating: '4.25',
      image: 'https://source.unsplash.com/552x442/?home',
      type: '',
      beds: 1,
      description: 'Cozy, peauciful and private room with great location',
    },
    {
      city: 'Helsinki, Finland',
      rooms: 'Entire house',
      rating: '4.25',
      image: 'https://source.unsplash.com/551x441/?home',
      type: 'super host',
      beds: Infinity,
      description: 'Modern House in a remote area',
    },
    {
      city: 'Turku, Finland',
      rooms: 'Entire apartment. 5 beds',
      rating: '4.40',
      image: 'https://source.unsplash.com/556x440/?home',
      type: '',
      beds: 5,
      description: 'Stylist apartment in the center of the city',
    },
    {
      city: 'Turku, Finland',
      rooms: 'Entire apartment. 2 beds',
      rating: '4.85',
      image: 'https://source.unsplash.com/556x440/?home',
      type: '',
      beds: 2,
      description: 'Stylist room in design district',
    },
    {
      city: 'Turku, Finland',
      rooms: 'Private room',
      rating: '4.25',
      image: 'https://source.unsplash.com/555x440/?home',
      type: 'super host',
      beds: 1,
      description: 'Cozy, peauciful and private room with great location',
    },
    {
      city: 'Turku,Finland',
      rooms: 'Entire house',
      rating: '4.25',
      image: 'https://source.unsplash.com/554x440/?home',
      type: '',
      beds: Infinity,
      description: 'Modern House in a remote area',
    },
    {
      city: 'Oulu, Finland',
      rooms: 'Entire apartment. 2 beds',
      rating: '4.40',
      image: 'https://source.unsplash.com/553x440/?home',
      type: 'super host',
      beds: 2,
      description: 'Stylist apartment in the center of the city',
    },
    {
      city: 'Oulu, Finland',
      rooms: 'Entire apartment. 2 beds',
      rating: '4.85',
      image: 'https://source.unsplash.com/552x440/?home',
      type: '',
      beds: 2,
      description: 'Stylist room in design district',
    },
    {
      city: 'Oulu, Finland',
      rooms: 'Private room',
      rating: '4.25',
      image: 'https://source.unsplash.com/551x440/?home',
      type: '',
      beds: 1,
      description: 'Cozy, peaceful and private room with great location',
    },
    {
      city: 'Oulu, Finland',
      rooms: 'Entire house',
      rating: '4.25',
      image: 'https://source.unsplash.com/550x445/?home',
      type: 'super host',
      beds: Infinity,
      description: 'Modern House in a remote area',
    },
    {
      city: 'Vaasa, Finland',
      rooms: 'Entire apartment. 2 beds',
      rating: '4.40',
      image: 'https://source.unsplash.com/550x444/?home',
      type: 'super host',
      beds: 2,
      description: 'Stylist apartment in the center of the city',
    },
    {
      city: 'Vaasa, Finland',
      rooms: 'Entire apartment. 2 beds',
      rating: '4.85',
      image: 'https://source.unsplash.com/550x443/?home',
      type: '',
      beds: 2,
      description: 'Stylist room in design district',
    },
    {
      city: 'Vaasa, Finland',
      rooms: 'Private room',
      rating: '4.25',
      image: 'https://source.unsplash.com/550x442/?home',
      type: 'super host',
      beds: 3,

      description: 'Cozy, peauciful and private room with great location',
    },
    {
      city: 'Vaasa, Finland',
      rooms: 'Entire house',
      rating: '4.25',
      image: 'https://source.unsplash.com/550x441/?home',
      type: '',
      beds: 6,
      description: 'Modern House in a remote area',
    },
  ],
};

export const GlobalContext = React.createContext(null);

const GlobalContextProvider = ({ children }) => {
  const [state, setState] = React.useState(initialState);

  const filter = (query = null) => {
    console.log(Object.values(query).length);

    if (query.location !== null) {
      const { location, beds } = query;
      const filteredCities = initialState.cities.filter((city) => {
        if (city.city == location && city.beds >= beds) {
          return {
            ...city,
          };
        }
      });
      setState({ cities: null });
      setTimeout(() => {
        setState({ cities: filteredCities });
        console.log(filteredCities);
      }, 3000);
    } else {
      console.log('default');
      return initialState.cities;
    }
  };

  return (
    <GlobalContext.Provider value={{ cities: state.cities, filter }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
