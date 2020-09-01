import React from 'react';
import './discography.scss';

const portada = [
  {
    img:
      'https://bcstore.bcoredisc.com/wp-content/uploads/2020/02/CRIM_BC299LP.jpg',
    title: 'Blau Sang Vermell Cel'
  },
  {
    img:
      'https://bcstore.bcoredisc.com/wp-content/uploads/2020/02/CRIM_BC299LP.jpg',
    title: 'Blau Sang Vermell Cel'
  },
  {
    img:
      'https://bcstore.bcoredisc.com/wp-content/uploads/2020/02/CRIM_BC299LP.jpg',
    title: 'Blau Sang Vermell Cel'
  }
];

function discography() {
  return (
    <section className='discography'>
      <h1 className='discography__title'>Discography</h1>
      <div className='discography__main'>
        {portada.map((element, i) => {
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
