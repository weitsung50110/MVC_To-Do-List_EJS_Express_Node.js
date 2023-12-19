// 先從 model 引入 todos 資料
const todoModel = require('../models/todo')

// 建立一個 todoController 物件，透過方法來存取 model 的資料
const todoController = {
  // 傳入參數 req, res
  getAll: (req, res) => {
    const todos = todoModel.getAll()
    res.render('todos', {  //叫 express 去 render views 底下
        todos
    })
  },

  get: (req, res) => {
    const id = req.params.id
    const todo = todoModel.get(id)
    console.log('id : '+id)
    res.render('todo', {
        id,
        todo
    })
  },

  index: (req, res) => {
    const index2 = todoModel.index()
    res.render('index', {
        index2
    })
  }
}

module.exports = todoController