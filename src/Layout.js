import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

class LayoutComponent extends Component {
  state = { key: '/' };
  componentWillMount() {
    this.setState({ key: this.props.location.pathname });
  }

  handlerOnSelect = item => {
    this.props.history.push(item.key);
  };

  render() {
    return (
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            onSelect={this.handlerOnSelect}
            defaultSelectedKeys={[this.state.key]}
          >
            <Menu.Item key="/">
              <Icon type="user" />
              <span className="nav-text">歌单管理</span>
            </Menu.Item>
            <Menu.Item key="/playlists">
              <Icon type="user" />
              <span className="nav-text">歌单列表</span>
            </Menu.Item>
            <Menu.Item key="/songs">
              <Icon type="video-camera" />
              <span className="nav-text">歌曲管理</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div
              style={{ padding: 24, background: '#fff', textAlign: 'center' }}
            >
              {this.props.body}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©2018 Created by B.Match
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(LayoutComponent);
