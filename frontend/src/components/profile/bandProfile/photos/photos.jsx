import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './photos.scss';

import {
  showPhoto,
  createPhoto,
  deletePhoto
} from '../../../../redux/actions/bandActions';
import { clearImage, uploadImage } from '../../../../redux/actions/infoActions';

import PhotoIcon from '@material-ui/icons/PhotoLibrary';
import ArrowRight from '@material-ui/icons/ArrowForwardIos';
import ArrowLeft from '@material-ui/icons/ArrowBackIos';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function Photos({ photos, editInfo, photo, image, band, dispatch }) {
  const [newPhotoInput, setNewPhotoInput] = useState();

  useEffect(() => {
    if (image.identifier === 'new-photo') {
      dispatch(createPhoto(band._id, image.path));
      dispatch(clearImage());
    }
  }, [image]);

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

          {editInfo.name && (
            <div className='main__new-photo'>
              <AddPhotoAlternateIcon
                className='new-photo__icon'
                onClick={() => {
                  if (editInfo.name) newPhotoInput.click();
                }}
              />

              <input
                type='file'
                name='file'
                style={{ display: 'none' }}
                ref={(fileInput) => setNewPhotoInput(fileInput)}
                onChange={(event) => {
                  const img = new FormData();
                  img.append('file', event.target.files[0]);
                  dispatch(uploadImage(band._id, img, 'new-photo'));
                }}
              />
            </div>
          )}
        </div>
      ) : (
        <div className='photo__show'>
          <div className='show__top'>
            <ArrowBackIcon
              className='top__icon'
              onClick={() => dispatch(showPhoto(null))}
            />

            {editInfo.name && (
              <HighlightOffIcon
                className='top__icon'
                onClick={() => {
                  dispatch(deletePhoto(band._id, band.photos[photo]));
                  dispatch(showPhoto(null));
                }}
              />
            )}
          </div>
          <div className='show__main'>
            <div className='main__left'>
              <ArrowLeft
                id='left-arrow'
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
              id='right-arrow'
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
                  id={`photo$i`}
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
    editInfo: state.bandReducer.editInfo,
    photo: state.bandReducer.showPhoto,
    band: state.bandReducer.band,
    image: state.infoReducer.image
  };
}

export default connect(mapStateToProps)(Photos);
export { Photos };
