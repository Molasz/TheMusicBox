import React from 'react';
import './disc.scss';
import { connect } from 'react-redux';

import onShow from './onShow';

function Disc({ data, index, dispatch }) {
  return (
    <div className='item'>
      <img
        src={data.img}
        alt='Cover'
        className='item__img'
        onClick={(event) => onShow(event, index, dispatch)}
      />
      <p className='item__title'>{data.title}</p>
    </div>
  );
}

export default connect(null, null)(Disc);
export { Disc };
