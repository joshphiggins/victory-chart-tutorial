import React from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
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

  /*getTickFormat(x){
    if(this.zoomData.length) > 8{
      return `Q4-${x.getFullYear()}`
    } else{
      // get quarter
      return `Q${}-${x.getFullYear()}`
    }
  }*/

  render()
  {
    const Cursor = ({ x, y, datum }) => (
      <g>
        <text x={x} y={y} style={{ textAnchor: 'end' }}>{datum.y.toFixed(1)}</text>
        <path d={`M${x},250 L${x},50`} style={{ strokeWidth: 1, stroke: 'deeppink' }} />
      </g>
    )
    const data = this.state.data
    const mostRecentMetric = data[data.length-1]['50thperc']
    const dateArray = Object.keys(data).map(key => data[key]['date'])

    return (
      <section className="main-graph">
        <Grid>
          <Row>
            <button
              onClick={(e) => this.changeDataSet(data.slice(-4))}
            >1Y</button>
            <button
              onClick={(e) => this.changeDataSet(data.slice(-8))}
            >2Y</button>
            <button
              onClick={(e) => this.changeDataSet(data.slice(-20))}
            >5Y</button>
            <button
              onClick={(e) => this.changeDataSet(data.slice(-40))}
            >10Y</button>
            <button
              onClick={(e) => this.changeDataSet(data)}
            >All</button>
          </Row>
          <h1>{`${mostRecentMetric}%`}</h1>
          <Col xs={12} md={8}>
            <VictoryChart
              // domainPadding={{ x:5, y:20}}
              // domainPadding={{y:20}}
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
              // domainPadding={{x:5}}
              //tickValues={dateArray}
              //tickFormat = {(t) => new Date(t).getFullYear() }
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
                // domainPadding={{y:20}}
                dependentAxis
                tickFormat={(x) => (`${x.toFixed(2)}%`)}
                style={{

                  grid: {stroke:"#455A64"},
                  tickLabels: {fontSize: 12, padding: 5,}
                }}
              />
             </VictoryChart>
          </Col>
        </Grid>
      </section>
    );
  }
}

export default LineArea;