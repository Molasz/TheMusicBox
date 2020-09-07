import React from 'react';
import { connect } from 'react-redux';

import './search.scss';

import ListItem from './listItem/listItem';

function Search({ band }) {
  const list = band ? (
    band.map((element, i) => {
      return (
        <div className='list__item' index={i}>
          <ListItem data={element} />
        </div>
      );
    })
  ) : (
    <h1>Loading...</h1>
  );

  return <section className='list'>{list}</section>;
}

export function mapStateToProps(state) {
  return { band: state.bandReducer.search };
}

export default connect(mapStateToProps, null)(Search);
