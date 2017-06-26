import React from 'react';
import {
VictoryChart,
VictoryGroup,
VictoryLine,
VictoryArea,
VictoryScatter,
VictoryAxis
} from 'victory';


class LineArea extends React.Component {

  render() {
    const data = [
      {x: 1, y: 4, _y0: 3},
      {x: 2, y: 5, _y0: 2},
      {x: 3, y: 3, _y0: 1},
      {x: 4, y: 5, _y0: 2},
      {x: 5, y: 2, _y0: 1},
      {x: 6, y: 4, _y0: 2},
      {x: 7, y: 5, _y0: 2}
    ];
    const data95 = [
      {x: 1, y: 6, _y0: 2},
      {x: 2, y: 7, _y0: 1},
      {x: 3, y: 7, _y0: 0},
      {x: 4, y: 8, _y0: 1},
      {x: 5, y: 5, _y0: 0},
      {x: 6, y: 7, _y0: 1},
      {x: 7, y: 8, _y0: 1}
    ];
    const lineData = [
      {x: 1, y: 5},
      {x: 2, y: 5},
      {x: 3, y: 6},
      {x: 4, y: 7},
      {x: 5, y: 8},
      {x: 6, y: 5},
      {x: 7, y: 3},
    ];
    return (
      <VictoryChart>
        <VictoryAxis
        //x axis
        />

        <VictoryGroup
          data={lineData}
        >
          <VictoryLine
            style={{ data: { stroke: "tomato", fill: "white", strokeWidth: 3 } }}
          />
          <VictoryScatter
            size={3}
            style={{ data: { stroke: "tomato", fill: "white", strokeWidth: 2 } }}
          />
        </VictoryGroup>
        <VictoryGroup
          data={data}
          y={(d) => (d.y + d._y0) / 2}
        >
          <VictoryLine style={{ data: { stroke: "navy" } }}/>
          <VictoryScatter
            size={3}
            style={{ data: { stroke: "navy", fill: "white", strokeWidth: 2 } }}
          />
        </VictoryGroup>
        <VictoryArea
           data={data}
           style={{ data: { fill: "gray", opacity: 0.4 } }}
         />
        <VictoryArea
           data={data95}
           style={{ data: { fill: "gray", opacity: 0.1 } }}
         />
        <VictoryAxis
        // y axis
          dependentAxis
          tickFormat={(x) => (`${x.toFixed(2)}%`)}
          style={{

            grid: {stroke:"#455A64"},
            tickLabels: {fontSize: 12, padding: 5,}
          }}
        />
       </VictoryChart>
    );
  }
}

export default LineArea;