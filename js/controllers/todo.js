

define(["app","todoStorage/todoStorage"],function(app){

		return app.controller('TodoController',["$scope","$location","todoStorage","filterFilter",
			function TodoController($scope,$location,todoStorage,filterFilter){
					var todos = $scope.todos = todoStorage.get();

					$scope.newTodo = "";

					$scope.title = "TODOMVC";


					$scope.$watch("todos",function(){
						todoStorage.put(todos);
						$scope.itemLength = todos.length;
					},true);

					$scope.location = $location;

					$scope.$watch("location.path()",function(path){

						$scope.statusFilter = (path === '/active') ?
                                        { completed: false } : (path === '/completed') ?
                                        { completed: true } : null;
					})

					$scope.addNewTodo = function(){

						var tmpToDo =  $scope.newTodo.trim();
						if(!tmpToDo.length){
							return;
						}
						todos.push({
							title : tmpToDo ,
							completed : true  

						});

						console.log($scope.newTodo);

						$scope.newTodo = "";


					};
					$scope.removeTodo = function (todo) {
                        todos.splice(todos.indexOf(todo), 1);
                    };
					
                  
                    $scope.markAll = function (done) {
                            todos.forEach(function (todo) {
                                    todo.completed = done;
                            });
                    };
                    $scope.itemcheck = function (itemChecked,todo) {
                           var tmpIndexOf = todos.indexOf(todo);
                     	   todo['completed'] = itemChecked
                     	   todos.splice(tmpIndexOf,1,todo);
                    };
                    $scope.inputChange = function(todo,title){
                    	   var tmpIndexOf = todos.indexOf(todo);
                 	   	   todo['title'] = title
                 	  	   todos.splice(tmpIndexOf,1,todo);
                    }
				
			}
		])

})