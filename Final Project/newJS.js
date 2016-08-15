
$(document).ready(function(){
	$.ajax({
		url:'https://spreadsheets.google.com/feeds/list/13fVDB9pcLAjzmxwQR1HcY9mdDon5q00UCi0N6CPUm7s/1/public/basic?alt=json',
		success: function(data){
			//readDataAndAppend(data);
		}
	});

	//on submission of the html form, get the data
	$("#contact").submit(function(event){
		event.preventDefault();
		var data = $(this).serialize();
		
		
		var raw = document.createElement('p');
		raw.innerText = JSON.stringify("Thank you for your message! We will try to get back to you as soon as possible!");
		document.body.appendChild(raw);
		
		console.log(data)

		$.ajax({
    	url: 'https://script.google.com/macros/s/AKfycbzyJOTnkYpbS1iQQiZy_2vWlYB4z04-y-Ypwe9yXbbpb3VPR18/exec',
		type: "POST",
		  data: data
		});
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
	
	var raw = document.createElement('p');
	raw.innerText = JSON.stringify(rows);
	document.body.appendChild(raw);
	
	
	
	
}
