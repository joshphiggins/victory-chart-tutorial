import React from 'react';
import ReactDOM from 'react-dom';
import LineArea from './LineAreaTwo';


// import LineZoom from './LineZoom3';
// import CustomChart from './CustomChart';
// import GroupBars from './GroupedBars';
// import App from './Demo';
// import ProgressBar from './ProgressBar';
// import CheckIn from './CheckIn';

const BANKS = require('./data.js');
const perc = require('../data/percentile.js');


 // cleanperc(percObj) {
  // Object.keys(percObj).map((key, index) => {
    // if(key==='a') {
      // console.log(percObj[key]);
    // }, return perc;
    // })
// }

perc.p.map((obj) => {
  obj['date'] = new Date(obj['date'] * 1000);
  // obj['date'] = obj['date'] * 1000;
  return obj
});


class Container extends React.Component {

  render () {
    return (
      <div className='container'>
        <LineArea percentile={perc.p}/>
      </div>
    )
  }
}

export default Container;