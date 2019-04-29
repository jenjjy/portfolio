import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { skills } from '../Data';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#866ec7'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.17;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {skills.map(skill => (skill.id === index ? skill.name : null))}
      {/* {`${(percent * 100).toFixed(0)}%`} */}
    </text>
  );
};

class PieGraph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  constructor(props) {
    super(props);
    this.state = { width: 0 };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    return (
      <div>
        {this.state.width > 600 ? (
          <PieChart width={600} height={600}>
            <Pie
              data={skills}
              cx={280}
              cy={280}
              labelLine={true}
              label={renderCustomizedLabel}
              outerRadius={200}
              fill="#fff"
              dataKey="value"
            >
              {skills.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
          </PieChart>
        ) : (
          <PieChart width={370} height={450} className="pichart">
            <Pie
              data={skills}
              cx={175}
              cy={150}
              labelLine={true}
              label={renderCustomizedLabel}
              outerRadius={125}
              fill="#8884d8"
              dataKey="value"
            >
              {skills.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
          </PieChart>
        )}
      </div>
    );
  }
}

export default PieGraph;
