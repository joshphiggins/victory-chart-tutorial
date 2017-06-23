import React from 'react';
import { VictoryPie, VictoryChart, VictoryAxis,
      VictoryScatter, VictoryVoronoiTooltip, VictoryLine} from 'victory';

const yellow200 = "#FFF59D";
const deepOrange600 = "#F4511E";
const lime300 = "#DCE775";
const lightGreen500 = "#8BC34A";
const teal700 = "#00796B";
const cyan900 = "#006064";
const colors = [
  deepOrange600,
  yellow200,
  lime300,
  lightGreen500,
  teal700,
  cyan900
];
const blueGrey50 = "#ECEFF1";
const blueGrey300 = "#90A4AE";
const blueGrey700 = "#455A64";
const grey900 = "#212121";

// const colors = {
//       pink: ["#CB5599", "#5E6063"],
//       teal: ["#49C6B7", "#5E6063"]
//    };
const data = [  {x: new Date(1982, 1, 1), y: 125},
                {x: new Date(1987, 1, 1), y: 257},
                {x: new Date(1993, 1, 1), y: 345},
                {x: new Date(1997, 1, 1), y: 515},
                {x: new Date(2001, 1, 1), y: 132},
                {x: new Date(2005, 1, 1), y: 305},
                {x: new Date(2011, 1, 1), y: 270},
                {x: new Date(2015, 1, 1), y: 2000}
              ];
class CheckIn extends React.Component {
  render () {
  //radial bar chart
    <div>
      <VictoryPie
        data={data}
        x="guest"
        y={(datum) => datum.value}
        style={{
         labels: {fontSize: 0}
        }}
        colorScale={colors}
        innerRadius={115}
      />
      //line chart
      <VictoryChart>
         {
            data.length > 1 ? <VictoryLine
               data={data}
               x="time"
               style={{
                  data: {stroke: colors[deepOrange600], strokeWidth:4},
               }}
               y={(datum) => datum.value}
            /> : null
         }
         <VictoryAxis
            // x
            // tickValues={xRange.length > 1 ? xRange : ["8:00 PM"]}
            tickFormat={(tick) => {
               if (data.length < 1){
                  return tick;
               }
               const time = data[tick-1].time.split(":");
               return formatTime(time);
            }}
            style={{
               axis: {stroke: colors.mediumGray},
               ticks: {stroke: colors.mediumGray},
               tickLabels: {fontSize: 12, padding: 30, stroke:"#EAEDEF"}
            }}
         />
         <VictoryAxis
            // y
            dependentAxis
            tickValues={yRange.length > 1 ? yRange : [0, 3, 6]}
            style={{
               axis: {stroke: "none"},
               grid: {stroke:colors.cyan900},
               tickLabels: {fontSize: 12, padding: 30,   stroke:colors.cyan900}
            }}
         />
         <VictoryScatter
            data={data}
            x="time"
            style={{
               data: {stroke: colors.cyan900, strokeWidth:3, fill:colors.cyan900},
               labels: {fontSize: 30},
            }}
            y={(datum) => datum.value}
         />
         <VictoryVoronoiTooltip
            data={data}
            labels={(datum) => datum.value}
            y={(datum) => datum.value}
            x="time"
            style={{
               labels: {
                  fill: "white"
               },
               flyout: {
                  fill: colors.cyan900,
                  strokeWidth: 0
               }
            }}
         />
      </VictoryChart>
    </div>
  }
}

export default CheckIn;