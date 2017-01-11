import React from 'react';
import NavBarContainer from './nav_bar_container';

export default (props) => {
  console.log(props);
  return (
  <div>
    <NavBarContainer location={props.location} />
    { props.children }
  </div>
);
};
