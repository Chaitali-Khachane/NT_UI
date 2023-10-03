export default function checkAccessibility() {
  if (process.env.NODE_ENV !== 'production') {
    const React = require('react'); // eslint-disable-line global-require
    const ReactDOM = require('react-dom'); // eslint-disable-line global-require
    const axe = require('@axe-core/react'); // eslint-disable-line global-require
    axe(React, ReactDOM, 1000);
  }
}
