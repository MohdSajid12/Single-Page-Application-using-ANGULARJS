var myApp = angular.module('myApp', ['ngRoute'])


myApp.config(["$routeProvider" , function($routeProvider)
{
	$routeProvider.
	when('/teacher',{
		templateUrl : "views/teacher.html",
		controller: "teacher_myController"
	}).
	when('/student',{
		templateUrl : "views/student.html",
		controller: "student_myController"
	}).
	when('/course',{
		templateUrl : "views/course.html",
		controller: "course_myController"
	}).   
	when('/gallery',{
		templateUrl : "views/gallery.html",
		controller: "gallery_myController"
	}).
	otherwise({
		redirectTo:"first.html"
	})
}])
myApp.controller('teacher_myController', function($scope){
   
	$scope.teachers = [
		{name: 'sajid',age:23,college:'Modi'},
		{name: 'shadab',age:22,college:'Gurukul'},
		{name: 'akshat',age:28,college:'Maharshi'}
	]
	
});

myApp.controller('student_myController', function($scope){
   
	$scope.students =[

		"sajid" ,"Kapil" , "Akshat" ,"Harsh" , "Gaurav" ,"Sorabh" ,"sahil"
	]
	
});

myApp.controller('course_myController', function($scope){
   
	$scope.courses =[
		'web deveolopment' ,'java' , 'Html' ,'Css' ,'Php'
	]
});

myApp.controller('gallery_myController', function($scope){
   
	$scope.pic1 = 'images/download.jpg'
	$scope.pic2 = 'images/student2.jpg'
	
});





