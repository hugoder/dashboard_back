import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import axios from 'axios';
import './Graph.css';

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

<<<<<<< HEAD
*/
export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';

  state = {
    artists: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/artist`)
      .then(res => {
        const artists = res.data;
        console.log(res.data,"res.data");
        this.setState({ artists });
      })
  }

=======
export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';

>>>>>>> 4c7dd07448ff6e473c5c4a1f855b3d04657384a4
  render() {
    return (
      <div className="responsive-graph">
        <ResponsiveContainer height='100%' width='100%'>
          <AreaChart
<<<<<<< HEAD
            data={this.state.artists}
=======
            data={data}
>>>>>>> 4c7dd07448ff6e473c5c4a1f855b3d04657384a4
            margin={{
              top: 30, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
<<<<<<< HEAD
            <Area type="monotone" dataKey="followers" stackId="a" stroke="#8884d8" fill="#8884d8" />
=======
            <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
>>>>>>> 4c7dd07448ff6e473c5c4a1f855b3d04657384a4
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
