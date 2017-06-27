const {VictoryLine, VictoryLabel, VictoryChart, VictoryVoronoiContainer} = Victory;
const renderTarget = document.getElementById('app');

const Cursor = ({ x, y, datum }) => (
  <g>
    <text x={x} y={y} style={{ textAnchor: 'end' }}>{datum.y.toFixed(1)}</text>
    <path d={`M${x},250 L${x},50`} style={{ strokeWidth: 1, stroke: 'deeppink' }} />
  </g>
)

ReactDOM.render(
  <VictoryChart
    containerComponent={
      <VictoryVoronoiContainer
        voronoiPadding={-5}
        dimension='x'
        labels={(d) => "y: " + d.y}
        labelComponent={<Cursor />}
      />
    }
  >
    <VictoryLabel
      text='Title'
      x='200'
      y='40'
    />
     <VictoryLine/>
  </VictoryChart>,
  renderTarget
);