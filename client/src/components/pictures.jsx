import { useState, useEffect } from 'react';

export default function Pictures(props) {
  //use Effect for get request to server
  // useEffect(() => {
  //   getPictures();
  // });
  if (props.pics.length > 0) {
    return (
      props.pics.map((picture, index) => (
        <div className="picture" key={`pictureId-${picture.pictureId}`}>
          <img src={picture.url} alt="reactor image" width="200" height="auto" />
        </div>
      ))
    )
  } else {
    return (
      <div id="error">
        <h3>Uh-Oh! Something went wrong.</h3>
        <h4>Try reloading the page.</h4>
      </div>
    )
  }
}