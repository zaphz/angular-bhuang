

define(["app","todoStorage/todoStorage"],function(app){

		return app.controller('TodoController',["$scope","$location","todoStorage","filterFilter",
			function TodoController($scope,$location,todoStorage,filterFilter){
					var todos = $scope.todos = todoStorage.get();

					$scope.newTodo = "";

					$scope.title = "TODOMVC";

					
					$scope.$watch("todos",function(){
						console.log("watch");
					},true);


					$scope.addNewTodo = function(){
						var tmpToDo =  $scope.newTodo.trim();
						if(!tmpToDo.length){
							return;
						}
						todos.push({
							title : tmpToDo ,
							completed : false  

						});

						console.log($scope.newTodo);

						$scope.newTodo = "";


					};
					

					




			}
		])

})