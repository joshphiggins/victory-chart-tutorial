import React from 'react';
import {
VictoryPie,
VictoryAnimation,
VictoryLabel
} from 'victory';

class ProgressBar extends React.Component {
  constructor() {
    super();
    this.state = {
      percent: 0, data: this.getData(0)
    };
  }

  componentDidMount() {
    let percent = 3.75;
    this.setStateInterval = window.setInterval(() => {
      // percent += (Math.random() * 25);
      // percent = (percent > 100) ? 0 : percent;
      this.setState({
        percent, data: this.getData(percent)
      });
    }, 2000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData(percent) {
    return [{x: 1, y: percent}, {x: 2, y: 3.75 - percent}];
  }

  render() {
    return (
      <div>
        <svg viewBox="0 0 400 400">
          <VictoryPie
            animate={{duration: 1000}}
            width={400} height={400}
            data={this.state.data}
            innerRadius={150}
            cornerRadius={36}
            labels={() => null}
            startAngle ={270}
            endAngle ={420}
            labelRadius={100}
            style={
              {labels: {fontSize: 20, fill: "white"},
              data: { fill: (d) => {
                const color = d.y > 1.5 ? "green" : "red";
                return d.x === 1 ? color : "transparent";
              }
             }
            }}
          />
          <VictoryAnimation duration={1000} data={this.state}>
            {(newProps) => {
              return (
                <VictoryLabel
                  textAnchor="middle" verticalAnchor="end"
                  x={80} y={200}
                  text={`Yield: ${newProps.percent.toFixed(2)}%`}
                  style={{ fontSize: 15 }}
                />
              );
            }}
          </VictoryAnimation>
        </svg>
      </div>
    );
  }
}

export default ProgressBar;