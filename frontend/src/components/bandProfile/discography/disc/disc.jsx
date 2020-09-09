import React from 'react';
import './disc.scss';
import { connect } from 'react-redux';
import { showDisc } from '../../../../redux/actions/bandActions';

function Disc({ data, index, dispatch }) {
  function onShow(event, index) {
    event.preventDefault();
    dispatch(showDisc(index));
  }

  return (
    <div className='item'>
      <img
        src={data.img}
        alt='Cover'
        className='item__img'
        onClick={(event) => {
          onShow(event, index);
        }}
      />
      <p className='item__title'>{data.title}</p>
    </div>
  );
}

export default connect(null, null)(Disc);
