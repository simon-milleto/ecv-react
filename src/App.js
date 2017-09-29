import React, { Component } from 'react';
import logo from './logo.svg';
import PostFeed from './components/PostFeed';
import Button from './components/Button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: '',
      local: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ local: JSON.parse(localStorage.getItem("savedData"))});
    }, 500);
  }

  render() {
    const { local } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Fake Facebook</h2>
        </div>
        <div>
          <form onSubmit={this.handleSubmit} className="form" id="createPoll">
            <textarea placeholder="How are you today ?" onChange={this.handleChange}>
            </textarea>
            <Button
              type='submit'
              label='Create post'/>
          </form>
        </div>
        <PostFeed list={local} handleDelete={(id) => this.handleDelete(id)}/>
      </div>
    );
  }

  handleSubmit = (e) => {
    const { post, local } = this.state;
    e.preventDefault();
    if(post) {
      const postObj = {
          id: local.length + 1,
          text: post,
      };
      let joined = local.concat(postObj);
      this.setState({ local: joined, post: ''})
      localStorage.setItem("savedData", JSON.stringify(joined));
      e.target.reset();
    }
  };

  handleChange = (post) => {
    this.setState({ post: post.target.value })
  };

  handleDelete = (id) => {
    const { local } = this.state;
    let dataRemoved = local.filter((post) => {
      return post.id !== id;
    });
    localStorage.setItem("savedData", JSON.stringify(dataRemoved));
    this.setState({ local: dataRemoved})
  }
}

export default App;
