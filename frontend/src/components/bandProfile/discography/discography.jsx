import React from 'react';
import { connect } from 'react-redux';

import './discography.scss';

import Disc from './disc/disc';
import Songs from './songs/songs';

import DiscIcon from '@material-ui/icons/Album';

function Discography({ data, disc }) {
  return (
    <section className='discography'>
      <div className='discography__title'>
        <DiscIcon className='title__icon' />
        <h1>Discography</h1>
      </div>
      {disc !== undefined ? (
        <Songs info={data} index={disc} />
      ) : (
        <div className='discography__main'>
          {data.map((element, i) => {
            return <Disc data={element} index={i} key={i} />;
          })}
        </div>
      )}
    </section>
  );
}

function mapStateToProps(state) {
  return state.bandReducer;
}

export default connect(mapStateToProps)(Discography);
