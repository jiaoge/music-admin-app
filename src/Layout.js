import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

class LayoutComponent extends Component {
  state = {
    key: '/' // 设置默认菜单的 Key
  };
  componentWillMount() {
    // 从当前的网页URL中得到path，并更新默认菜单的Key
    this.setState({ key: this.props.location.pathname });
  }
  /**
   * 执行菜单的选择事件
   */
  handlerOnSelectMenu = item => {
    // 提交页面内容刷新请求
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
            onSelect={this.handlerOnSelectMenu}
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
            ©2018 Created by B.Match
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
// 使用 router的包装器，用来支持页面局部刷新
export default withRouter(LayoutComponent);
