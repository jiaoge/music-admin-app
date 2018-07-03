const express = require('express');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');
var multer = require('multer');
var upload = multer({ dest: 'public/uploads/' });

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

// 缓存歌单数据
const playlistDatas = [
  {
    id: 1,
    name: '测试歌单1',
    cover: 'http://xx.com/xx.jpg',
    desc: '测试歌单描述',
    musicKeys: [479408220]
  }
];

const musicDatas = [
  {
    id: 35847388,
    title: 'Hello',
    url: 'http://music.163.com/song/media/outer/url?id=35847388.mp3'
  },
  {
    id: 421423756,
    title: 'Nervous',
    url: 'http://music.163.com/song/media/outer/url?id=421423756.mp3'
  },
  {
    id: 479408220,
    title: '凉凉',
    url: 'http://music.163.com/song/media/outer/url?id=479408220.mp3'
  }
];
/**
 * 处理歌单添加
 */
app.post('/api/playlist/add', function(req, res) {
  req.body.id = uuidv4();
  playlistDatas.push(req.body);

  console.log('add playlist:', req.body);
  res.json(req.body);
});

/**
 * 处理歌单添加
 */
app.post('/api/playlist/update', function(req, res) {
  const id = req.body.id;

  playlistDatas.map(item => {
    if (item.id === id) {
      item.musicKeys = req.body.keys;
    }
  });
  res.json({ success: 'success' });
});

/**
 * 处理歌单列表数据
 */
app.get('/api/playlist/query', function(req, res) {
  res.json(playlistDatas);
});

/**
 * 处理歌单列表数据
 */
app.get('/api/music/query', function(req, res) {
  if (req.query.ids) {
    const ids = JSON.parse(req.query.ids);
    const result = [];
    ids.map(id => {
      musicDatas.map(mid => {
        if (id === mid.id) {
          result.push(mid);
        }
      });
    });
    res.json(result);
    return;
  }

  res.json(musicDatas);
});

app.post('/upload', upload.single('music'), function(req, res) {
  res.json(req.file);
});

app.post('/api/music/add', function(req, res) {
  req.body.id = uuidv4();
  req.body.url = 'uploads/' + req.body.url;
  musicDatas.push(req.body);

  res.json(req.body);
});

app.listen(4000, function() {
  console.log('Example app listening on port 4000!');
});
