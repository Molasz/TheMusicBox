import React from 'react';
import { Link } from 'react-router-dom';

import './listItem.scss';

import AddCircleIcon from '@material-ui/icons/AddCircle';

function ListItem({ data, index }) {
  return (
    <>
      <img src={data.logo} alt='logo' className='item__logo' />
      <div className='item__info'>
        <div className='info__top'>
          <p className='text__name'>{data.name}</p> |
          <p className='text__city'>{data.city}</p>
          <p className='text__country'>{data.country}</p>
        </div>
        <div className='info__middle'>
          {data.tags.map((element, i) => (
            <p className='middle__item' key={i}>
              {element}
              {i === data.tags.length ? ', ' : ''}
            </p>
          ))}
        </div>
        <div className='info__bottom'>
          <p className='bottom__bio'>{data.bio}</p>
          <Link to={`/band/${data._id}`} className='bottom__link'>
            <AddCircleIcon className='link__icon' />
          </Link>
        </div>
      </div>
    </>
  );
}

export default ListItem;
