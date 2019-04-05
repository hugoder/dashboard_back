import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import axios from 'axios';
import './Line.css';

/*
const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];
*/
export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/g03265a4/';

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
      <div className="responsive-line">
        <ResponsiveContainer height='100%' width='100%'>
          <LineChart data={this.state.tracks} 
          margin={{
              top: 30, right: 20, bottom: 15, left: 20,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" padding={{left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="duration" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
