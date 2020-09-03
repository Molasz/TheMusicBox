import React from 'react';
import './discography.scss';

import Disc from './disc/disc';

import DiscIcon from '@material-ui/icons/Album';

function discography(props) {
  return (
    <section className='discography'>
      <div className='discography__title'>
        <DiscIcon className='title__icon' />
        <h1>Discography</h1>
      </div>
      <div className='discography__main'>
        {props.data.map((element, i) => {
          return <Disc data={element} key={i} />;
        })}
      </div>
    </section>
  );
}

export default discography;
