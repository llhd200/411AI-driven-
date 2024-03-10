const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// 使用body-parser中间件解析POST请求的JSON数据
app.use(bodyParser.json());

// 处理任务协助请求
app.post('/tasks', (req, res) => {
  const { task } = req.body;

  // 在实际应用中，根据任务内容执行相应的操作
  // 这里只是一个简单的示例
  const response = `Task received: ${task}`;
  res.json({ response });
});

// 处理日程安排请求
app.post('/schedule', (req, res) => {
  const { event, date, time } = req.body;

  // 在实际应用中，将事件安排到用户的日程中
  // 这里只是一个简单的示例
  const response = `Event scheduled: ${event} on ${date} at ${time}`;
  res.json({ response });
});

// 处理信息检索请求
app.post('/information', (req, res) => {
  const { query } = req.body;

  // 在实际应用中，使用搜索引擎或API获取相关信息
  // 这里只是一个简单的示例
  const response = `Information retrieved for: ${query}`;
  res.json({ response });
});

// 启动Express应用程序
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
