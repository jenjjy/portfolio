import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import skills from '../Data';

const data = [
  {
    name: 'Page A',
    uv: 590,
    value: 500,
    amt: 1400
  },
  {
    name: 'Page B',
    uv: 868,
    value: 400,
    amt: 1506
  },
  {
    name: 'Page C',
    uv: 1397,
    value: 400,
    amt: 989
  },
  {
    name: ' D',
    uv: 1480,
    value: 500,
    amt: 1228
  },
  {
    name: 'Page E',
    uv: 1520,
    value: 400,
    amt: 1100
  },
  {
    name: 'Page F',
    uv: 1400,
    value: 300,
    amt: 1700
  }
];
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // '#7728ff' purple

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/shjsn5su/';

  render() {
    return (
      <ComposedChart
        layout="vertical"
        width={400}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20
          // left: 20
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
        {data.map((entry, index) => {
          return (
            <Bar
              key={index}
              dataKey="value"
              barSize={12}
              fill={colors[index % colors.length]}
            />
          );
        })}
        {/* <Line dataKey="uv" stroke="#ff7300" /> */}
      </ComposedChart>
    );
  }
}
