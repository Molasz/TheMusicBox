import React from 'react';
import './photos.scss';

import PhotoIcon from '@material-ui/icons/PhotoLibrary';

function Photos({ photos }) {
  return (
    <section className='photo'>
      <div className='photo__title'>
        <PhotoIcon className='title__icon' />
        <h1 className='title__text'>Photos and videos</h1>
      </div>
      <div className='photo__main'>
        {photos.map((element, i) => {
          return (
            <img src={element} alt={`nº${i}`} key={i} className='main__item' />
          );
        })}
      </div>
    </section>
  );
}

export default Photos;
