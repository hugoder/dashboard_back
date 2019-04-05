import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';
import {ResponsiveContainer} from 'recharts';
import './Dots.css'
import axios from 'axios';

/*

const data = [
  {
    name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8',
  },
  {
    name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed',
  },
  {
    name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1',
  },
  {
    name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d',
  },
  {
    name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c',
  },
  {
    name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57',
  },
  {
    name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658',
  },
];
*/
const style = {
  top: 0,
  left: 350,
  lineHeight: '24px',
};


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9km41z5z/';

  state = {
    tracks: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/track`)
      .then(res => {
        const tracks = res.data;
        console.log(res.data,"res.data");
        this.setState({ tracks });
      })
  }

  render() {
    return (
      <div className="responsive-dots">
      <ResponsiveContainer height='100%' width='100%'>
      <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} fill='#83a6ed'  barSize={10} data={this.state.tracks}>
        <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#ffffff' }} background clockWise dataKey="likes" />
      </RadialBarChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
