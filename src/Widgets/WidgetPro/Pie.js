import React, { PureComponent } from 'react';
import {
  PieChart, Pie, ResponsiveContainer,
} from 'recharts';
import axios from 'axios';
import './Pie.css';

/*
const data01 = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];
*/
export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/w6wsrc52/';

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
      <div className="responsive-pie">
        <ResponsiveContainer height='100%' width='100%'>
          <PieChart>
            <Pie data={this.state.tracks} dataKey="likes" cx="50%" cy="50%" outerRadius="35%" fill="#8884d8" />
            <Pie data={this.state.tracks} dataKey="listenings" cx="50%" cy="50%" innerRadius="45%" outerRadius="50%" fill="#82ca9d" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
