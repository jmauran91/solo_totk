import React from 'react';

const Release = (props) => {
  return(
    <div className="release-tile">
      <a href={'/releases/' + props.id}>
        <img src={props.album_art_url} height="400" width="400"/>
      </a>
      <div className="release-label">
        <a className="release-label-text" href={'/releases/' + props.id}>{props.title}</a> - <p className="release-label-text">  {props.artist}</p>
      </div>
    </div>
  )
}

export default Release;
