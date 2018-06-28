import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

class LayoutComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '/'
    };
  }
  componentWillMount() {
    this.setState({ key: this.props.location.pathname });
  }

  handlerMenu = item => {
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
          <div
            style={{
              height: '32px',
              color: 'white',
              fontSize: '16px',
              marginTop: '8px',
              paddingLeft: '8px'
            }}
          >
            歌曲上架系统
          </div>
          <Menu
            theme="dark"
            mode="inline"
            onSelect={this.handlerMenu}
            defaultSelectedKeys={[this.state.key]}
          >
            <Menu.Item key="/">
              <Icon type="home" />
              <span className="nav-text">歌单管理</span>
            </Menu.Item>
            <Menu.Item key="/songs">
              <Icon type="video-camera" />
              <span className="nav-text">歌曲管理</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout
          style={{
            marginLeft: 200
          }}
        >
          <Header
            style={{
              background: '#fff',
              padding: 0
            }}
          />
          <Content
            style={{
              margin: '24px 16px 0',
              overflow: 'initial'
            }}
          >
            <div
              style={{
                padding: 24,
                background: '#fff',
                textAlign: 'center'
              }}
            >
              {this.props.body}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center'
            }}
          >
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(LayoutComponent);
