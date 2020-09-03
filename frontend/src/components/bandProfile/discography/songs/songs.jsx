import React from 'react';

import './songs.scss';

import Disc from '../disc/disc';

function Songs({ info, index }) {
  return (
    <section className='songs'>
      <div className='songs__top'>
        <img src={info[index].img} alt='Album cover' className='top__img' />
        <h3>{info[index].title}</h3>
      </div>
      <div className='songs__middle'>
        {info[index].songs.map((element, i) => {
          return (
            <p className='middle__item' key={i}>
              {element.title} | {element.time}
            </p>
          );
        })}
      </div>
      <div className='songs__bottom'>
        {info.map((element, i) => {
          if (i !== index) {
            return <Disc data={element} index={i} />;
          }
        })}
      </div>
    </section>
  );
}

export default Songs;
