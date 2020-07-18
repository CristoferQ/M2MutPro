$(document).ready(function() {
    loadData();
  });
  
  function loadData(){
    var user = 1;
    var job = getQuerystring("job");
    $.ajax({
			method:"GET",
            url: "../php/jobs/results.php",
            data:{
                user,job
            }
		}).done( function( info ){            
        $("#idJob").html(job);
        var data = JSON.parse(info);
        $("#nameJob").html(data.nameJob);
        $("#descJob").html(data.descriptionJob);
        $("#typeOfTask").html(data.typeDataSet);
        $("#protein").html(data.pdbCode);
        $("#numberOfExamples").html(data.numberOfExamples);

        var nameFile = "../../../jobs/"+user+"/"+job+"/results/statistics.json";
          readTextFile(nameFile, function(text){
            var data = JSON.parse(text);
            console.log(data);  
            //tabla fija
            var data = [
              {
                x: data,
                y: data,
                type: 'bar'
              }
            ];
            
            Plotly.newPlot('count1', data);
        });
        
    readTextFile(nameFile, function(text){
    var data = JSON.parse(text);
    console.log(data);  
    for (let i = 0; i < data.count6.counter_y.length; i++) {
      var allZeros = data.count6.counter_y[i].every(zeroTest);
      if (allZeros == true){
        $("#"+[i]).hide();
      }
    }
    });
    $('select').on('change', function() {
    readTextFile(nameFile, function(text){
      var valor = $("#select").val();
      var texto = $("option:selected").text();
  
      var data = JSON.parse(text);
      console.log(data);  
      var data = [{
        textposition: 'inside',
        values: data.count6.counter_y[valor],
        labels: data.count6.counter_x,
        type: 'pie'
      
      }];
      var layout = {
        title: texto,
      };
      Plotly.newPlot('count6', data, layout);
    });
    console.log(this.value);
    });
  });
  
  

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
  }
  function zeroTest(element) {
  return element === 0;
  }
}