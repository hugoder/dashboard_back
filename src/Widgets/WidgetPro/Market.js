import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer,
} from 'recharts';
import axios from 'axios';
import './Market.css';

/*
const data = [
  {
    name: 'Page A', uv: 590, pv: 800, amt: 1400, cnt: 490,
  },
  {
    name: 'Page B', uv: 868, pv: 967, amt: 1506, cnt: 590,
  },
  {
    name: 'Page C', uv: 1397, pv: 1098, amt: 989, cnt: 350,
  },
  {
    name: 'Page D', uv: 1480, pv: 1200, amt: 1228, cnt: 480,
  },
  {
    name: 'Page E', uv: 1520, pv: 1108, amt: 1100, cnt: 460,
  },
  {
    name: 'Page F', uv: 1400, pv: 680, amt: 1700, cnt: 380,
  },
];
*/

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9xopwa9v/';

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
      <div className="responsive-market">
        <ResponsiveContainer height='100%' width='100%'>
          <ComposedChart
            width={564}
            height={400}
            data={this.state.tracks}
            margin={{
              top: 30, right: 20, bottom: 10, left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="listenings" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="likes" stroke="#ff7300" />
            {/* <Scatter dataKey="cnt" fill="red" /> */}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

