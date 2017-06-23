import React from 'react';
import ReactDOM from 'react-dom';
import LineZoom from './LineZoom';
import CustomChart from './CustomChart';
import GroupBars from './GroupedBars';
// import CheckIn from './CheckIn';

class Container extends React.Component {
  render () {
    return (
      <div className='container'>
        <LineZoom />
        <CustomChart />
        <GroupBars />
      </div>
    )
  }
}

export default Container;