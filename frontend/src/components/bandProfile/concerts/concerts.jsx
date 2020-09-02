import React from 'react';
import './concerts.scss';

function concerts(props) {
  return (
    <section className='concerts'>
      <h1 className='concerts__title'>Concerts</h1>
      <div className='concerts__main'>
        {props.data.map((element, i) => {
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
