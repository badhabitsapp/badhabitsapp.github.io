var allowedUser = false;
var allowedPwd = false;


$(document).ready(function(){
	$.ajax({
		url:'https://spreadsheets.google.com/feeds/list/1hbmRHa5C9RnZ2p6Z6kxAW59kp8fa7Z5sJDAhHRjv4jM/1/public/basic?alt=json',
		success: function(data){
			//readDataAndAppend(data);
		}
	});

	//on submission of the html form, get the data
	$("#account-login").submit(function(event){
		event.preventDefault();
		var name = $(this).serialize();
		console.log(name)
							
		$.ajax({
			url:'https://spreadsheets.google.com/feeds/list/1hbmRHa5C9RnZ2p6Z6kxAW59kp8fa7Z5sJDAhHRjv4jM/1/public/basic?alt=json',
			success: function(data){
			
			checkName(data, name);
											
			if (allowedUser == true) {
			
				
				
				checkPwd(data, name);
				
				
				
				if (allowedPwd == true) {
				
					
					var raw = document.createElement('p');
					raw.innerText = JSON.stringify("You have logged in :)");
					document.body.appendChild(raw);
					//readDataAndAppend(data);
					
					 window.location.assign("index.html");
				}
				else {
					var raw = document.createElement('p');
					raw.innerText = JSON.stringify("Sorry, incorrect password");
					document.body.appendChild(raw);
				}
				
				allowedUser = false;
				allowedPwd = false;
			}
			else {
				var raw = document.createElement('p');
				raw.innerText = JSON.stringify("Sorry, incorrect username");
				document.body.appendChild(raw);
			}
		}
		});	
	})
	
	//on submission of the html form, get the data
	$("#create-account").submit(function(event){
		event.preventDefault();
		var data = $(this).serialize();
		
		
		var raw = document.createElement('p');
		raw.innerText = JSON.stringify("You have successfully signed up :) ");
		document.body.appendChild(raw);
		
		console.log(data)

		$.ajax({
    	url: 'https://script.google.com/macros/s/AKfycbypHQWHUByclr7iS9q8PW5juZpE9mc-2e6Fnqy7-1nBjOoMkMw/exec',
		type: "POST",
		  data: data
		});
		window.location.assign("index.html");
	})
	
	
});


function readDataAndAppend(data){
	var rows = [];
	var cells = data.feed.entry;
	
	for (var i = 0; i < cells.length; i++){
		var rowObj = {};
		rowObj.timestamp = cells[i].title.$t;
		var rowCols = cells[i].content.$t.split(',');
		for (var j = 0; j < rowCols.length; j++){
			var keyVal = rowCols[j].split(':');
			rowObj[keyVal[0].trim()] = keyVal[1].trim();
		}
		rows.push(rowObj);
	}
		
	
}
function checkPwd(data, name){

	var keyValuePairs = name.split('&');
	
	var pwdArray = keyValuePairs[1].split('=');
	var pwd = pwdArray[1];
	
	var rows = [];
	var cells = data.feed.entry;
	
	for (var i = 0; i < cells.length; i++){
		var rowObj = {};
		var rowCols = cells[i].content.$t.split(',');
		var keyVal = rowCols[1].split(':');
		rowObj[keyVal[0].trim()] = keyVal[1].trim();
		
		if (rowObj[keyVal[0].trim()] == pwd) {
			allowedPwd = true;
		}
	}
}

function checkName(data, name){

	var keyValuePairs = name.split('&');
	
	
	var usernameArray = keyValuePairs[0].split('=');
	var username = usernameArray[1];
	
	
	var rows = [];
	var cells = data.feed.entry;
	
	for (var i = 0; i < cells.length; i++){
		var rowObj = {};
		var rowCols = cells[i].content.$t.split(',');
		var keyVal = rowCols[0].split(':');
		rowObj[keyVal[0].trim()] = keyVal[1].trim();
		
		
		if(rowObj[keyVal[0].trim()] == username) {
			allowedUser = true;
			
		}
	}
	
	
}

function myFunction() {



var day_of_week = new Array('Su','Mo','Tu','We','Th','Fr','Sa');
var month_of_year = new Array('January','February','March','April','May','June','July','August','September','October','November','December');

//  DECLARE AND INITIALIZE VARIABLES
var Calendar = new Date();

var year = Calendar.getFullYear();     // Returns year
var month = Calendar.getMonth();    // Returns month (0-11)
var today = Calendar.getDate();    // Returns day (1-31)
var weekday = Calendar.getDay();    // Returns day (1-31)
var limit;


var thisMonth = document.getElementById("thisMonth");
var printMonth = document.createElement('li');
printMonth.innerText = month_of_year[month];
thisMonth.appendChild(printMonth);
//alert("Month");

var weekList = document.getElementById("week");
for (var j=0; j<7; j++){
	var printWeek = document.createElement('li');
	printWeek.innerText = day_of_week[j];
	weekList.appendChild(printWeek);
	//alert("Week");
}



if (month == 1){
	if (year%4 == 0) {
		limit = 29;
	}
	else {
		limit = 28;
	}
	
}

else if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
	limit = 31;
}
else {
	limit = 30;
}



var dayList = document.getElementById("demoChange");

for(var i = 0; i<limit; i++) {
	var printDay = document.createElement('li');
	printDay.innerText = i+1;
	dayList.appendChild(printDay);
}


}

function newCalendar(){
 var elem = document.getElementById('demoChange');
    elem.parentNode.removeChild(elem);
    


var month_of_year = new Array('January','February','March','April','May','June','July','August','September','October','November','December');

//  DECLARE AND INITIALIZE VARIABLES
var Calendar = new Date();

var year = Calendar.getFullYear();     // Returns year
var month = Calendar.getMonth();    // Returns month (0-11)
var today = Calendar.getDate();    // Returns day (1-31)
var weekday = Calendar.getDay();    // Returns day (1-31)
var limit;


if (month == 1){
	if (year%4 == 0) {
		limit = 29;
	}
	else {
		limit = 28;
	}
	
}

else if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
	limit = 31;
}
else {
	limit = 30;
}



var dayList = document.getElementById("days");

for(var i = 0; i<limit; i++) {
	var printDay = document.createElement('li');
	if (i==5 || i==8 || i==12){
		
		printDay.id = "bolded";
		printDay.innerText = (String(i+1) + ": 1");
	
		
	}
	else if (i==3 || i==7){
		printDay.id = "bolded";
		printDay.innerText = String(i+1) + ": 0";
	}
	else if (i==4 || i==6 || i==9 || i==10|| i==11) {
		printDay.id = "bolded";
		printDay.innerText = String(i+1) + ": 2";
	}
	else {
		printDay.innerText = i+1;
	}
	dayList.appendChild(printDay);
}

var newQuestion = document.getElementById("question");
newQuestion.innerText = "How many cups of coffee did you drink today?";

var newGoal = document.getElementById("goal");
newGoal.innerText = "GOAL: 7 CUPS OF COFFEE PER WEEK";

}






			




