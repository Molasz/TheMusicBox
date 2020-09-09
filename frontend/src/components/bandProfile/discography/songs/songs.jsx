import React from 'react';
import { connect } from 'react-redux';

import './songs.scss';

import Disc from '../disc/disc';

import BackIcon from '@material-ui/icons/KeyboardBackspace';

import onShow from '../disc/onShow';

function Songs({ info, index, dispatch }) {
  return (
    <section className='songs'>
      <div className='songs__top'>
        <img src={info[index].img} alt='Album cover' className='top__img' />
        <div className='top__content'>
          <BackIcon
            className='content__icon'
            onClick={(event) => onShow(event, undefined, dispatch)}
          />
          <div className='content__text'>
            <h3 className='text__title'>{info[index].title}</h3>
            <p className='text__info'>
              {info[index].date} | {info[index].songs.length} songs
            </p>
          </div>
        </div>
      </div>
      <div className='songs__middle'>
        {info[index].songs.map((element, i) => {
          return (
            <p className='middle__item' key={i}>
              <span className='item__number'>{i + 1}.</span>
              {element.title} | {element.time}
            </p>
          );
        })}
      </div>
      <div className='songs__bottom'>
        {info.map((element, i) => {
          if (i !== index) return <Disc data={element} key={i} />;
          else return '';
        })}
      </div>
    </section>
  );
}

export default connect(null, null)(Songs);
export { Songs };
