angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    
    todoList.todos = [
         ];
    
    todoList.addTodo = function(){
       todoList.todos.push({text:todoList.todoText,done:false});
       todoList.todoText = '';
    }
    
    
  });