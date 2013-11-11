require.config({
		paths:{
			angular : "../bower_components/angular/angular"

		},
		shim:{
			angular:{

				exports:"angular"
			}

		}


})

require(['angular','app','controllers/todo','todoStorage/todoStorage','directive/todoFocus','directive/todoBlur'],function(angular){
		angular.bootstrap(document,['todomvc']);
})
