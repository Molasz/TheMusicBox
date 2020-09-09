import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './search.scss';

import { showDisc } from '../../redux/actions/bandActions';

import ListItem from './listItem/listItem';

function Search({ band, dispatch }) {
  useEffect(() => {
    dispatch(showDisc());
  }, []);

  const list = band ? (
    band.map((element, i) => {
      return (
        <div className='list__item' key={i}>
          <ListItem data={element} />
        </div>
      );
    })
  ) : (
    <h1>Loading...</h1>
  );

  return <section className='list'>{list}</section>;
}

function mapStateToProps(state) {
  return { band: state.bandReducer.search };
}

export default connect(mapStateToProps, null)(Search);
export { Search };
