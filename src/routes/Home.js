import React from 'react';
import { Shimmer } from 'react-shimmer';
import Card from '../components/Card';
import Header from '../components/Header';
import Grid from '../components/Grid';
import { GlobalContext } from '../context/GlobalContext';

const Home = () => {
  const { cities } = React.useContext(GlobalContext);
  console.log(cities);
  if (cities) {
    return (
      <>
        <Header />
        <Heading stays={cities.length} />
        <Grid>
          {cities.map((item) => (
            <Card key={item.name} data={item} />
          ))}
        </Grid>
      </>
    );
  }
  return (
    <>
      <Header />
      <Heading stays={0} />
      <Grid>
        {[0, 1, 2, 3, 4, 5, 6].map((item,index) => (
          <div className="max-h-sm">
            <div className="flex flex-col">
              <div className="flex-shrink rounded-xl">
                <Shimmer height={200} width={300} key={item} />
              </div>
              <div className="mt-4">
                <Shimmer height={16} key={index+item} width={100} />
              </div>
            </div>
          </div>
        ))}
      </Grid>
    </>
  );
};

const Heading = ({ stays }) => {
  return (
    <div className="flex h-20 items-center">
      <h1 className="font-bold text-lg">Stays in Finland</h1>
      <span className="ml-auto text-sm text-gray-700 font-normal">
        {stays} {stays > 1 ? 'stays' : 'stay'}
      </span>
    </div>
  );
};

export default Home;
