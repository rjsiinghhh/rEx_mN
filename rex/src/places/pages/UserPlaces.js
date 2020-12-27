import React from 'react';

import PlaceList from '../components/PlaceList';



const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Eiffel Tower',
    description: 'Super pointy, Don\'t run with this in your hand, SpiderMan climbed up this one time, had a hard time getting down because there was nothing to web to.',
    imageURL: 'https://i.imgur.com/Tw44FsT.ppg',
    address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France',
    location: {
      lat: 48.858093,
      lng: 2.294694
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the worlds most famous sky scraper. Honestly, it kinda sucks. lol One time, I dropped a penny off the top. Damn I don\'t think this is the place I should be saying this. Also, Spiderman also did some amazing life saving work up here. Hometown for him, so it\'s the home court advantage. Beatiful site to witness.. I wasn\'t there but from what they said it was amazing.',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
];


const UserPlaces = () => {

  return <PlaceList items={DUMMY_PLACES} />;
};



export default UserPlaces;
