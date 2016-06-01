toDoApp.service('ToDoService', ['$http', 'ToDoFactory', function($http,ToDoFactory){
  var self = this;

  self.getAll = function(){
    var todos=[];
    _fetchTodosFromApi(todos);
    return todos;
  };


function _fetchTodosFromApi(todos){
  $http.get('http://quiet-beach-24792.herokuapp.com/todos.json')
  .then(function(response){
    _handleResponseFromAPI (response.data, todos)
    }, function(err){});
  };

function _handleResponseFromAPI (data, todos) {
  data.forEach(function(toDoData) {
    todos.push(new ToDoFactory(toDoData.text, toDoData.completed));
  });
  }
}]);
