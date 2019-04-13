import React from 'react';
import { AreaSeries, HorizontalBarSeries, XAxis, XYPlot, YAxis } from 'index';

import { filterFeatures, getPPP } from './responsive-vis-utils';

// range constants
const VERY_LOW_RANGE = [0, 0.08];
const LOW_RANGE = [0, 0.7];
const HIGH_RANGE = [0.7, Infinity];

export const BARCHART_FEATURES = [
  { min: -Infinity, max: Infinity, name: 'xaxis', group: 0 },
  { min: VERY_LOW_RANGE[0], max: VERY_LOW_RANGE[1], name: 'yaxis', group: 1 },
  { min: LOW_RANGE[0], max: LOW_RANGE[1], name: 'bars', group: 2 },
  { min: HIGH_RANGE[0], max: HIGH_RANGE[1], name: 'area', group: 2 }
];

function updateDataForArea(data, ppp) {
  // Use the PPP ratio as the step to sample the data
  const step = Math.round(ppp);
  const sample = [];
  let index = data.length - 1;
  while (index >= 0) {
    const dataPoint = data[index];
    sample.unshift({ ...dataPoint, y: sample.length - 1 });
    index -= step;
  }
  return sample;
}

export default class BarGraph extends React.Component {
  // todo build a root responsive class that has this as a class method
  getFeatures() {
    const { data, height, margin, width } = this.props;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const ppp = getPPP(innerWidth, innerHeight, data, 'HEIGHT');
    return filterFeatures(BARCHART_FEATURES, ppp);
  }

  render() {
    const { data, height, margin, width } = this.props;

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const ppp = getPPP(innerWidth, innerHeight, data, 'HEIGHT');
    const featuresToRender = filterFeatures(BARCHART_FEATURES, ppp);
    const updatedData = featuresToRender.area
      ? updateDataForArea(data, ppp)
      : data;

    return (
      <div className="responsive-bar-chart">
        <XYPlot
          yType="ordinal"
          xType="linear"
          margin={margin}
          height={height}
          width={width}
        >
          {featuresToRender.xaxis && <XAxis orientation="top" />}
          {featuresToRender.yaxis && <YAxis />}
          {featuresToRender.bars && (
            <HorizontalBarSeries
              colorType="literal"
              yRange={[0, innerHeight]}
              xRange={[0, innerWidth]}
              data={updatedData}
            />
          )}
          {featuresToRender.area && (
            <AreaSeries
              colorType="literal"
              color="#12939A"
              yType="linear"
              yDomain={[0, updatedData.length]}
              yRange={[0, innerHeight]}
              xRange={[innerWidth, 0]}
              data={updatedData}
            />
          )}
        </XYPlot>
      </div>
    );
  }
}

// import React from 'react';
// import {
//   XYPlot,
//   XAxis,
//   YAxis,
//   VerticalGridLines,
//   HorizontalGridLines
// } from 'index';

// export default class BarGraph extends React.Component {
//   render() {
//     return (
//       <div>
//         <XYPlot width={300} height={300} stackBy="x">
//           <VerticalGridLines />
//           <HorizontalGridLines />
//           <XAxis />
//           <YAxis />
//           <BarSeries
//             data={[{ y: 2, x: 10 }, { y: 4, x: 5 }, { y: 5, x: 15 }]}
//           />
//           <BarSeries
//             data={[{ y: 2, x: 12 }, { y: 4, x: 2 }, { y: 5, x: 11 }]}
//           />
//         </XYPlot>
//       </div>
//     );
//   }
// }
