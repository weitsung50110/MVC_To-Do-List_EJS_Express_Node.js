const todos = [
    'first todo', 'second todo', 'third todo'
  ]
  
  // 建立一個 todoModel 物件，裡面放存取資料的方法（function）
  const todoModel = {
    getAll: () => {
      return todos
    },
  
    get: id => {
      if (todos[id]){
        return todos[id]
      }
      else{
        return "Null唷~"
      }
      
    },

    index: () => {
        return ["Index loveaa","qqq"]
    }
  }
  
  module.exports = todoModel