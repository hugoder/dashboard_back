import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeBirth = this.onChangeBirth.bind(this);
    this.onChangeFollowers = this.onChangeFollowers.bind(this);
    this.onChangeAlbum = this.onChangeAlbum.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      Birth: '',
      followers:'',
      Album:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                name: response.data.name, 
                Birth: response.data.Birth,
                followers: response.data.followers,
                Album: response.data.Album });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeBirth(e) {
    this.setState({
      Birth: e.target.value
    })  
  }
  onChangeFollowers(e) {
    this.setState({
      followers: e.target.value
    })
  }
  onChangeAlbum(e) {
    this.setState({
      Album: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      Birth: this.state.Birth,
      followers: this.state.followers,
      Album:this.state.Album
    };
    axios.post('http://localhost:4000/artist/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
    window.location.reload();
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Artist</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Artist Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>Birth: </label>
                    <input type="date" 
                      className="form-control"
                      value={this.state.Birth}
                      onChange={this.onChangeBirth}
                      />
                </div>
                <div className="form-group">
                    <label>Followers: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.followers}
                      onChange={this.onChangeFollowers}
                      />
                </div>
                <div className="form-group">
                    <label>Albums: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Album}
                      onChange={this.onChangeAlbum}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Artist" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}