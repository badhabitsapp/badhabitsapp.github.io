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



var dayList = document.getElementById("days");

for(var i = 0; i<limit; i++) {
	var printDay = document.createElement('li');
	printDay.innerText = i+1;
	dayList.appendChild(printDay);
}


}
