var app=angular.module('app',[])
app.run(function($rootScope,$http){
	$rootScope.data={}
	$http.get('data.tsv').then(function(ans){
		var data=ans.data
		data=data.replace(/\r/g,'\n').replace(/\n+/g,'\n').split('\n')
		for(var i in data)
			data[i]=data[i].split('\t')
		$rootScope.data.list=data.slice(1)
	})
})