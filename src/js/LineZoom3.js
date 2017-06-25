import React from 'react';
import {
  VictoryZoomContainer,
  VictoryLine,
  VictoryChart,
  VictoryBrushContainer,
  VictoryAxis,
} from 'victory';
//import BANKS from './data.js';


const yellow200 = "#FFF59D";
const deepOrange600 = "#F4511E";
const lime300 = "#DCE775";
const lightGreen500 = "#8BC34A";
const teal700 = "#00796B";
const cyan900 = "#006064";
const blueGrey50 = "#ECEFF1";
const blueGrey300 = "#90A4AE";
const blueGrey700 = "#455A64";
const grey900 = "#212121";
const colors = [
  deepOrange600,
  yellow200,
  lime300,
  lightGreen500,
  teal700,
  cyan900,
  blueGrey50,
  blueGrey300,
  blueGrey700,
  grey900
];
const BANKS = require('./data.js');

class LineZoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: this.props.chartData.series.data,
      title: this.props.chartData.series.name
    };
  }

  handleZoom(domain) {
    this.setState({selectedDomain: domain});
  }

  handleBrush(domain) {
    this.setState({zoomDomain: domain});
  }

  render() {
    return (
      <div>
        <VictoryChart width={600} height={400} scale={{x: "time"}}
          containerComponent={
            <VictoryZoomContainer
              dimension="x"
              zoomDomain={this.state.zoomDomain}
              onDomainChange={this.handleZoom.bind(this)}
            />
          }
        >
            <VictoryAxis
            //x axis
            />
            <VictoryAxis
            // y axis
              dependentAxis
              tickFormat={(x) => (`${x.toFixed(2)}%`)}
              style={{
                ticks: {stroke: "#90A4AE"},
                grid: {stroke:"#90A4AE"},
                tickLabels: {fontSize: 12, padding: 5,}
              }}
            />
            <VictoryLine
              style={{
                data: {stroke: "tomato"}
              }}

              data={this.state.series}
              x="date"
              y="roa"
            />

          </VictoryChart>
          <VictoryChart
            padding={{top: 0, left: 50, right: 50, bottom: 30}}
            width={600} height={100} scale={{x: "time"}}
            containerComponent={
              <VictoryBrushContainer
                dimension="x"
                selectedDomain={this.state.selectedDomain}
                onDomainChange={this.handleBrush.bind(this)}
              />
            }
          >
            <VictoryAxis
              tickFormat={(x) => new Date(x).getFullYear()}
            />
            <VictoryLine
              style={{
                data: {stroke: "tomato"}
              }}
              data={this.state.series}
              x="date"
              y="roa"
            />
          </VictoryChart>
      </div>
    );
  }
}

export default LineZoom;