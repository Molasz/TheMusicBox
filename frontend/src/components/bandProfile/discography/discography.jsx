import React from 'react';
import './discography.scss';

function discography(props) {
  return (
    <section className='discography'>
      <h1 className='discography__title'>Discography</h1>
      <div className='discography__main'>
        {props.data.map((element, i) => {
          return (
            <div className='main__item' key={i}>
              <img src={element.img} alt='Cover' className='item__img' />
              <p className='item__title'>{element.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default discography;
