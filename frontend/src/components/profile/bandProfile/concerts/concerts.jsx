import React, { useState } from 'react';
import { connect } from 'react-redux';
import './concerts.scss';

import {
  createConcert,
  deleteConcert
} from '../../../../redux/actions/bandActions';

import MusicIcon from '@material-ui/icons/MusicNote';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Concerts({ data, editInfo, bandId, dispatch }) {
  const [newConcert, setNewConcert] = useState({ date: '', city: '' });

  return (
    <section className='concerts'>
      <div className='concerts__title'>
        <MusicIcon className='title__icon' />
        <h1 className='title__text'>Concerts</h1>
      </div>
      <div className='concerts__main'>
        {data?.map((element, i) => {
          return (
            <div className='main__item' key={i}>
              <p className='item__date'>{element.date}</p>
              <div className='item__container'>
                <p className='container__city'>{element.city}</p>
                {editInfo.name !== undefined && (
                  <HighlightOffIcon
                    className='container__icon'
                    onClick={() => dispatch(deleteConcert(bandId, element._id))}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      {editInfo.name !== undefined && (
        <div className='concerts__new-concert'>
          <div className='new-concert__input'>
            <input
              placeholder='Date'
              type='date'
              value={newConcert.date}
              onChange={(event) =>
                setNewConcert({ ...newConcert, date: event.target.value })
              }
            />

            <input
              placeholder='City'
              type='text'
              value={newConcert.city}
              onChange={(event) =>
                setNewConcert({ ...newConcert, city: event.target.value })
              }
            />
          </div>
          <AddCircleOutlineIcon
            className='new-concert__create'
            onClick={() => dispatch(createConcert(bandId, newConcert))}
          />
        </div>
      )}
    </section>
  );
}

function mapStateToProps(state) {
  return {
    editInfo: state.bandReducer.editInfo,
    bandId: state.bandReducer.band._id
  };
}

export default connect(mapStateToProps)(Concerts);
export { Concerts };
