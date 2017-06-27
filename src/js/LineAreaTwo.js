import React from 'react';
import {
VictoryChart,
VictoryGroup,
VictoryLine,
VictoryArea,
VictoryScatter,
VictoryAxis,
VictoryZoomContainer,
} from 'victory';


class LineArea extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data : this.props.percentile,
      zoomData: this.props.percentile,
    }
    this.changeDataSet = this.changeDataSet.bind(this);
  }

  changeDataSet(data){
    console.log(data)
    // console.log(data[data.length-1]['50thperc'])
    // console.log({x: [ data[0].x, data[data.length-1].x]});
    this.setState({
     zoomData: data,
     selectedDomain: { x: [data[0]['date'], data[data.length-1]['date']]}
    })
  }
  handleDomainChange(domain){
    this.setState({
      selectedDomain: domain
    });
  }

  render()
  {

    const Cursor = ({ x, y, datum }) => (
      <g>
        <text x={x} y={y} style={{ textAnchor: 'end' }}>{datum.y.toFixed(1)}</text>
        <path d={`M${x},250 L${x},50`} style={{ strokeWidth: 1, stroke: 'deeppink' }} />
      </g>
    )
    const data = this.state.data
    const dateArray = Object.keys(data).map(key => data[key]['date'])
    return (
      <div>
        <button
          onClick={(e) => this.changeDataSet(data.slice(-4))}
        >1 yr.</button>
        <button
          onClick={(e) => this.changeDataSet(data.slice(-8))}
        >2 yrs.</button>
        <button
          onClick={(e) => this.changeDataSet(data.slice(-20))}
        >5 yrs.</button>
        <button
          onClick={(e) => this.changeDataSet(data.slice(-40))}
        >10 yrs.</button>
        <button
          onClick={(e) => this.changeDataSet(data)}
        >All</button>
        <VictoryChart
          domainPadding={{x:5, y: 20}}
          containerComponent={
            <VictoryZoomContainer
              dimension="x"
              onDomainChange={this.handleDomainChange.bind(this)}
              zoomDomain={this.state.selectedDomain}
              allowZoom={false}
            />
          }
        >
          <VictoryAxis
          //x axis
          scale="time"
          //tickValues={dateArray}
          tickFormat = {(t) => new Date(t).getFullYear() }
          style = {{
            ticks:{
              size: 2,
              stroke: "#455A64"
            }
          }}
          />
          {/*<VictoryGroup
            data={lineData}
          >
            <VictoryLine
              style={{ data: { stroke: "tomato", fill: "white", strokeWidth: 3 } }}
            />
            <VictoryScatter
              size={3}
              style={{ data: { stroke: "tomato", fill: "white", strokeWidth: 2 } }}
            />
          </VictoryGroup>*/}
          <VictoryGroup
            data={this.state.zoomData}
            x={"date"}
            y={"50thperc"}
          >
            <VictoryLine style={{ data: { stroke: "navy" } }}/>
            <VictoryScatter
              size={1}
              style={{ data: { stroke: "navy", fill: "white", strokeWidth: 2 } }}
            />
          </VictoryGroup>
          {/*<VictoryArea
             data={data}
             style={{ data: { fill: "gray", opacity: 0.4 } }}
           />
          <VictoryArea
             data={data95}
             style={{ data: { fill: "gray", opacity: 0.1 } }}
           />*/}
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
      </div>
    );
  }
}

export default LineArea;