import React from 'react';
import './disc.scss';
import { connect } from 'react-redux';
import { showDisc } from '../../../../redux/actions/bandActions';

import store from '../../../../redux/store';

function Disc({ data, index }) {
  function onShow(event, index) {
    event.preventDefault();
    store.dispatch(showDisc(index));
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

function mapDispatchToProps(dispatch) {
  return { showDisc };
}

export default connect(null, mapDispatchToProps)(Disc);
