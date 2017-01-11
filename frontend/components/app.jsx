import React from 'react';
import NavBarContainer from './nav_bar_container';

export default (props) => (
  <div>
    <NavBarContainer location={props.location} />
    { props.children }
  </div>
);
