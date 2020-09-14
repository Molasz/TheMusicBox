import React from 'react';
import { connect } from 'react-redux';
import './photos.scss';

import { showPhoto } from '../../../../redux/actions/bandActions';

import PhotoIcon from '@material-ui/icons/PhotoLibrary';
import ArrowRight from '@material-ui/icons/ArrowForwardIos';
import ArrowLeft from '@material-ui/icons/ArrowBackIos';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Photos({ photos, bandEdit, photo, dispatch }) {
  return (
    <section className='photo'>
      <div className='photo__title'>
        <PhotoIcon className='title__icon' />
        <h1 className='title__text'>Photos and videos</h1>
      </div>
      {photo == null ? (
        <div className='photo__main'>
          {photos.map((element, i) => {
            return (
              <img
                src={element}
                alt={i}
                key={i}
                className='main__item'
                onClick={() => dispatch(showPhoto(i))}
              />
            );
          })}
        </div>
      ) : (
        <div className='photo__show'>
          <div className='show__main'>
            <div className='main__left'>
              <ArrowBackIcon
                className='left__back'
                onClick={() => dispatch(showPhoto(null))}
              />
              <ArrowLeft
                className='arrow'
                onClick={() =>
                  dispatch(
                    showPhoto(photo === 0 ? photos.length - 1 : photo - 1)
                  )
                }
              />
            </div>
            <img src={photos[photo]} alt='zoom' className='main__photo' />
            <ArrowRight
              className='arrow'
              onClick={() =>
                dispatch(showPhoto(photo === photos.length - 1 ? 0 : photo + 1))
              }
            />
          </div>
          <div className='show__footer'>
            {photos.map((element, i) => {
              return (
                <img
                  src={element}
                  alt={i}
                  key={i}
                  className={`footer__item ${i === photo ? 'color' : ''}`}
                  onClick={() => dispatch(showPhoto(i))}
                />
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

function mapStateToProps(state) {
  return {
    bandEdit: state.bandReducer.bandEdit,
    photo: state.bandReducer.showPhoto
  };
}

export default connect(mapStateToProps)(Photos);
