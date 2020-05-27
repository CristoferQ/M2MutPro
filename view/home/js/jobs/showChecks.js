$(document).ready(function() {
    loadData();
    ignore();
    filter();
  });
  
  function loadData(){
      var user = getQuerystring("user");
      var job = getQuerystring("job");

    var nameFile = "../../../jobs/"+user+"/"+job+"/results/summary_log.json";
          readTextFile(nameFile, function(text){
            var data = JSON.parse(text);
            console.log(data);  
            //tabla fija
            $("#exec_value").html(data.exec);
            $("#evaluateCsv_value").html(data.evaluateCsv);
            $("#evaluateNullData_value").html(data.evaluateNullData);
            $("#evaluatePdbDownload_value").html(data.evaluatePdbDownload);
            $("#evaluatePdb_value").html(data.evaluatePdb);
            $("#evaluateChains_value").html(data.evaluateChains);
            //tabla dinamica
            var url = "../../../jobs/"+user+"/"+job+"/results/error.json";
              $('#example').DataTable( {
                  "ajax": url
              } );
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
      var ruta = "location.href=\"../jobStatistics/?user="+user+"&job="+job+"\"";
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
      var ruta = "location.href=\"../jobStatistics/?user="+user+"&job="+job+"\"";
      setTimeout(ruta, 3000);
		});
	});
}