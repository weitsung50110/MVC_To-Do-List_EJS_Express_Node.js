const express = require('express');
const app = express();
const port = 5001;
const path = require('path');

// 引入 controller
const todoController = require('./controllers/todo')

app.use(express.static(path.join(__dirname, '/views/static'))) //設定絕對路徑
//app.use(express.static('views'))  //標準 在這個目錄之下的所有目錄都包含
// 導入Static檔案，Static檔案包括如：css檔、js檔、img檔。所在預設資料夾名稱為：public。然後在ejs檔中加入css連結。

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))  //設定檔案所在的目錄

// 可直接使用 controller 的方法拿取資料和進行 render 
app.get('/todos', todoController.getAll)

app.get('/todos/:id',todoController.get)

app.get('/',todoController.index)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/*
const express = require('express');
const app = express();
const port = 5001;

// 引入 controller
const todoController = require('./controllers/todo')

// 設定 view engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/hello', (req, res) => {
// 叫 express 去 render views 底下叫做 hello 的檔案，副檔名可省略
  res.render('hello')
})

// 建立 todos data
const todos = [
  'first todo', 'second todo', 'third todo'
]

app.get('/todos', (req, res) => {
  // 第二個參數可傳入資料
  res.render('todos', {
    todos: todos     // todos: todos 一樣的話可省略寫法
  })
})

// 加上 :id 代表不確定的參數
app.get('/todos/:qq', (req, res) => {
  // params: 可拿到網址列上指定的參數
  const id = req.params.qq
  console.log("id : "+id)

  const todo = todos[id]
  res.render('todo', {
    todo
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

*/