import React from 'react';
import ReactEmoji from 'react-emoji';

const spicyboys = ":fire: S :ant: P :fire: I :ant: C :fire: Y :ant: B :fire: O :ant: Y :fire: S :ant:";
const minaboys = "(◕‿◕✿) M I N A B O Y S (◠‿◠)✌";

const parseBody = body => {

  const giphyMatch = body.match(/GIPHY_DATA (.+) _ (.+) _ (.+)/);
  const linkMatch = body.match(/^((https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?)(.*)$/);
  const spicyMatch = body.match(/^\/spicyboys$/);
  const minaMatch = body.match(/^\/minaboys$/);
  const kanyeMatch = body.match(/^(.*):kanye:(.*)$/);
  const saltMatch = body.match(/^(.*):salt:(.*)$/);
  const kappaMatch = body.match(/^(.*):kappa:(.*)$/);
  const pogMatch = body.match(/^(.*):pogchamp:(.*)$/);

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
  } else if(kanyeMatch) {
    return (
      <div>
        <span>{kanyeMatch[1]}</span>
        <div className="icon icon-kanye"></div>
        <span>{kanyeMatch[2]}</span>
      </div>
    );
  } else if(saltMatch) {
    return (
      <div>
        <span>{saltMatch[1]}</span>
        <div className="icon icon-salt"></div>
        <span>{saltMatch[2]}</span>
      </div>
    );
  } else if(kappaMatch) {
    return (
      <div>
        <span>{kappaMatch[1]}</span>
        <div className="icon icon-kappa"></div>
        <span>{kappaMatch[2]}</span>
      </div>
    );
  } else if(pogMatch) {
    return (
      <div>
        <span>{pogMatch[1]}</span>
        <div className="icon icon-pogchamp"></div>
        <span>{pogMatch[2]}</span>
      </div>
    );
  } else if(spicyMatch) {
    return <p>{ReactEmoji.emojify(spicyboys)}</p>;
  } else if(minaMatch) {
    return <p>{ReactEmoji.emojify(minaboys)}</p>;
  } else {
    return <p>{ReactEmoji.emojify(body)}</p>;
  }
};

export default parseBody;
