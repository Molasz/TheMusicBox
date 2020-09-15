import React, { useState, useEffect } from 'react';
import './disc.scss';
import { connect } from 'react-redux';

import { showDisc } from '../../../../../redux/actions/bandActions';

import AddCircleIcon from '@material-ui/icons/AddCircle';

function Disc({ data, index, editInfo, dispatch }) {
  const [isLoadedImage, setIsLoadedImage] = useState(false);

  return (
    <div className='item'>
      {index === -1 ? (
        <div className='main__edit'>
          <AddCircleIcon
            className='edit__icon'
            onClick={(event) => dispatch(showDisc(index))}
          />
          <p className='edit__title'>New disc</p>
        </div>
      ) : (
        <>
          <img
            src={data.img.path}
            alt='Cover'
            className='item__img'
            onClick={(event) => dispatch(showDisc(index))}
          />
          <p className='item__title'>{data.title}</p>
        </>
      )}
    </div>
  );
}

export default connect()(Disc);
export { Disc };
