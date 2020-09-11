import React from 'react';
import './photos.scss';

import PhotoIcon from '@material-ui/icons/PhotoLibrary';

function photos({ data }) {
  return (
    <section className='photo'>
      <div className='photo__title'>
        <PhotoIcon className='title__icon' />
        <h1 className='title__text'>Photos and videos</h1>
      </div>
      <div className='photo__main'>
        {data.map((element, i) => {
          return (
            <img src={element} alt={`nº${i}`} key={i} className='main__item' />
          );
        })}
      </div>
    </section>
  );
}

export default photos;
