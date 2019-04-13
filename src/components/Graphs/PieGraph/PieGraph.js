import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { skills } from '../Data';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // '#7728ff' purple
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

  render() {
    return (
      <PieChart width={500} height={440}>
        <Pie
          data={skills}
          cx={220}
          cy={230}
          labelLine={true}
          label={renderCustomizedLabel}
          outerRadius={160}
          fill="#fff"
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

export default withRouter(PieGraph);
