import React from 'react';
import { connect } from 'react-redux';
import { showDisc } from '../../../../redux/actions/bandActions';

import store from '../../../../redux/store';

import './songs.scss';

import Disc from '../disc/disc';

import BackIcon from '@material-ui/icons/KeyboardBackspace';

function Songs({ info, index }) {
  function onBack(event) {
    event.preventDefault();
    store.dispatch(showDisc());
  }
  return (
    <section className='songs'>
      <div className='songs__top'>
        <img src={info[index].img} alt='Album cover' className='top__img' />
        <div className='top__content'>
          <BackIcon
            className='content__icon'
            onClick={(event) => onBack(event)}
          />
          <div className='content__text'>
            <h3 className='text__title'>{info[index].title}</h3>
            <p className='text__info'>
              {info[index].date} | {info.length} cançons
            </p>
          </div>
        </div>
      </div>
      <div className='songs__middle'>
        {info[index].songs.map((element, i) => {
          return (
            <p className='middle__item' key={i}>
              <span className='item__number'>{i}.</span>
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

function mapDispatchToProps(dispatch) {
  return { showDisc };
}

export default connect(null, mapDispatchToProps)(Songs);