import React, { Component } from 'react';
import Post from './Post';

class PostFeed extends Component {
  render() {
    return (
      <div className="PostFeed">
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }

  renderPosts = () => {
    const { list } = this.props;
    if (list.length === 0) {
      return (<li>There is no post. Add one to start</li>);
    } else {
      return list.map((post) => {
        return (<Post text={post.text} key={post.id} onClick={() => this.props.handleDelete(post.id)}/>);
      });
    }
  };
}

export default PostFeed;
