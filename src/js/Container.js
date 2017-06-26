import React from 'react';
import ReactDOM from 'react-dom';
import LineArea from './LineArea';

// import LineZoom from './LineZoom3';
// import CustomChart from './CustomChart';
// import GroupBars from './GroupedBars';
// import App from './Demo';
// import ProgressBar from './ProgressBar';
// import CheckIn from './CheckIn';

const BANKS = require('./data.js');

class Container extends React.Component {
  render () {
    return (
      <div className='container'>
        <LineArea />
      </div>
    )
  }
}

export default Container;