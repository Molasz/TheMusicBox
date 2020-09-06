import React from 'react';
import './concerts.scss';

import MusicIcon from '@material-ui/icons/MusicNote';

function concerts({ data }) {
  return (
    <section className='concerts'>
      <div className='concerts__title'>
        <MusicIcon className='title__icon' />
        <h1 className='title__text'>Concerts</h1>
      </div>
      <div className='concerts__main'>
        {data.map((element, i) => {
          return (
            <div className='main__item' key={i}>
              <p className='item__date'>{element.date}</p>
              <p className='item__city'>{element.city}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default concerts;
