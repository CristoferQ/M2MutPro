$(document).ready(function() {
    loadData();
    ignore();
    filter();
  });
  
  function loadData(){

    //var nameFile = "../../../jobs/"+user+"/"+job+"/results/summary_log.json";
    var nameFile = "../../../jobs/"+1+"/"+1588746035+"/results/statistics.json";
          readTextFile(nameFile, function(text){
            var data = JSON.parse(text);
            console.log(data);  
            //tabla fija
            var data = [
              {
                x: data.counter_x,
                y: data.counter_y,
                type: 'bar'
              }
            ];
            
            Plotly.newPlot('myDiv', data);
        });
  }

  function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
  }

  function getQuerystring(key) {
	var url_string = window.location;
	var url = new URL(url_string);
	var c = url.searchParams.get(key);
	return c;
};

var ignore = function(){
	$("#ignore").on("click", function(){
    var user = getQuerystring("user");
    var job = getQuerystring("job");
    var opc = 0
		$.ajax({
			method:"GET",
			url: "../php/jobs/cleanCsv.php",
			data: {
        user,job,opc
			}
		}).done( function( info ){
      var json_info = JSON.parse( info );
      var message = "Ignore correcto";
      $("#success_text").html(message);
      $('#okResponse').show();
      var ruta = "location.href=\"../jobStatistics/\"";
      setTimeout(ruta, 3000);
		});
	});
}

var filter = function(){
	$("#filter").on("click", function(){
    var user = getQuerystring("user");
    var job = getQuerystring("job");
    var opc = 1
		$.ajax({
			method:"GET",
			url: "../php/jobs/cleanCsv.php",
			data: {
        user,job,opc
			}
		}).done( function( info ){
      var json_info = JSON.parse( info );
      var message = "Filter correcto";
      $("#success_text").html(message);
      $('#okResponse').show();
      var ruta = "location.href=\"../jobStatistics/\"";
      setTimeout(ruta, 3000);
		});
	});
}