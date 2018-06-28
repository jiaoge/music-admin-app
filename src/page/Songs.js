import React, { Component } from 'react';

class PlayList extends Component {
  componentDidMount() {
    document.title = '歌曲管理';
  }

  render() {
    return <div>Songs</div>;
  }
}

export default PlayList;
