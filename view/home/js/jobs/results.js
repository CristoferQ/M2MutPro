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
		}).done( function(info){            
        $("#idJob").html(job);
        var data = JSON.parse(info);
        $("#nameJob").html(data.nameJob);
        $("#descJob").html(data.descriptionJob);
        $("#typeOfTask").html(data.typeDataSet);
        $("#protein").html(data.pdbCode);
        $("#numberOfExamples").html(data.numberOfExamples);

        //var nameFile = "../../../jobs/"+user+"/"+job+"/results/results.json";
      var nameFile = "../../../jobs/1/1594879133/results/results.json";
      readTextFile(nameFile, function(text){
        var data = JSON.parse(text);
        $("#WT_RSA_MIN").html(data.responseStatistics.WT_RSA['Minimum']);
        $("#WT_RSA_MAX").html(data.responseStatistics.WT_RSA['Maximum']);
        $("#WT_RSA_MEAN").html(data.responseStatistics.WT_RSA['Mean']);
        $("#WT_RSA_STD").html(data.responseStatistics.WT_RSA['Standard deviation']);
        $("#WT_DEPTH_MIN").html(data.responseStatistics.WT_DEPTH['Minimum']);
        $("#WT_DEPTH_MAX").html(data.responseStatistics.WT_DEPTH['Maximum']);
        $("#WT_DEPTH_MEAN").html(data.responseStatistics.WT_DEPTH['Mean']);
        $("#WT_DEPTH_STD").html(data.responseStatistics.WT_DEPTH['Standard deviation']);
        $("#MT_RSA_MIN").html(data.responseStatistics.MT_RSA['Minimum']);
        $("#MT_RSA_MAX").html(data.responseStatistics.MT_RSA['Maximum']);
        $("#MT_RSA_MEAN").html(data.responseStatistics.MT_RSA['Mean']);
        $("#MT_RSA_STD").html(data.responseStatistics.MT_RSA['Standard deviation']);
        $("#MT_DEPTH_MIN").html(data.responseStatistics.MT_DEPTH['Minimum']);
        $("#MT_DEPTH_MAX").html(data.responseStatistics.MT_DEPTH['Maximum']);
        $("#MT_DEPTH_MEAN").html(data.responseStatistics.MT_DEPTH['Mean']);
        $("#MT_DEPTH_STD").html(data.responseStatistics.MT_DEPTH['Standard deviation']);
        $("#Predicted_DDG_MIN").html(data.responseStatistics.Predicted_DDG['Minimum']);
        $("#Predicted_DDG_MAX").html(data.responseStatistics.Predicted_DDG['Maximum']);
        $("#Predicted_DDG_MEAN").html(data.responseStatistics.Predicted_DDG['Mean']);
        $("#Predicted_DDG_STD").html(data.responseStatistics.Predicted_DDG['Standard deviation']);
        });



    $('#continuousAttributes').on('change', function() {
      readTextFile(nameFile, function(text){
        var valor = $("#continuousAttributes").val();
        var texto = $("#continuousAttributes option:selected").text();
        var data = JSON.parse(text);
        var data = [{
          x: data.continuousAttributes[valor],
          type: 'histogram',
        }];
        var layout = {
          title: texto,
        };
        Plotly.newPlot('count1', data, layout);
        });
      });

      $('#categoricalAttributes').on('change', function() {
        readTextFile(nameFile, function(text){
          var valor = $("#categoricalAttributes").val();
          var texto = $("#categoricalAttributes option:selected").text();
          var data = JSON.parse(text);
          var data = [{
            textposition: 'inside',
            values: Object.values(data.categoricalAttributes[valor]),
            labels: Object.keys(data.categoricalAttributes[valor]),
            type: 'pie',
          }];
          var layout = {
            title: texto,
          };
          Plotly.newPlot('count2', data, layout);
          });
        });


        var nameFile2 = "../../../jobs/1/1594879133/results/resultsTraining.json";
        readTextFile(nameFile2, function(text){
          var data = JSON.parse(text);
          console.log(data)
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