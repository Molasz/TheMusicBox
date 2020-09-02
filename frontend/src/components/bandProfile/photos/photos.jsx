import React from 'react';
import './photos.scss';

function photos(props) {
  return (
    <section className='photo'>
      <h1 className='photo__title'>Photos and videos</h1>
      <div className='photo__main'>
        {props.data.map((element, i) => {
          return <img src={element} alt={i} className='main__item' />;
        })}
      </div>
    </section>
  );
}

export default photos;
