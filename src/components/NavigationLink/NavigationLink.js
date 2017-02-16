import React from 'react';
import { Link } from 'react-router';
import './NavigationLink.css';

function NavigationLink({ to, text, type }) {
  const classes = `NavigationLink NavigationLink-${type}`;
  return <Link
      to={to}
      className={classes}
      activeClassName={`NavigationLink-active NavigationLink-${type}-active`}
    >
      {text}
    </Link>;
}

export default NavigationLink;
