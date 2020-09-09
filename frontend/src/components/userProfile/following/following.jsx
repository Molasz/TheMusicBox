import React from 'react';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import './following.scss';

const Following = ({ follows }) => {
  return (
    <section className='follow'>
      <div className='follow__title'>
        <ThumbUpIcon className='title__icon' />
        <p className='title__text'>Following</p>
      </div>
      <div className='follow__main'></div>
    </section>
  );
};

export default Following;
