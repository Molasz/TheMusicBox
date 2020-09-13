import React from 'react';
import './disc.scss';
import { connect } from 'react-redux';

import onShow from './onShow';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function Disc({ data, index, dispatch }) {
  return (
    <div className='item'>
      {index === -1 ? (
        <div className='main__edit'>
          <AddCircleIcon
            className='edit__icon'
            onClick={(event) => onShow(event, index, dispatch)}
          />
          <p className='edit__title'>New disc</p>
        </div>
      ) : (
        <>
          <img
            src={data.img}
            alt='Cover'
            className='item__img'
            onClick={(event) => onShow(event, index, dispatch)}
          />
          <p className='item__title'>{data.title}</p>
        </>
      )}
    </div>
  );
}

export default connect(null, null)(Disc);
export { Disc };
