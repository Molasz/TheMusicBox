import React from 'react';
import './photos.scss';

const photosData = [
  'https://scontent.fbcn9-1.fna.fbcdn.net/v/t1.0-9/118479849_3157672724287873_1182417188804335487_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_ohc=H6Sd9bRAfi8AX8gRaXH&_nc_ht=scontent.fbcn9-1.fna&oh=b316c2efa080dd1bc2c30a3485010086&oe=5F72A0AA',
  'https://scontent.fbcn9-1.fna.fbcdn.net/v/t1.0-9/116879846_3095423203846159_6004192188368565645_o.jpg?_nc_cat=111&_nc_sid=2d5d41&_nc_ohc=aWrenvDstNwAX8mkO-a&_nc_ht=scontent.fbcn9-1.fna&oh=3060c0b7f299d6d54eab1018d1307cff&oe=5F7379A6',
  'https://scontent.fbcn9-1.fna.fbcdn.net/v/t1.0-9/101155307_2922381664483648_2832392947297681408_o.jpg?_nc_cat=107&_nc_sid=8024bb&_nc_ohc=r5O1ITHwLKkAX-YHpdX&_nc_ht=scontent.fbcn9-1.fna&oh=24d3f7eea0becb94d1a67c0b3eaf55bb&oe=5F727C37',
  'https://scontent.fbcn9-1.fna.fbcdn.net/v/t1.0-9/99131856_2898564016865413_7139613746338463744_o.jpg?_nc_cat=107&_nc_sid=110474&_nc_ohc=TLjfMbic1_MAX8LaVpV&_nc_ht=scontent.fbcn9-1.fna&oh=b7429984cfeff400e5c953f75b0e3e87&oe=5F71F7B5'
];

function photos() {
  return (
    <section className='photo'>
      <h1 className='photo__title'>Photos and videos</h1>
      <div className='photo__main'>
        {photosData.map((element, i) => {
          return (
            <img src={element} alt={('Image', i)} className='main__item' />
          );
        })}
      </div>
    </section>
  );
}

export default photos;
