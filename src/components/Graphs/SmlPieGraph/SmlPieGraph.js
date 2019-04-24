import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { skills } from '../Data';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#7728ff']; // '#7728ff' purple
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
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
      className="labels"
    >
      {skills.map(skill => (skill.id === index ? skill.name : null))}
    </text>
  );
};

class SmlPieGraph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  render() {
    return (
      <PieChart width={360} height={360} className="pichart">
        <Pie
          data={skills}
          cx={170}
          cy={200}
          labelLine={true}
          label={renderCustomizedLabel}
          outerRadius={125}
          fill="#8884d8"
          dataKey="value"
        >
          {skills.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}

export default SmlPieGraph;
