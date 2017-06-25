import React from 'react';
import ReactDOM from 'react-dom';
import LineZoom from './LineZoom3';
import CustomChart from './CustomChart';
import GroupBars from './GroupedBars';
import App from './Demo';
// import LineToolTips from './LineZoom2';
import ProgressBar from './ProgressBar';
// import CheckIn from './CheckIn';

const BANKS = require('./data.js');

class Container extends React.Component {
  render () {
    return (
      <div className='container'>
        <LineZoom chartData={BANKS.bk}/>
      </div>
    )
  }
}

export default Container;