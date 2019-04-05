import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import axios from 'axios';
import './Column.css';

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
=======
>>>>>>> 4c7dd07448ff6e473c5c4a1f855b3d04657384a4

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

<<<<<<< HEAD
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
>>>>>>> 4c7dd07448ff6e473c5c4a1f855b3d04657384a4
  render() {
    return (
      <div className="responsive-column">
        <ResponsiveContainer height='100%' width='100%'>
          <BarChart
<<<<<<< HEAD
            data={this.state.artists}
=======
            data={data}
>>>>>>> 4c7dd07448ff6e473c5c4a1f855b3d04657384a4
            margin={{
              top: 40, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
<<<<<<< HEAD
            <Bar dataKey="followers" stackId="a" fill="#8884d8" />
=======
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
>>>>>>> 4c7dd07448ff6e473c5c4a1f855b3d04657384a4
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}