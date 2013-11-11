

require.config({
		paths:{
			angular : "../lib/angular"

		},
		shim:{
			angular:{

				exports:"angular"
			}

		}


})

require(['angular','app','controllers/todo','todoStorage/todoStorage'],function(angular){
		angular.bootstrap(document,['todomvc']);
})
