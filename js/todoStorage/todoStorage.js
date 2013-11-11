
define(["app"],function(app){
	
	app.factory("todoStorage",function(){
			var STORAGE_ID = "asdf8d7sa689f689sad6f";

			return {
				put : function(todos){
						localStorage.setItem(STORAGE_ID,JSON.stringify(todos));

				},
				get :function(){
						return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');


				}


			}


		}
	)
})