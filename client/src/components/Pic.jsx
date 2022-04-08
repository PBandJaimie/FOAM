import { useState, useEffect } from 'react';

export default function Pic(props) {

    return (
      <div id="pic">
        <img
          className={props.tagged}
          src={props.url}
          alt="Reactor Image"
        />

        <div id="radio">
          <div id="radioInput">
            <input
              onChange={props.changeHandler}
              type="radio" value="foaming"
              checked={props.tagged === "foaming"}
              id={props.picId}
            />foaming
          </div>
          <div id="radioInput">
            <input
              onChange={props.changeHandler}
              type="radio" value="non-foaming"
              checked={props.tagged === "non-foaming"}
              id={props.picId}
            />non-foaming
          </div>
          <div id="radioInput">
            <input
              onChange={props.changeHandler}
              type="radio" value="unclassified"
              checked={props.tagged === "unclassified"}
              id={props.picId}
            />unclassified
          </div>
        </div>
      </div>
    )
}