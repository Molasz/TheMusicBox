import React from 'react';
import './discography.scss';

import Disc from './disc/disc';

function discography(props) {
  return (
    <section className='discography'>
      <h1 className='discography__title'>Discography</h1>
      <div className='discography__main'>
        {props.data.map((element, i) => {
          return <Disc data={element} key={i} />;
        })}
      </div>
    </section>
  );
}

export default discography;
