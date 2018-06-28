import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Loadable from 'react-loadable';

// 自定义 loading
const Loading = () => <div>Loading...</div>;

// 布局包装器
const Wraper = Page => {
  return () => {
    return <Layout body={<Page />} />;
  };
};

//歌单管理页
const PlayList = Loadable({
  loader: () => import('./page/PlayList'),
  loading: Loading
});

// 歌曲管理页
const Songs = Loadable({
  loader: () => import('./page/Songs'),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Wraper(PlayList)} />
          <Route path="/songs" component={Wraper(Songs)} />
        </Switch>
      </Router>
    );
  }
}

export default App;
