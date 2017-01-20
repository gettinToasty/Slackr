import React from 'react';
import ReactEmoji from 'react-emoji';

const spicyboys = ":fire: S :ant: P :fire: I :ant: C :fire: Y :ant: B :fire: O :ant: Y :fire: S :ant:";

const parseBody = body => {

  let giphyMatch = body.match(/GIPHY_DATA (.+) _ (.+) _ (.+)/);
  let linkMatch = body.match(/^((https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?)(.*)$/);
  let spicyMatch = body.match(/^\/spicyboys$/);
  if(giphyMatch) {
    return (
      <div className='giphy'>
        <a href={giphyMatch[1]}>{giphyMatch[2]}</a><br />
        <p>Posted using /giphy [text]</p>
        <img src={giphyMatch[3]} />
      </div>
    );
  } else if(linkMatch) {
    const https = linkMatch[1].match(/^http/) ? "" : "https://";
    return (
      <div>
        <a href={`${https}${linkMatch[1]}`}>
          {ReactEmoji.emojify(linkMatch[0])}
        </a>
      </div>
    );
  } else if(spicyMatch) {
    return <p>{ReactEmoji.emojify(spicyboys)}</p>;
  } else {
    return <p>{ReactEmoji.emojify(body)}</p>;
  }
};

export default ({ message }) => {

  return (
    <div className='chat-message group'>
      <h4>{message.author}</h4>
      {parseBody(message.body)}
      <h5>Posted {message.timestamp} ago</h5>
    </div>
  );
};
