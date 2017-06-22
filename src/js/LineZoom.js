import React from 'react';
import { VictoryChart, VictoryAxis,  VictoryBrushContainer,
   VictoryLine, VictoryZoomContainer, VictoryTheme, Line } from 'victory';
import CustomTheme from './CustomTheme';
import { assign } from "lodash";

const data = [  {x: new Date(1982, 1, 1), y: 125},
                {x: new Date(1987, 1, 1), y: 257},
                {x: new Date(1993, 1, 1), y: 345},
                {x: new Date(1997, 1, 1), y: 515},
                {x: new Date(2001, 1, 1), y: 132},
                {x: new Date(2005, 1, 1), y: 305},
                {x: new Date(2011, 1, 1), y: 270},
                {x: new Date(2015, 1, 1), y: 2000}
              ];

class LineZoom extends React.Component {
  // Convert to Highchart-like stock chart would need
  // 1- Zoom button functionality
  // 2- Grid to give better persective
  // 3 - Tooltips funct
  // 4 - date select options
  // 5 - scroll bar vert
  // 5 - take data from props
  // 6 - excel output
  // 7 - img output
  // 8 - animate on load
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  handleZoom(domain) {
    this.setState({selectedDomain: domain});
  }

  handleBrush(domain) {
    this.setState({zoomDomain: domain});
  }


  render() {
    const styles = this.getStyles();
    const chartStyle = { parent: {minWidth: "100%", marginLeft: "10%"}};
    return (
      <div>
          <VictoryChart width={1000} height={400} scale={{x: "time"}} style={chartStyle}
            theme={CustomTheme}
            containerComponent={
              <VictoryZoomContainer responsive={false}
                dimension="x"
                zoomDomain={this.state.zoomDomain}
                onDomainChange={this.handleZoom.bind(this)}
              />
            }
          >
            <VictoryAxis
              styles={styles.axisX}
            />
            <VictoryAxis dependentAxis
              styles={styles.axisY}
            />


            <VictoryLine
              style={{
                data: {stroke: "tomato"}
              }}
              data={this.state.data}
            />

          </VictoryChart>

          <VictoryChart
            padding={{top: 0, left: 50, right: 50, bottom: 30}}
            width={1000} height={100} scale={{x: "time"}} style={chartStyle}
            containerComponent={
              <VictoryBrushContainer responsive={false}
                dimension="x"
                selectedDomain={this.state.selectedDomain}
                onDomainChange={this.handleBrush.bind(this)}
              />
            }
          >
            <VictoryAxis
              tickValues={[
                new Date(1985, 1, 1),
                new Date(1990, 1, 1),
                new Date(1995, 1, 1),
                new Date(2000, 1, 1),
                new Date(2005, 1, 1),
                new Date(2010, 1, 1)
              ]}
              tickFormat={(x) => new Date(x).getFullYear()}
            />
            <VictoryLine
              style={{
                data: {stroke: "tomato"}
              }}
              data={this.state.data}
            />
          </VictoryChart>

      </div>
    );
  }
  getStyles() {
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
    // Typography
    const sansSerif = "'Roboto', 'Helvetica Neue', Helvetica, sans-serif";
    const letterSpacing = "normal";
    const fontSize = 12;

    // Layout
    const padding = 8;
    const baseProps = {
      width: 350,
      height: 350,
      padding: 50
    };

    const baseLabelStyles = {
      fontFamily: sansSerif,
      fontSize,
      letterSpacing,
      padding,
      fill: blueGrey700
    };
    const strokeDasharray = "10,";
    const strokeLinecap = "round";
    const strokeLinejoin = "round";
    const centeredLabelStyles = assign({ textAnchor: "middle" }, baseLabelStyles);
    return {
      axisX: {
        grid: {
          stroke: (tick) =>
            tick === -10 ? "transparent" : "tomato",
          strokeWidth: 20
        },
        axis: { stroke: "", strokeWidth: 0 },
        ticks: { strokeWidth: 0 },
        tickLabels: {
          fill: "#90A4AE",
          fontFamily: "inherit",
          fontSize: 16
        }
      },
      axisY: {
            grid: {
              stroke: (tick) =>
                tick === -10 ? "transparent" : "#90A4AE",
              strokeWidth: 2
            },
            axis: { stroke: "", strokeWidth: 0 },
            ticks: { strokeWidth: 0 },
            tickLabels: {
              fill: "#90A4AE",
              fontFamily: "inherit",
              fontSize: 16
            }
          }
    };
  }
}




export default LineZoom;