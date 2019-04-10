import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const skills = [
  { id: 0, name: 'React', value: 400 },
  { id: 1, name: 'React Native', value: 400 },
  { id: 2, name: 'CSS/SCSS', value: 500 },
  { id: 3, name: 'JavaScript', value: 400 },
  { id: 4, name: 'Node', value: 300 },
  { id: 5, name: 'PHP', value: 300 },
  { id: 6, name: 'HTML', value: 500 },
  { id: 7, name: 'Meteor', value: 200 },
  { id: 8, name: 'WordPress', value: 400 },
  { id: 9, name: 'Express', value: 200 },
  { id: 10, name: 'Redux', value: 200 },
  { id: 11, name: 'jQuery', value: 300 },
  { id: 12, name: 'PostgreSQL', value: 200 },
  { id: 13, name: 'MongoDB', value: 100 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // '#7728ff' purple
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
      fill="white"
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
      <PieChart width={500} height={425} className="pichart">
        <Pie
          data={skills}
          cx={200}
          cy={200}
          labelLine={true}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {skills.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}

export default withRouter(PieGraph);
