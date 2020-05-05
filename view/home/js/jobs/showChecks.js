$(document).ready(function() {
    loadData();

    var ignore = document.getElementById('ignore');
    var filter = document.getElementById('filter');
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
            $("#evaluatePdbDownload_value").html(data.evaluatePdbDownload);
            $("#evaluatePdb_value").html(data.evaluatePdb);
            $("#evaluateChains_value").html(data.evaluateChains);
            //tabla dinamica
            var url = "../../../jobs/"+user+"/"+job+"/results/error.json";
            console.log(url);
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