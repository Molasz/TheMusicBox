import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import { getFollowing } from '../../../redux/actions/authActions';

import './following.scss';

const Following = ({ userId, userFollowing, dispatch }) => {
  useEffect(() => {
    if (!userFollowing) dispatch(getFollowing(userId));
  });

  const result = userFollowing?.map((element, i) => {
    return (
      <div className='main__item' key={i}>
        <Link to={`/band/${element._id}`}>
          <img src={element.logo} alt='Band logo' className='item__logo' />
        </Link>
        <div className='item__text'>
          <p className='text__name'>{element.name}</p>
          <p className='text__locality'>
            <span>{element.city}</span>
            {' | '}
            <span>{element.country}</span>
          </p>
        </div>
      </div>
    );
  });

  return (
    <section className='follow'>
      <div className='follow__title'>
        <ThumbUpIcon className='title__icon' />
        <p className='title__text'>Following</p>
      </div>
      <div className='follow__main'>{result}</div>
    </section>
  );
};

function mapStateToProps(state) {
  return {
    userFollowing: state.authReducer.userFollowing
  };
}

export default connect(mapStateToProps, null)(Following);
export { Following };
