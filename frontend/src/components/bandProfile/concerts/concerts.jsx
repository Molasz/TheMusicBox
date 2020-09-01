import React from 'react';
import './concerts.scss';

const conciertus = [
  { city: 'Badalona', date: '23 May' },
  { city: 'Valencia', date: '25 Sep' },
  { city: 'Zaragoza', date: '26 Sep' },
  { city: 'Pamplona', date: '2 Oct' },
  { city: 'Madrid', date: '3 Oct' }
];

function concerts() {
  return (
    <section className='concerts'>
      <h1 className='concerts__title'>Concerts</h1>
      <div className='concerts__main'>
        {conciertus.map((element, i) => {
          return (
            <div className='main__item'>
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
