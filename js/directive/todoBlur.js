define("app",function(app){

		app.directive("inputBlur",function(){
				return  function(scope,elem,attrs){


						elem.bind('blur',function(){

								scope.$apply(attrs.todoBlur);
						})

				};



		})


})