import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { showDisc, createDisc } from '../../../../../redux/actions/bandActions';
import {
  uploadImage,
  clearImage,
  uploadSound
} from '../../../../../redux/actions/infoActions';

import './addDisc.scss';

import RemoveCircleIcon from '@material-ui/icons/HighlightOff';
import AddCircleIcon from '@material-ui/icons/AddCircleOutline';
import CreateIcon from '@material-ui/icons/Create';
import BackIcon from '@material-ui/icons/ArrowBack';

function AddDisc({ newDisc, band, image, song, dispatch }) {
  const [disc, setDisc] = useState({ title: '', date: '', songs: [] });
  const [cover, setCover] = useState(null);
  const [newSong, setNewSong] = useState();

  const [fileInput, setFileInput] = useState(null);

  useEffect(() => {
    if (image.identifier === 'cover') {
      dispatch(createDisc(band._id, disc, image.path));
      dispatch(showDisc(undefined));
      dispatch(clearImage());
    } else if (image.identifier === 'song') {
      setDisc({ ...disc, songs: [...disc.songs, image.dispatch] });
      setNewSong();
    }
  }, [image, song]);

  return (
    <section className='new-disc'>
      <div className='new-disc__top'>
        <div className='top__cover'>
          <CreateIcon
            className='cover__icon'
            onClick={() => fileInput.click()}
          />
          <input
            type='file'
            name='file'
            style={{ display: 'none' }}
            ref={(fileInput) => setFileInput(fileInput)}
            onChange={(event) => setCover(event.target.files[0])}
          />
        </div>
        <div className='top__content'>
          <BackIcon
            className='content__icon'
            onClick={(event) => dispatch(showDisc(undefined))}
          />
          <div className='content__text'>
            <input
              className='text__title'
              placeholder='Disc title'
              type='text'
              value={disc.title}
              onChange={(event) =>
                setDisc({ ...disc, title: event.target.value })
              }
            />

            <div className='text__info'>
              <input
                className='info__date'
                type='date'
                value={disc.date}
                onChange={(event) =>
                  setDisc({ ...disc, date: event.target.value })
                }
              />
              <p>{`${disc.songs.length} Songs`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='new-disc__middle'>
        {disc.songs.map((element, i) => {
          return (
            <div className='middle__item' key={i}>
              <audio ref='audio_tag' src={element} controls autoPlay />
              <RemoveCircleIcon
                className='item__icon'
                onClick={() =>
                  setDisc({
                    ...disc,
                    songs: [...disc.songs].filter(
                      (element, index) => index !== i
                    )
                  })
                }
              />
            </div>
          );
        })}
      </div>
      <div className='new-disc__bottom'>
        <div className='bottom__new-song'>
          <input
            placeholder='Song'
            type='file'
            onChange={(event) => setNewSong(event.target.value)}
          />

          <AddCircleIcon
            onClick={() => {
              if (newSong) {
                const song = new FormData();
                song.append('sound', newSong);
                dispatch(uploadSound(`band/${band._id}/song`, song, 'song'));
              }
            }}
          />
        </div>

        <p
          className='bottom__create'
          onClick={() => {
            if (disc.title && disc.date && disc.songs.length && cover) {
              const img = new FormData();
              img.append('file', cover);
              dispatch(uploadImage(`band/${band._id}/cover`, img, 'cover'));
            }
          }}
        >
          Create disc
        </p>
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    band: state.bandReducer.band,
    image: state.infoReducer.image,
    song: state.infoReducer.sound
  };
}

export default connect(mapStateToProps)(AddDisc);
export { AddDisc };
