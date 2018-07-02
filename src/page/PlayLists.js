import React, { Component } from 'react';
import { Table } from 'antd';

import MusciSelect from '../component/MusicSelect';
import Remote from '../Remote';

class PlayLists extends Component {
  state = {
    data: [],
    selectMusic: false,
    selectMusicKeys: []
  };
  componentDidMount() {
    this.fetch();
  }
  fetch() {
    Remote(
      '/api/playlist/query',
      {
        method: 'GET'
      },
      data => {
        this.setState({
          data: data
        });
      }
    );
  }
  openSelectMusic = record => {
    this.setState({
      selectMusic: true,
      playListId: record.id,
      selectMusicKeys: record.musicKeys
    });
  };
  closeSelectMusic = () => {
    this.setState({
      selectMusic: false,
      playListId: null,
      selectMusicKeys: []
    });
  };

  handlerSelectMusic = keys => {
    this.closeSelectMusic();
    Remote(
      '/api/playlist/query',
      {
        body: JSON.stringify({
          id: this.state.playListId,
          keys
        }),
        method: 'POST'
      },
      data => {
        this.fetch();
      }
    );
  };

  render() {
    const columns = [
      {
        title: '歌单名称',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '歌单封面',
        dataIndex: 'cover',
        key: 'cover'
      },
      {
        title: '歌单描述',
        dataIndex: 'desc',
        key: 'desc'
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => {
          return (
            <span>
              <a
                href="javascript:;"
                onClick={() => {
                  this.openSelectMusic(record);
                }}
              >
                选择歌曲
              </a>
            </span>
          );
        }
      }
    ];

    return (
      <div>
        <Table
          columns={columns}
          dataSource={this.state.data}
          pagination={false}
          rowKey={record => record.id}
        />
        <MusciSelect
          visible={this.state.selectMusic}
          selectedKeys={this.state.selectMusicKeys}
          handlerSelectMusic={this.handlerSelectMusic}
          closeSelectMusic={this.closeSelectMusic}
        />
      </div>
    );
  }
}

export default PlayLists;
