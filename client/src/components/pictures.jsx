import { useState, useEffect } from 'react';
import Pic from './Pic.jsx';

export default function Pictures(props) {
  if (props.pics.length > 0) {
    return (
      <div id="pictures">
        {props.pics.map((picture, index) => (
          <div className="picture" key={`pictureId-${picture.pictureId}`}>
            <Pic
              url={picture.url}
              picId={picture.pictureId}
              tagged={picture.tagged}
              clickHandler={props.clickHandler}
              changeHandler={props.changeHandler}
            />
            <br></br>
          </div>
        ))}
      </div>
    )
  } else {
    return (
      <div id="error">
        <h3>No pictures here!</h3>
        <h4>Try selecting a different viewing option.</h4>
      </div>
    )
  }
}

// 'logger: ', event.target.classList.add('tagged')